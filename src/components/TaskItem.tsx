import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { memo, useCallback, useState } from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, Vibration, View } from 'react-native'
import { Menu, MenuOptions, MenuTrigger } from 'react-native-popup-menu'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { removeTaskAction, startEditTaskAction } from '../redux/task.reducer'
import GlobalStyles from '../styles/GlobalStyles'
import { Task } from '../types/Task'
import ConfirmModal from './modals/ConfirmModal'
import CustomizedMenuOption from './CustomizedMenuOption'

type TaskItemProps = {
  data: Task
  navigation: NativeStackNavigationProp<any>
}

const TaskItem = ({ navigation, data }: TaskItemProps) => {
  const [menuRef, setMenuRef] = useState<Menu | null>()
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [confirmModal, setConfirmModal] = useState(false)
  const { taskList } = useSelector((state: RootState) => state.taskReducer)
  const dispach = useDispatch()

  const onEditTask = useCallback(() => {
    dispach(startEditTaskAction(data))
    navigation.navigate('Task')
  }, [taskList])

  const deleteTaskHandling = useCallback((taskId: number) => {
    dispach(removeTaskAction(taskId))
    setConfirmModal(false)
  }, [])

  return (
    <SafeAreaView>
      <Pressable
        style={[styles.body, { backgroundColor: isMenuOpen ? '#f6f6f6' : '#fff' }]}
        onLongPress={() => {
          Vibration.vibrate(75)
          menuRef?.open()
        }}
      >
        <View style={[styles.taskColor, { backgroundColor: data.color, elevation: 2 }]} />

        <View style={styles.itemContent}>
          <Text style={[GlobalStyles.title, { marginTop: 10, marginBottom: 10 }]}>{data.title}</Text>
          <Text style={[GlobalStyles.normalText]} ellipsizeMode='tail' numberOfLines={1}>
            {data.desc}
          </Text>
          <Text style={[styles.date, { marginTop: 15, marginBottom: 10 }]}>
            Last modified: {new Date(data.updatedAt).toLocaleTimeString()}
          </Text>
        </View>

        <Menu
          onOpen={() => {
            setMenuOpen(true)
          }}
          onClose={() => {
            setMenuOpen(false)
          }}
          ref={(ref) => {
            setMenuRef(ref)
          }}
        >
          <MenuTrigger style={styles.btnOptions}>
            <Icon name={'ellipsis-v'} size={18} color={'#000'} />
          </MenuTrigger>
          <MenuOptions optionsContainerStyle={{ marginLeft: -35, marginTop: 0 }}>
            <CustomizedMenuOption icon='edit' text='Edit' onSelect={onEditTask} />
            <CustomizedMenuOption icon='bell' text='Set notification' />
            <CustomizedMenuOption
              onSelect={() => {
                setConfirmModal(true)
              }}
              icon='trash'
              customIconColor='red'
              text='Move to trash'
              customTextColor='red'
            />
          </MenuOptions>
        </Menu>
      </Pressable>
      <ConfirmModal
        visible={confirmModal}
        title={'Warning'}
        message={'Are you sure moving task to trash?'}
        onBtnDeletePress={() => {
          setConfirmModal(false)
        }}
        onBtnOkPress={() => deleteTaskHandling(data._id ?? 0)}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 7,
    elevation: 5,
    borderRadius: 5,
    borderColor: '#000'
  },
  optionsBox: {
    position: 'absolute',
    zIndex: 999,
    right: 40,
    width: 200,
    height: 400,
    backgroundColor: 'lightgreen'
  },
  itemContent: {
    flex: 1,
    marginLeft: 10
  },
  taskColor: {
    height: '100%',
    width: 20,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  date: {
    fontSize: 10,
    fontStyle: 'italic'
  },
  btnOptions: {
    width: 25,
    height: 40,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default memo(TaskItem)

import { DrawerNavigationProp } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { Appbar } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { taskSearchAction } from '../../redux/task.reducer'
import { searchTaskByTitleOrContent } from '../../sqlite/task.sqlite'
import GlobalStyles from '../../styles/GlobalStyles'
import { Task } from '../../types/Task'
import TextInputWithLeftIcon from '../TextInputWithLeftIcon'

export default function SearchToolbar() {
  const navigation = useNavigation<DrawerNavigationProp<any>>()
  const [key, setKey] = useState<string>('')
  const dispach = useDispatch()

  useEffect(() => {
    searchTaskByTitleOrContent(key, (result: Task[]) => {
      if (key.length > 0) {
        dispach(taskSearchAction(result))
      } else {
        dispach(taskSearchAction([]))
      }
    })
  }, [key])

  return (
    <Appbar.Header style={[GlobalStyles.toolbarHeader, { padding: 20 }]}>
      <Appbar.BackAction
        color='#fff'
        onPress={() => {
          navigation.goBack()
        }}
      />
      <TextInputWithLeftIcon onTextChange={(value) => setKey(value)} />
      <Appbar.Action icon={'cog'} size={22} color={'#fff'} onPress={() => {}} />
    </Appbar.Header>
  )
}

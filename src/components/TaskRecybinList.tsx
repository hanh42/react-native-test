import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ActivityIndicator, SectionList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import useOnResume from '../hooks/UseOnResume'
import { RootState } from '../redux/store'
import { setTasksAction } from '../redux/task.reducer'
import { getTaskFromTrash } from '../sqlite/task.sqlite'
import { Task } from '../types/Task'
import { TaskSection } from '../types/TaskSection'
import { getTaskBySections, isExistsTaskInactive } from '../utils/CommonUtils'
import TaskRecybinItem from './TaskRecybinItem'
import TaskSectionList from './TaskSectionList'
import TaskSectionHeader from './toolbars/TaskSectionHeader'

function TaskRecybinList() {
  const [data, setData] = useState<TaskSection[]>([])
  const [isLoading, setLoading] = useState(true)
  const { taskList } = useSelector((state: RootState) => state.taskReducer)

  useEffect(() => {
    getTaskFromTrash((data) => {
      setData(getTaskBySections(data))
      setLoading(false)
    })
    console.log('Task Recybin Resume')
  }, [taskList])

  let taskRenderSectionHeader = useCallback(
    (section: TaskSection): JSX.Element => {
      if (section.data.length > 0) {
        return <TaskSectionHeader title={new Date(section.title).toDateString()} />
      } else return <></>
    },
    [taskList]
  )

  let taskRenderItem = useCallback(
    (item: Task): JSX.Element => {
      return <TaskRecybinItem data={item} />
    },
    [taskList]
  )

  return (
    <View style={isLoading ? { flex: 1, justifyContent: 'center', alignItems: 'center' } : {}}>
      {isLoading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <SectionList
          keyExtractor={(item, index) => index.toString()}
          sections={data}
          renderItem={({ item, index }) => taskRenderItem(item)}
          renderSectionHeader={({ section }) => taskRenderSectionHeader(section)}
        />
      )}
    </View>
  )
}

export default React.memo(TaskRecybinList)

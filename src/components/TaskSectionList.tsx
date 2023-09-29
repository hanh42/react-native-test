import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { memo, useCallback, useMemo } from 'react'
import { SectionList } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Task } from '../types/Task'
import { TaskSection } from '../types/TaskSection'
import { getTaskBySections, isExistsTaskDone, isExistsTaskTodo } from '../utils/CommonUtils'
import TaskItem from './TaskItem'
import TaskSectionHeader from './toolbars/TaskSectionHeader'

interface TaskSectionListProps {
  taskRenderType: number
}

export const TASK_RENDER_TYPE = {
  todo: 0,
  done: 1
}

function TaskSectionList(props: TaskSectionListProps) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const { taskList } = useSelector((state: RootState) => state.taskReducer)

  let data = useMemo(() => {
    return getTaskBySections([...taskList])
  }, [taskList])

  let taskRenderSectionHeader = useCallback(
    (section: TaskSection): JSX.Element => {
      let check = false

      if (props.taskRenderType === TASK_RENDER_TYPE.todo) {
        check = isExistsTaskTodo(section.data)
      } else if (props.taskRenderType === TASK_RENDER_TYPE.done) {
        check = isExistsTaskDone(section.data)
      }

      if (check) {
        return <TaskSectionHeader title={new Date(section.title).toDateString()} />
      } else return <></>
    },
    [taskList]
  )

  let taskRenderItem = useCallback(
    (item: Task): JSX.Element => {
      let check = false

      if (props.taskRenderType === TASK_RENDER_TYPE.todo) {
        check = !item.status
      } else if (props.taskRenderType === TASK_RENDER_TYPE.done) {
        check = item.status
      }

      if (check && item.active) {
        return <TaskItem navigation={navigation} data={item} />
      } else {
        return <></>
      }
    },
    [taskList]
  )

  return (
    <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={data}
      renderItem={({ item, index }) => taskRenderItem(item)}
      renderSectionHeader={({ section }) => taskRenderSectionHeader(section)}
    />
  )
}

export default memo(TaskSectionList)

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import TaskItem from './TaskItem'

interface TaskSearchResultListProps {
  style: StyleProp<ViewStyle>
}

export default function TaskSearchResultList({ style }: TaskSearchResultListProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const { taskSearchResult } = useSelector((state: RootState) => state.taskReducer)

  return (
    <View style={style}>
      {taskSearchResult.map((item, index) =>
        item.active ? <TaskItem key={index} navigation={navigation} data={item} /> : <></>
      )}
    </View>
  )
}

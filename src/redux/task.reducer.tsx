import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Task } from '../types/Task'
import { Alert } from 'react-native'

interface State {
  taskList: Task[]
  taskSearchResult: Task[]
  editingTask: Task | null
  formData: FormData | null
  imagePath: string | null
}

const initialState: State = {
  taskList: [],
  taskSearchResult: [],
  editingTask: null,
  formData: null,
  imagePath: null
}

const TaskSlice = createSlice({
  name: 'Task',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {}
})

export const {} = TaskSlice.actions

const TaskReducer = TaskSlice.reducer
export default TaskReducer
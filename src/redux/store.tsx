import { configureStore } from '@reduxjs/toolkit'
import TaskReducer from './task.reducer'

export const store = configureStore({
  reducer: { taskReducer: TaskReducer }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

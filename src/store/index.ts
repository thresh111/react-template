import { configureStore } from '@reduxjs/toolkit'
import userReducer, { type UserStateType } from './user'
export type StateType = {
  user: UserStateType
}

export default configureStore<StateType>({
  reducer: {
    user: userReducer
  }
})

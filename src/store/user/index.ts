import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type UserStateType = {}

const INIT_STATE: UserStateType = {}

export const userSlice = createSlice({
  name: 'user',
  initialState: INIT_STATE,
  reducers: {
    loginReducer(state: UserStateType, action: PayloadAction<UserStateType>) {
      return action.payload
    },
    logoutReducer() {
      return INIT_STATE
    }
  }
})

export const { loginReducer, logoutReducer } = userSlice.actions

export default userSlice.reducer

import { USER_DATA } from "@configs/data"
import { createSlice } from "@reduxjs/toolkit"
import { AuthStateInterface } from "interfaces"
import { verifyUser } from "@store/action/userVerify"

export const initialState: AuthStateInterface = {
  user: USER_DATA,
  isAuthenticated: false,
  isLoading: false,
  error: null
}

const authUserInfo = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser: (state: AuthStateInterface, action) => {
      state.isLoading = false
      state.user = action.payload
      state.error = null
    },
    logout: (state: AuthStateInterface) => {
      state.isAuthenticated = false
    },
    loggedIn: (state: AuthStateInterface) => {
      state.isAuthenticated = true
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyUser.pending, (state: AuthStateInterface) => {
        state.isLoading = true
      })
      .addCase(verifyUser.fulfilled, (state: AuthStateInterface, action) => {
        state.isLoading = false
        state.isAuthenticated = true
        state.user = action.payload.data.user
        state.error = null
      })
      .addCase(verifyUser.rejected, (state: AuthStateInterface, action) => {
        state.isLoading = false
        state.isAuthenticated = false
        state.error = action.error.message ?? "An error occurred"
      })
  }
})

export const { updateUser, logout, loggedIn } = authUserInfo.actions
export default authUserInfo.reducer

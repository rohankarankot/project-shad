import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store"

// Define a type for the slice state
interface LoginDialog {
  value: boolean
}

// Define the initial state using that type
const initialState: LoginDialog = {
  value: false,
}

export const loginDialog = createSlice({
  name: "loginDialog",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    open: (state) => {
      state.value = true
    },
    close: (state) => {
      state.value = false
    },
  },
})

export const { open, close } = loginDialog.actions


export default loginDialog.reducer

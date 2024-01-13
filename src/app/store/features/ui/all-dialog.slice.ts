import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store"

// Define a type for the slice state
interface AllDialog {
  openProfileModal: boolean
}

// Define the initial state using that type
const initialState: AllDialog = {
  openProfileModal: false,
}

export const allDialog = createSlice({
  name: "allDialog",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleOpenProfileModal: (state) => {
      state.openProfileModal = !state.openProfileModal
    },
  },
})

export const { toggleOpenProfileModal } = allDialog.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.allDialog

export default allDialog.reducer

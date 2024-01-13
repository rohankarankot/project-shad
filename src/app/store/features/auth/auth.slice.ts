import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../store"

// Define a type for the slice state
interface Authentication {
  token: string | null
}

// Define the initial state using that type
const initialState: Authentication = {
  token: null,
}

export const authentication = createSlice({
  name: "authentication",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    storeToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
  },
})

export const { storeToken } = authentication.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.authentication.token

export default authentication.reducer

import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

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

4
export default authentication.reducer

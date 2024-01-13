import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { loginRegisterAPI } from "./api"
import authSlice from "./features/auth/auth.slice"
import allDialogSlice from "./features/ui/all-dialog.slice"
import loginDialogSlice from "./features/ui/login-dialog.slice"

const rootReducer = combineReducers({
  loginDialog: loginDialogSlice,
  authentication: authSlice,
  allDialog: allDialogSlice,

  [loginRegisterAPI.reducerPath]: loginRegisterAPI.reducer,
})
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loginRegisterAPI.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

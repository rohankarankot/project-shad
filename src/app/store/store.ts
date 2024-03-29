import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { loginRegisterAPI } from "./features/auth/api"
import authSlice from "./features/auth/auth.slice"
import allDialogSlice from "./features/ui/all-dialog.slice"
import loginDialogSlice from "./features/ui/login-dialog.slice"
import locationSlice from "./features/geo-location/location.slice"
import { GeoLocationApi } from "./features/geo-location/api"
import { GetPostsFromCity } from "./features/featured-city-posts/api"
import { ProductsAPI } from "./features/products/api"

const rootReducer = combineReducers({
  loginDialog: loginDialogSlice,
  authentication: authSlice,
  geoLocation: locationSlice,
  allDialog: allDialogSlice,

  [loginRegisterAPI.reducerPath]: loginRegisterAPI.reducer,
  [GeoLocationApi.reducerPath]: GeoLocationApi.reducer,
  [GetPostsFromCity.reducerPath]: GetPostsFromCity.reducer,
  [ProductsAPI.reducerPath]: ProductsAPI.reducer,
})
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      loginRegisterAPI.middleware,
      GeoLocationApi.middleware,
      GetPostsFromCity.middleware,
      ProductsAPI.middleware,
    ),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

import { configureStore } from "@reduxjs/toolkit"
import authUserInfo from "./slices/auth.slice"
import { fetchAllQuery } from "./storeHook"
import uiSlice from "./slices/ui.slice"
import filterQuery from "./slices/filterQuery.slice"

export const store = configureStore({
  reducer: {
    [fetchAllQuery.reducerPath]: fetchAllQuery.reducer,
    userInterface: uiSlice,
    auth: authUserInfo,
    filterQuery
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchAllQuery.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

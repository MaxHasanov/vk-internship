import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { getAllGroups } from '../createApi/createApi'
import { groupReducer } from '../reducers/reducers'

export const store = configureStore({
  reducer: {
    [getAllGroups.reducerPath]: getAllGroups.reducer, filterGroups: groupReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getAllGroups.middleware),
})

export const rootState = store.getState()
// setupListeners(store.dispatch)

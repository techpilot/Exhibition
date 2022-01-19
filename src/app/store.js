import { configureStore } from "@reduxjs/toolkit";
import artReducer from "../../slices/artSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage"
// import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  // blacklist: ['admin']
}

const persistedReducer = persistReducer(persistConfig, artReducer)

// export const store = configureStore({
//   reducer: {
//     art: artReducer
//   }
// })

// Believed to purge the whole state
// extraReducers: (builder) => {
//   builder.addCase(PURGE, (state) => {
//     customEntityAdapter.removeAll(state)
//   })
// }

export const store = configureStore({
  reducer: {
    art: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})
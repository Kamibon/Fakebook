"use client";
import { configureStore } from "@reduxjs/toolkit";
import socialReducer from "./stateSlice";

export const store = configureStore({
  reducer: {
    social: socialReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;

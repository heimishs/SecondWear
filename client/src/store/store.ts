// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice"; // userSlice에서 reducer 불러오기

export const store = configureStore({
  reducer: {
    user: userReducer, // userSlice의 상태를 state.user로 관리
  },
});

// RootState 및 AppDispatch 타입 정의
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

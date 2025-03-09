import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice"; // ✅ 리듀서 불러오기
import userReducer from "./slices/userSlice"; // ✅ 리듀서 불러오기

export const store = configureStore({
  reducer: {
    // ✅ 올바른 리듀서 객체 전달
    counter: counterReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

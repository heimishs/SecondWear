import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice"; // ✅ 실제 reducer import

export const store = configureStore({
  reducer: {
    counter: counterReducer, // ✅ reducer 추가 (반드시 필요)
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

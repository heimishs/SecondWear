// src/features/counterSlice.ts

/*
  상태(조각)관리를 한곳에서 관리하기 위한 함수 
  특정 상태의 기본값 정의
  리듀서 생성
  액션 생성
*/
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 상태 타입 정의
interface CounterState {
  value: number;
}

// 초기 상태 설정
const initialState: CounterState = {
  value: 0,
};

// createSlice 사용
const counterSlice = createSlice({
  name: "user", // 슬라이스 이름 (액션 타입의 prefix 역할)
  initialState, // 초기 상태
  reducers: {
    // 리듀서(상태 변경 함수)
    increment: (state) => {
      state.value += 1; // immer 적용으로 직접 변경 가능
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload; // action의 payload 값만큼 증가
    },
  },
});

// 액션과 리듀서 export
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

"use client"; // ← 클라이언트에서만 실행

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { increment, decrement, setCount } from "@/redux/slices/counterSlice";

export default function CounterComponent() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="p-4 border rounded-md">
      <p className="text-xl font-bold">Count: {count}</p>
      <button
        onClick={() => dispatch(increment())}
        className="mr-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        +
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        -
      </button>
      <button
        onClick={() => dispatch(setCount(100))}
        className="ml-2 bg-green-500 text-white px-4 py-2 rounded"
      >
        Set to 100
      </button>
    </div>
  );
}

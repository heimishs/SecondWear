"use client"; // ← 최상단에 추가

import CounterComponent from "@/components/CounterComponent";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <CounterComponent />
    </div>
  );
}

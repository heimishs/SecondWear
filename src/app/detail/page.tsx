"use client"; // ← 최상단에 추가

import Detail from "@/components/pages/Detail";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Detail />
    </div>
  );
}

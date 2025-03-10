"use client"; // ← 최상단에 추가

import Otstore from "@/components/pages/Otstore";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Otstore />
    </div>
  );
}

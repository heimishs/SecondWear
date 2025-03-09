"use client"; // ← 최상단에 추가

import DetailSearch from "@/components/pages/DetailSearch";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <DetailSearch />
    </div>
  );
}

import React from "react";
import Banner from "@/components/ui/slides/Banner"; // ✅ 올바른 경로 사용
import Search from "@/components/ui/search/Search";
import Wight from "@/components/ui/widgets/Wight";
import Wight2 from "@/components/ui/widgets/Wight2";
import Wight3 from "@/components/ui/widgets/Wight3";

const Content: React.FC = () => {
  return (
    <main className="w-full max-w-[1200px] mx-auto p-4">
      <Search />
      <Banner />
      <Wight />
      <Wight2 />
      <Wight3 />
    </main>
  );
};

export default Content;

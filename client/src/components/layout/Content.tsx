import React from "react";
import Banner from "../ui/Banner";
import Search from "../ui/Search";
import Wight from "../ui/Wight";
import Wight2 from "../ui/Wight2";
import Wight3 from "../ui/Wight3";

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

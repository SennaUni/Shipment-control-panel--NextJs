import React from "react";

import Menu from "@/components/Menu";
import Widget from "@/components/Widget";

const MainPage = () => {
  return (
    <main className="h-screen bg-zinc-50 dark:bg-black flex text-zinc-800 dark:text-slate-50">
      {/* <Widget /> */}
      <Menu />
    </main>
  );
};

export default MainPage;

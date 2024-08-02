import { Navbar } from "@/components/common/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="text-neutral-800 bg-white dark:text-neutral-200 dark:bg-slate-950">
        <main className="px-4 w-full xl:max-w-screen-2xl md:mx-auto">
        {children}
        </main>
      </div>
    </>
  );
};

export default layout;

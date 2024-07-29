import ProjectList from "@/components/project/ProjectList";
import React from "react";

const page = () => {
  return (
    <>
      <div className="relative z-30 flex flex-col gap-3 md:flex-row items-end my-12">
        <div className="w-full md:w-2/4">
          <h1 className="text-4xl font-bold bg-clip-text bg-gradient-to-b from-slate-900 to-slate-900/70 dark:from-white dark:to-white/40 text-transparent border-none">
            Projects
          </h1>
          <p className="text-gray-500 md:text-xl text-lg pt-1 w-full">
            Beautiful handmade-crafted projects
          </p>
        </div>
        <div className="w-full flex justify-end">
          <div className="w-full md:w-1/2">
          <input placeholder="search" className="flex h-10 w-full backdrop-blur-sm rounded-lg border border-slate-300 bg-transparent py-5 px-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:hover:border-slate-500 transition-all duration-300 ease-in-out focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:text-slate-50 dark:focus:ring-sky-300 dark:focus:ring-offset-sky-500" />
          </div>
        </div>
      </div>
      <div className="grid relative z-10 w-full mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 mt-8">
        <ProjectList />
      </div>
    </>
  );
};

export default page;

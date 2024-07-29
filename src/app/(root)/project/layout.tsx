import React from "react";

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col md:flex-row items-start py-10">
      <div className="w-full md:w-4/5">
      <div className="z-10">
        {children}
      </div>
      </div>
      <aside className="md:max-w-[250px] flex-col md:px-5 pt-10 sticky top-14">
        <h2 className="text-xl font-bold">Support Our Community</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <a href="#" className="text-blue-600">
              React Native Course
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600">
              Master React with TypeScript
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600">
              Master Git & GitHub
            </a>
          </li>
        </ul>
      </aside>
    </main>
  );
};

export default ProjectLayout;

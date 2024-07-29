import { Navbar } from "@/components/common/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
    <div className="px-4">
      {children}
    </div>
    </>
  );
};

export default layout;

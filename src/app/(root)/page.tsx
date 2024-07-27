import React from "react";
import { Navbar } from "@/components/common/Navbar";
import { Feature } from "@/components/common/Feature";

const page = () => {
  return (
    <>
      <Navbar />
    <div className="p-10">
      <Feature />
    </div>
    </> 
  );
};

export default page;

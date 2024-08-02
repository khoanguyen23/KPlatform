import React from "react";
import { Navbar } from "@/components/common/Navbar";
import { Feature } from "@/components/common/Feature";
import Image from "next/image";
import { Demonstration } from "@/components/common/Demonstration";

const page = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="text-xl">If someone likes friends I like them</h1>
        <div className="animation-shape">
        <Image
          src={
            "https://utfs.io/f/a45a669f-b783-44bf-a90a-e0c602b35bfb-89rvm3.png"
          }
          className="max-w-full"
          alt=""
          width={109}
          height={106}
        />
        </div>
        <div>
          <h2 className="mt-20 text-3xl">Look for a parner to colaborate</h2>
          <Demonstration />
        </div>
      </div>
    </main>
  );
};

export default page;

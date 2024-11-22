import { Navbar } from "@/components/common/Navbar";
import Navigation from "@/components/navigation/HomeNavigation";
import Image from "next/image";
import watermarkBG from "../../../public/image/watermarkBG.webp";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="section">
      {/* <Image
        src={watermarkBG}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        style={{ width: "100%", height: "100%" }}
      /> */}
      <Navigation />
      {children}
    </main>
  );
};

export default layout;

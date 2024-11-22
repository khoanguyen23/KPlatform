import Navigation from "@/components/navigation/HomeNavigation";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="section">
      <Navigation />
      {children}
    </main>
  );
};

export default layout;

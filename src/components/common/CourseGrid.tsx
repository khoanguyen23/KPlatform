import React from "react";

const CourseGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 mt-6">
      {children}
    </div>
  );
};

export default CourseGrid;

import { getAllCourse } from "@/lib/actions/course.actions";
import React from "react";
import CourseGrid from "./CourseGrid";
import CourseItem from "../course/CourseItem";

export const Feature = async () => {
  const courses = (await getAllCourse()) || [];
  return (
    <CourseGrid>
      {courses?.length > 0 &&
        courses?.map((item) => (
          <CourseItem key={item.slug} data={item}></CourseItem>
        ))}
    </CourseGrid>
  );
};

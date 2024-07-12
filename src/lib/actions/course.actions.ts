"use server";

import { TCreateCourseParams } from "@/types";
import { connect } from "../mongoose";
import Course from "@/database/course.model";


export async function createCourse(course : TCreateCourseParams) {
    try {
       await connect();
       const newCourse = await Course.create(course);
       return {
        success: true,
        data: JSON.parse(JSON.stringify(newCourse)),
      };


    } catch (error) {
        console.log(error);
    }
}

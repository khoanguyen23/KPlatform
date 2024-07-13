"use server";

import { TCreateCourseParams } from "@/types";
import { connect } from "../mongoose";
import Course from "@/database/course.model";

export async function getCourseBySlug({ slug }: { slug: string }) {
    try {
        await connect();
        const findCourse = await Course.findOne({ slug });
        return findCourse;
    } catch (error) {
        console.log(error)
    }
}

export async function createCourse(course: TCreateCourseParams) {
    try {
        await connect();
        const existCourse = await Course.findOne({ slug: course.slug });
        if (existCourse){
            return {
                success: false,
                message: "Đường dẫn khóa học đã tồn tại!"
            }
        }
        const newCourse = await Course.create(course);
        return {
            success: true,
            data: JSON.parse(JSON.stringify(newCourse)),
        };


    } catch (error) {
        console.log(error);
    }
}

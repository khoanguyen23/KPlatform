"use server";

import { TCreateCourseParams, TUpdateCourseParams } from "@/types";
import { connect } from "../mongoose";
import Course, { ICourse } from "@/database/course.model";
import { revalidatePath } from "next/cache";

export async function getAllCourse(): Promise<ICourse[] | undefined> {
    try {
        await connect();
        const courses = await Course.find();
        return courses;
    } catch (error) {
        console.log(error);
    }
}

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
        if (existCourse) {
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

export async function updateCourse(params: TUpdateCourseParams) {
    try {
        await connect();
        const findCourse = await Course.findOne({ slug: params.slug });
        if (!findCourse) return;
        await Course.findOneAndUpdate({ slug: params.slug }, params.updateData, {
            new: true,
        });
        revalidatePath("/");
        return {
            success: true,
            message: "Cập nhật khóa học thành công!",
        };
    } catch (error) {
        console.log(error);
    }
}

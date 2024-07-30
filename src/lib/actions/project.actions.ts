"use server";

import { TCreateProjectParams, TUpdateProjectParams } from "@/types";
import { connect } from "../mongoose";
import Project, { IProject } from "@/database/project.model";
import { revalidatePath } from "next/cache";


export async function getAllProjects(): Promise<IProject[] | undefined> {
    try {
        await connect();
        const projects = await Project.find();
        return projects;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export async function getProjectBySlug({ slug }: { slug: string }) : Promise<IProject | undefined> {
    try {
        await connect();
        const findProject = await Project.findOne({ slug });
        return findProject;
    } catch (error) {
        console.log(error)
    }
}

export async function createProject(project: TCreateProjectParams) {
    try {
        await connect();
        const existProject = await Project.findOne({ slug: project.slug });
        if (existProject) {
            return {
                success: false,
                message: "Đường dẫn project đã tồn tại!"
            }
        }
        const newProject = await Project.create(project);
        return {
            success: true,
            data: JSON.parse(JSON.stringify(newProject)),
        };
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Có lỗi xảy ra khi tạo dự án.",
        };
    }
}

export async function updateProject(params: TUpdateProjectParams) {
    try {
        await connect();
        const findProject = await Project.findOne({ slug: params.slug });
        if (!findProject) return;
        await Project.findOneAndUpdate({ slug: params.slug }, params.updateData, {
            new: true,
        });
        revalidatePath(params.path || "/");
        return {
            success: true,
            message: "Cập nhật project thành công!",
        };
    } catch (error) {
        console.log(error);
    }
}

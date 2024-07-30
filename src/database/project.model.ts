import { EProjectType } from "@/types/enums";
import { Document, Schema, model, models } from "mongoose";

export interface IProject extends Document {
    _id: string;
    title: string;
    type: EProjectType;
    date: string;
    views: number;
    youtubeUrl: string;
    description: string;
    dependencies: string;
    slug: string;
    githubUrl: string;
    technologies: string[];
    teamSize: number;
    teamRoles: {
        name: string;
        responsibilities: string[];
    }[];
    developmentPeriod: string;
}

const projectSchema = new Schema<IProject>({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: Object.values(EProjectType),
        default: EProjectType.WEB,
    },
    date: {
        type: String,
    },
    views: {
        type: Number,
        default: 0,
    },
    youtubeUrl: {
        type: String,
    },
    description: {
        type: String,
    },
    dependencies: {
        type: String,
    },
    githubUrl: {
        type: String,
    },
    technologies: {
        type: [String],
    },
    teamSize: {
        type: Number,
    },
    teamRoles: [
        {
            name: {
                type: String,
            },
            responsibilities: {
                type: [String],
            },
        },
    ],
    developmentPeriod: {
        type: String,
    },
});

const Project = models.Project || model<IProject>("Project", projectSchema);
export default Project;

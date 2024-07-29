import React from "react";
import Link from "next/link";

interface ProjectItemProps {
  project: {
    id: number;
    title: string;
    date: string;
    description: string;
    imageUrl: string;
  };
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <Link href={`/project/${project.id}`} passHref>
      <div className="bg-card text-card-foreground shadow-sm w-full h-auto rounded-2xl overflow-hidden dark:border-gray-100/10 border-gray-200 border transition-all duration-300 ease-in-out will-change-auto md:group-hover:bg-slate-400/5 dark:md:group-hover:bg-slate-50/5">
        <div className="relative aspect-video">
          <img
            src={project.imageUrl}
            alt={project.title}
            loading="lazy"
            decoding="async"
            sizes="100vw"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              objectFit: "cover",
              color: "transparent",
            }}
          />
        </div>
        <div className="w-full p-0">
          <div className="w-full flex flex-col gap-2 p-4">
            <div className="flex items-center justify-between text-xs">
              <div className="text-gray-500 will-change-auto">
                {project.date}
              </div>
            </div>
            <h3 className="truncate text-lg mt-0 font-semibold text-gray-700 dark:text-gray-50 will-change-auto">
              {project.title}
            </h3>
            <p className="truncate text-sm leading-6 text-gray-600 will-change-auto">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;

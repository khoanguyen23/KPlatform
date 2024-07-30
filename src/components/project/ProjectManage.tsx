"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { commonClassNames, courseStatus } from "@/constants";
import { cn } from "@/lib/utils";
import { IconDelete, IconEdit, IconEye, IconStudy } from "../icons";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import React from "react";
import Heading from "../common/Heading";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IProject } from "@/database/project.model";
import Image from "next/image";
import Link from "next/link";


const IconArrowLeft = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
    />
  </svg>
);
const IconArrowRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
    />
  </svg>
);

const ProjectManage = ({ data }: { data: IProject[] }) => {
  const router = useRouter();

  const navigateToNewProject = () => {
    router.push("/manage/project/new");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <Heading className="">Quản lý project</Heading>
        <div className="w-[500px] flex space-x-4">
          <Input placeholder="Tìm kiếm project..." />
          <Button
            onClick={navigateToNewProject}
            className="bg-primary hover:bg-primary-dark hover:opacity-80 text-white"
          >
            Thêm project
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Thông tin</TableHead>
            <TableHead>Giá</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead>Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 &&
            data.map((project) => {
              
              return (
                <TableRow key={project._id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      {project.image ? (
                        <Image
                          alt=""
                          src={project.image}
                          width={80}
                          height={80}
                          className="flex-shrink-0 size-16 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="w-20 h-20 bg-gray-200 flex-shrink-0 rounded-lg" />
                      )}
                      <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-base">{project.title}</h3>
                        <h4 className="text-sm text-slate-500">
                         {project.date}
                        </h4>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-bold text-base">
                      {project.type}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                     
                    >
                      {project.views}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-3">
                      <Link
                        href={`/manage/project/update-content?slug=${project.slug}`}
                        className={commonClassNames.action}
                      >
                        <IconStudy />
                      </Link>
                      <Link
                        href={`/project/${project.slug}`}
                        target="_blank"
                        className={commonClassNames.action}
                      >
                        <IconEye />
                      </Link>
                      <Link
                        href={`/manage/project/update?slug=${project.slug}`}
                        className={commonClassNames.action}
                      >
                        <IconEdit />
                      </Link>
                      <button
                       
                        className={commonClassNames.action}
                      >
                        <IconDelete />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <div className="flex justify-end gap-3 mt-5">
        <button className={commonClassNames.paginationButton}>
          {IconArrowLeft}
        </button>
        <button className={commonClassNames.paginationButton}>
          {IconArrowRight}
        </button>
      </div>
    </div>
  );
};

export default ProjectManage;

"use client"
import { useRouter } from "next/navigation";
import React from "react";
import Heading from "../common/Heading";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const ProjectManage = () => {
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
    </div>
  );
};

export default ProjectManage;

import ProjectManage from "@/components/project/ProjectManage";
import { getAllProjects } from "@/lib/actions/project.actions";


const page = async () => {
  const projects = (await getAllProjects()) || [];
  return (
    <>
      <ProjectManage data={JSON.parse(JSON.stringify(projects))}></ProjectManage>
    </>
  );
};

export default page;

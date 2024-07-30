import Heading from "@/components/common/Heading";

import ProjectUpdate from "@/components/project/ProjectUpdate";

import { getProjectBySlug } from "@/lib/actions/project.actions";


const page = async ({
  searchParams,
}: {
  searchParams: {
    slug: string;
  };
}) => {
  const findProject = await getProjectBySlug({slug: searchParams.slug});
//   console.log(findCourse, "thong tin khoa hoc");
  if(!findProject) return null;
  return (
    <>
      <Heading className="mb-8">Cập nhật project</Heading>
      <ProjectUpdate data={JSON.parse(JSON.stringify(findProject))}/>
    </>
  );
};

export default page;

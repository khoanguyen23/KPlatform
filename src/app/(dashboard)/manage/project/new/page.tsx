import Heading from "@/components/common/Heading";

import ProjectAddNew from "@/components/project/ProjectAddNew";

const page = async () => {
  return (
    <>
      <Heading>Tạo project mới</Heading>
      <ProjectAddNew></ProjectAddNew>
    </>
  );
};

export default page;

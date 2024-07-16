import Heading from "@/components/common/Heading";
import CourseUpdate from "@/components/course/CourseUpdate";
import { getCourseBySlug } from "@/lib/actions/course.actions";


const page = async ({
  searchParams,
}: {
  searchParams: {
    slug: string;
  };
}) => {
  const findCourse = await getCourseBySlug({slug: searchParams.slug});
  console.log(findCourse, "thong tin khoa hoc");
  if(!findCourse) return null;
  return (
    <>
      <Heading className="mb-8">Cập nhật khóa học</Heading>
      <CourseUpdate courseInfo={JSON.parse(JSON.stringify(findCourse))}/>
    </>
  );
};

export default page;

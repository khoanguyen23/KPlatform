import CourseManage from "@/components/course/CourseManage";
import { getAllCourse } from "@/lib/actions/course.actions";

const page = async () => {
  const courses = (await getAllCourse()) || [];
  return (
    <>
      <CourseManage data={JSON.parse(JSON.stringify(courses))}></CourseManage>
    </>
  );
};

export default page;

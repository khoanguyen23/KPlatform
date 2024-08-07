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
import Image from "next/image";
import Link from "next/link";
import Heading from "../common/Heading";
import { IconDelete, IconEdit, IconEye, IconStudy } from "../icons";
import { ICourse } from "@/database/course.model";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { updateCourse } from "@/lib/actions/course.actions";
import { ECourseStatus } from "@/types/enums";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

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

const CourseManage = ({ data }: { data: ICourse[] }) => {
  const handleDeleteCourse = (slug: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await updateCourse({
          slug,
          updateData: {
            status: ECourseStatus.PENDING,
            _destroy: true,
          },
          path: "/manage/course",
        });
        toast.success("Xóa khóa học thành công!");
      }
    });
  };
  const handleChangeStatus = async (slug: string, status: ECourseStatus) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await updateCourse({
            slug,
            updateData: {
              status: ECourseStatus.PENDING
                ? ECourseStatus.APPROVED
                : ECourseStatus.PENDING,
              _destroy: false,
            },
            path: "/manage/course",
          });
          toast.success("Cập nhật trạng thái thành công!");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const router = useRouter();

  const navigateToNewCourse = () => {
    router.push('/manage/course/new');
  };


  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <Heading className="">Quản lý khóa học</Heading>
        <div className="w-[500px] flex space-x-4">
          <Input placeholder="Tìm kiếm khóa học..." />
          <Button onClick={navigateToNewCourse} className="bg-primary hover:bg-primary-dark hover:opacity-80 text-white">Thêm khóa học</Button>
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
            data.map((course) => {
              const courseStatusItem = courseStatus.find(
                (item) => item.value === course.status
              );
              return (
                <TableRow key={course._id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      {course.image ? (
                        <Image
                          alt=""
                          src={course.image}
                          width={80}
                          height={80}
                          className="flex-shrink-0 size-16 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="w-20 h-20 bg-gray-200 flex-shrink-0 rounded-lg" />
                      )}
                      <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-base">{course.title}</h3>
                        <h4 className="text-sm text-slate-500">
                          {new Date(course.created_at).toLocaleDateString(
                            "vi-VI"
                          )}
                        </h4>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-bold text-base">
                      {course.price
                        ? `${course.price.toLocaleString()} VND`
                        : "Miễn phí"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={cn(
                        commonClassNames.status,
                        courseStatus.find(
                          (status) => status.value === course.status
                        )?.className
                      )}
                      onClick={() =>
                        handleChangeStatus(course.slug, course.status)
                      }
                    >
                      {courseStatusItem?.title}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-3">
                      <Link
                        href={`/manage/course/update-content?slug=${course.slug}`}
                        className={commonClassNames.action}
                      >
                        <IconStudy />
                      </Link>
                      <Link
                        href={`/course/${course.slug}`}
                        target="_blank"
                        className={commonClassNames.action}
                      >
                        <IconEye />
                      </Link>
                      <Link
                        href={`/manage/course/update?slug=${course.slug}`}
                        className={commonClassNames.action}
                      >
                        <IconEdit />
                      </Link>
                      <button
                        onClick={() => handleDeleteCourse(course.slug)}
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

export default CourseManage;

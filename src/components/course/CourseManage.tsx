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

const CourseManage = ({ data }: { data: ICourse[] }) => {
  return (
    <div>
      <Heading className="mb-10">Quản lý khóa học</Heading>
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
          {data.map((course) => (
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
                      {new Date(course.created_at).toLocaleDateString()}
                    </h4>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <span className="font-bold text-base">
                  {course.price ? `${course.price.toLocaleString()} VND` : "Miễn phí"}
                </span>
              </TableCell>
              <TableCell>
                <span
                  className={cn(
                    commonClassNames.status,
                    courseStatus.find(status => status.value === course.status)?.className
                  )}
                >
                  {courseStatus.find(status => status.value === course.status)?.title}
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
                  <button className={commonClassNames.action}>
                    <IconDelete />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CourseManage;

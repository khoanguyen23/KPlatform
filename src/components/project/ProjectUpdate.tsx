"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ECourseLevel, ECourseStatus, EProjectType } from "@/types/enums";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { ICourse } from "@/database/course.model";
import { toast } from "react-toastify";
import { updateCourse } from "@/lib/actions/course.actions";
import { useImmer } from "use-immer";
import { IconAdd } from "../icons";
import { courseLevel, courseStatus } from "@/constants";
import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";
import { IProject } from "@/database/project.model";
import { updateProject } from "@/lib/actions/project.actions";

const formSchema = z.object({
  title: z.string().min(10, "Tên dự án phải có ít nhất 10 ký tự"),
  slug: z.string().optional(),
  date: z.string(),
  type: z.nativeEnum(EProjectType),
  view: z.number().int().nonnegative().optional(),
  youtubeUrl: z.string().url().optional(),
  description: z.string().optional(),
  dependencies: z.string().optional(),
  githubUrl: z.string().url().optional(),
  technologies: z.array(z.string()).optional(),
  teamSize: z.number().int().positive().optional(),
  teamRoles: z
    .array(
      z.object({
        name: z.string(),
        responsibilities: z.array(z.string()),
      })
    )
    .optional(),
  developmentPeriod: z.string().optional(),
  image: z.string().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

interface TeamRole {
  name: string;
  responsibilities: string[];
}

const ProjectUpdate = ({ data }: { data: IProject }) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [teamRoles, setTeamRoles] = useImmer<TeamRole[]>(data.teamRoles || []);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: data.title,
      slug: data.slug,
      image: data.image,
      type: data.type,
      date: data.date,
      view: data.views,
      youtubeUrl: data.youtubeUrl,
      description: data.description,
      dependencies: data.dependencies,
      githubUrl: data.githubUrl,
      technologies: data.technologies,
      teamSize: data.teamSize,
      teamRoles: data.teamRoles,
      developmentPeriod: data.developmentPeriod,
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const res = await updateProject({
        slug: data.slug,
        updateData: {
          title: values.title,
          slug: values.slug,
          date: values.date,
          type: values.type,
          image: values.image,
          views: values.view,
          youtubeUrl: values.youtubeUrl,
          description: values.description,
          dependencies: values.dependencies,
          githubUrl: values.githubUrl,
          technologies: values.technologies,
          teamSize: values.teamSize,
          teamRoles: teamRoles,
          developmentPeriod: values.developmentPeriod,
        },
      });
      if (values.slug !== data.slug) {
        router.replace(`/manage/project/update?slug=${values.slug}`);
      }

      if (res?.success) {
        toast.success(res.message);
      }
    } catch (error) {
      console.error("Error updating project:", error);
      toast.error("Có lỗi xảy ra khi cập nhật dự án");
    } finally {
      setIsSubmitting(false);
    }
  }
  const imageWatch = form.watch("image");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
        <div className="grid grid-cols-2 gap-8 mt-10 mb-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên dự án *</FormLabel>
                <FormControl>
                  <Input placeholder="Tên dự án" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Đường dẫn dự án</FormLabel>
                <FormControl>
                  <Input placeholder="du-an-lap-trinh" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ngày tạo</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ảnh đại diện</FormLabel>
                <FormControl>
                  <>
                    <div className="h-[200px] bg-white rounded-md border border-gray-200 flex items-center justify-center relative">
                      {!imageWatch ? (
                        <UploadButton
                          endpoint="imageUploader"
                          onClientUploadComplete={(res) => {
                            form.setValue("image", res[0].url);
                          }}
                          onUploadError={(error: Error) => {
                            console.error(`ERROR! ${error.message}`);
                          }}
                        />
                      ) : (
                        <Image
                          alt=""
                          src={imageWatch}
                          fill
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="view"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lượt xem</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="1000"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="youtubeUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Youtube URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://youtube.com/axfgdr5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mô tả dự án</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Nhập mô tả..."
                    {...field}
                    className="h-[200px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dependencies"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phụ thuộc</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập phụ thuộc..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="githubUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Github URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://github.com/your-repo"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="technologies"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Công nghệ</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nhập công nghệ..."
                    value={(field.value || []).join(", ")}
                    onChange={(e) => {
                      const value = e.target.value
                        .split(",")
                        .map((v) => v.trim());
                      field.onChange(value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
  control={form.control}
  name="teamSize"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Kích thước đội ngũ</FormLabel>
      <FormControl>
        <Input 
          type="number" 
          placeholder="5" 
          {...field} 
          onChange={(e) => field.onChange(Number(e.target.value))} 
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

          <FormField
            control={form.control}
            name="teamRoles"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vai trò đội ngũ</FormLabel>
                <div className="space-y-4">
                  {teamRoles.map((role, roleIndex) => (
                    <div key={roleIndex} className="space-y-2">
                      <div className="flex space-x-4">
                        <Input
                          placeholder="Tên vai trò"
                          value={role.name}
                          onChange={(e) => {
                            setTeamRoles((draft) => {
                              draft[roleIndex].name = e.target.value;
                            });
                          }}
                        />
                        <Button
                          variant="outline"
                          onClick={() => {
                            setTeamRoles((draft) => {
                              draft.splice(roleIndex, 1);
                            });
                          }}
                        >
                          Xóa vai trò
                        </Button>
                      </div>
                      <div className="space-y-2">
                        {role.responsibilities.map((resp, respIndex) => (
                          <div key={respIndex} className="flex space-x-4">
                            <Textarea
                              placeholder="Trách nhiệm"
                              value={resp}
                              onChange={(e) => {
                                setTeamRoles((draft) => {
                                  draft[roleIndex].responsibilities[respIndex] =
                                    e.target.value;
                                });
                              }}
                            />
                            <Button
                              variant="outline"
                              onClick={() => {
                                setTeamRoles((draft) => {
                                  draft[roleIndex].responsibilities.splice(
                                    respIndex,
                                    1
                                  );
                                });
                              }}
                            >
                              Xóa trách nhiệm
                            </Button>
                          </div>
                        ))}
                        <Button
                          variant="outline"
                          onClick={() => {
                            setTeamRoles((draft) => {
                              draft[roleIndex].responsibilities.push("");
                            });
                          }}
                        >
                          <IconAdd className="h-4 w-4" /> Thêm trách nhiệm
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() =>
                      setTeamRoles((draft) => {
                        draft.push({ name: "", responsibilities: [""] });
                      })
                    }
                  >
                    <IconAdd className="h-4 w-4" /> Thêm vai trò
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="developmentPeriod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Thời gian phát triển</FormLabel>
                <FormControl>
                  <Input placeholder="Thời gian phát triển" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Loại dự án</FormLabel>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn loại dự án" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(EProjectType).map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end mt-8">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Đang cập nhật..." : "Cập nhật"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProjectUpdate;

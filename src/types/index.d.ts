import { IProject } from "@/database/project.model";

type TActiveLinkProps = {
  url: string;
  children: React.ReactNode;
};
type TMenuItem = {
  url: string;
  title: string;
  icon: React.ReactNode;
};
// User
type TCreateUserParams = {
  clerkId: string;
  username: string;
  email: string;
  name?: string;
  avatar?: string;
};
// Project 
type TCreateProjectParams = {
  title : string;
  slug: string;
}
type TUpdateProjectParams = {
  slug: string;
  updateData: Partial<IProject>;
  path?: string;
}
// Course
type TCreateCourseParams = {
  title : string;
  slug: string;
  author: string;
}
type TUpdateCourseParams = {
  slug: string;
  updateData: Partial<ICourse>;
  path?: string;
}

export { TActiveLinkProps, TCreateUserParams,TCreateProjectParams,TUpdateProjectParams, TMenuItem, TCreateCourseParams, TUpdateCourseParams};

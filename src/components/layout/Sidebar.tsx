"use client";
import { menuItems } from "@/constants";
import { TMenuItem } from "@/types";
import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { ActiveLink } from "../common";
import { ModeToggle } from "../common/ModeToggle";
import { IconUsers } from "../icons";
import { getUserInfo } from "@/lib/actions/user.actions";
import { EUserRole } from "@/types/enums";
import { useEffect, useState } from "react";
import { useClerk } from "@clerk/nextjs";

const Sidebar = () => {
  const { userId } = useAuth();
  const [userRole, setUserRole] = useState<string | null>(null);
  const { signOut } = useClerk();
  const [wasUserLoggedOut, setWasUserLoggedOut] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    window.location.reload();
  };
  useEffect(() => {
    if (!userId && !wasUserLoggedOut) {
      setWasUserLoggedOut(true);
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      getUserInfo({ userId }).then((userData) => {
        if (userData) {
          setUserRole(userData.role);
        }
      });
    } else if (wasUserLoggedOut) {
      window.location.reload();
    }
  }, [userId]);

  return (
    <div className="hidden p-5 border-r borderDarkMode bgDarkMode lg:flex flex-col fixed top-0 left-0 bottom-0 w-[300px]">
      <a
        href="/"
        className="font-bold text-3xl inline-block mb-5 h-10 self-start"
      >
        <span className="text-primary">U</span>
        <span className="text-2xl font-semibold">cademy</span>
      </a>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item, index) => {
          if (
            (item.title === "Quản lý khóa học" ||
              item.title === "Quản lý thành viên" ||
              item.title === "Quản lý đơn hàng" ||
              item.title === "Quản lý bình luận") &&
            userRole !== EUserRole.ADMIN
          ) {
            return null;
          }
          return (
            <MenuItem
              key={index}
              url={item.url}
              title={item.title}
              icon={item.icon}
            />
          );
        })}
      </ul>
      <div className="mt-auto flex items-center justify-end gap-2">
        <ModeToggle></ModeToggle>
        {!userId ? (
          <Link
            href="/sign-in"
            className="size-10 rounded-lg bg-primary text-white flex items-center justify-center p-1"
          >
            <IconUsers />
          </Link>
        ) : (
          <UserButton />
        )}
      </div>
    </div>
  );
};

function MenuItem({ url = "/", title = "", icon }: TMenuItem) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {title}
      </ActiveLink>
    </li>
  );
}

export default Sidebar;

"use client";
import { UserButton, useAuth } from "@clerk/nextjs";
import { ModeToggle } from "../common/ModeToggle";
import { IconUsers } from "../icons";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { userId } = useAuth();
  return (
    <header className="fixed w-full bgDarkMode border-b borderDarkMode z-10 p-5">
      <div className="grid grid-cols-2">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="w-full p-2 pl-10 rounded-lg bg-lightMode border borderDarkMode text-darkMode"
            placeholder="Search..."
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-darkMode">
            🔍
          </span>
        </div>

        <div className="flex justify-center space-x-4">
          <ModeToggle />
          {!userId ? (
            <Link
              href="/sign-in"
              className="size-10 rounded-lg bg-primary text-white flex items-center justify-center"
            >
              <IconUsers />
            </Link>
          ) : (
            <UserButton />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

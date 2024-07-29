"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const links = [
    {
      id: 1,
      link: "Trang chủ",
      path: "/",
    },
    {
      id: 2,
      link: "Resources",
      path: "resources",
    },
    {
      id: 3,
      link: "portfolio",
      path: "portfolio",
    },
    {
      id: 4,
      link: "project",
      path: "project",
    },
    {
      id: 5,
      link: "admin",
      path: "manage/account",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white shadow-md fixed z-50 bg-white/70 backdrop-blur-md">
      <div className="p-10">
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-5xl font-signature ml-2">
          <a
            href="/"
            className="font-bold text-3xl inline-block mb-5 h-10 self-start"
          >
            <span className="text-primary">K</span>
            <span className="text-2xl font-semibold text-black">platform</span>
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, path }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-primary duration-200 link-underline"
          >
            <Link href={`${path}`}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 z-10">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

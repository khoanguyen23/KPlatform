import React from "react";

export default function page() {
  return (
    <div className="h-screen bg-[url('https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/hinh-nen-may-tinh-anime/hinh-nen-anime-de-thuong-cho-may-tinh.jpg?1670643011544')] bg-cover bg-center">
      <div className="relative flex flex-col place-items-center h-full  bg-white/30 justify-center items-center p-10 rounded-xl shadow-xl border-4 border-[#f7f7f7]">
        <h2 className="saturate-100 backdrop-blur-[10px] z-10 p-10 rounded-md text-center font-heading m-10 text-6xl sm:text-7xl lg:text-8xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-black text-white shadow-md">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Coming Soon
          </span>
          <span> ⏳</span>
        </h2>
        <p className="text-2xl md:text-3xl px-6 max-w-3xl text-center m-5 text-slate-800 dark:text-slate-100 font-thin">
          Nguyen Hoang Khoa
        </p>
      </div>
    </div>
  );
}

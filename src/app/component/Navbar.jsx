import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-transparent sticky top-0 z-50  w-full max-w-screen-xl xl:max-w-screen-2xl  mx-auto xl:w-[1440px]">
      <div>
        <Image
          src="/assets/logo.png"
          width={144}
          height={30}
          alt="logo"
          priority
        />
      </div>
      <ul className="hidden md:flex gap-[32px] font-semibold text-gray-500">
        <li className="hover:text-[#8BAC3E] cursor-pointer">
          <a href="/notfoundpage">Home</a>
        </li>
        <li className="hover:text-[#8BAC3E] cursor-pointer">
          <a href="/notfoundpage">About</a>
        </li>
        <li className="hover:text-[#8BAC3E] cursor-pointer">
          <span className="absolute top-3 ml-[60px] bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-md">
            HOT
          </span>
          <a href="/notfoundpage">Promotions </a>
        </li>
        <li className="hover:text-[#8BAC3E] cursor-pointer">
          <a href="/notfoundpage">Blogs</a>
        </li>
        <li className="hover:text-[#8BAC3E] cursor-pointer">
          <a href="/notfoundpage">Contact Us</a>
        </li>
      </ul>
      <div className="flex space-x-4">
        <button className="text-gray-700 font-semibold hover:text-[#8BAC3E] hidden md:block">
          <a href="/notfoundpage">Masuk</a>
        </button>
        <button className="bg-[#8BAC3E] text-white px-4 py-2 rounded-full hover:bg-[#A4B441]">
          <a href="/notfoundpage">Daftar Sekarang</a>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

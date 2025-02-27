import React from "react";
import Image from "next/image"

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-transparent sticky top-0 z-10 w-[1440px] h-[96px]">
      <div>
        <Image
          src="/assets/logo.png"
          width={144}
          height={30}
          alt="logo"
          priority
        />
      </div>
      <ul className="hidden md:flex space-x-6 font-semibold text-gray-500">
        <li className="hover:text-green-500 cursor-pointer">Home</li>
        <li className="hover:text-green-500 cursor-pointer">About</li>
        <li className="hover:text-green-500 cursor-pointer">Promotions</li>
        <li className="hover:text-green-500 cursor-pointer">Blogs</li>
        <li className="hover:text-green-500 cursor-pointer">Contact Us</li>
      </ul>
      <div className="flex space-x-4">
        <button className="text-gray-700 font-semibold">Masuk</button>
        <button className="bg-[#8BAC3E] text-white px-4 py-2 rounded-full">
          Daftar Sekarang
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

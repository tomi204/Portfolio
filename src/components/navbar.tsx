import Link from "next/link";
import React from "react";
import { FaHome, FaUserAlt, FaLaptopCode } from "react-icons/fa";
import { RiSuitcaseLine } from "react-icons/ri";
export const Navbar = () => {
  return (
    <nav className="w-4/12 flex items-center mx-auto bg-black/20 backdrop-blur-3xl z-50 justify-around h-14 mb-4  rounded-3xl  top-0">
      <Link href="/">
        <FaHome className="text-2xl hover:scale-125 text-white" />
      </Link>
      <Link href="/about">
        <FaUserAlt className="text-2xl hover:scale-125 text-white" />
      </Link>
      <Link href="/">
        <FaLaptopCode className="text-2xl hover:scale-125 text-white" />
      </Link>
      <Link href="/">
        <RiSuitcaseLine className="text-2xl hover:scale-125 text-white" />
      </Link>
    </nav>
  );
};

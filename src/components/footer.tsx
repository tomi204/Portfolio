import Link from "next/link";
import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-4/12 flex items-center bg-black/20 backdrop-blur-3xl z-50 hover:scale-105 justify-around h-14 mb-4  rounded-3xl absolute bottom-0">
      <Link href="/">
        <FaGithub className="text-2xl hover:scale-125 text-white" />
      </Link>
      <Link href="/">
        <FaTwitter className="text-2xl  hover:text-cyan-400	 hover:scale-125 text-white" />
      </Link>
      <Link href="/">
        <FaLinkedinIn className="text-2xl hover:text-cyan-400 hover:scale-125 text-white" />
      </Link>
      <Link href="/">
        <FaInstagram className="text-2xl hover:text-red-900 hover:scale-125 text-white" />
      </Link>
    </div>
  );
};

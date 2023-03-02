import Link from "next/link";
import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full sm:w-6/12 mx-auto flex items-center bg-black/25 backdrop-blur-3xl z-50 justify-around h-14 mb-4  rounded-3xl  bottom-0">
      <Link href="/">
        <FaGithub className="text-lg md:text-lg sm:text-2xl	hover:scale-125 text-white" />
      </Link>
      <Link href="/">
        <FaTwitter className="text-lg  hover:text-cyan-400 md:text-lg sm:text-2xl	hover:scale-125 text-white" />
      </Link>
      <Link href="/">
        <FaLinkedinIn className="text-lg  hover:text-cyan-400 md:text-lg sm:text-2xl	hover:scale-125 text-white" />
      </Link>
      <Link href="/">
        <FaInstagram className="text-2xl hover:text-red-400 hover:scale-125 sm:text-base md:text-lg text-white" />
      </Link>
    </footer>
  );
};

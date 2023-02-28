import React from "react";
import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-around bg-black rounded-3xl inset-x-0 top-0">
      <FaGithub className="text-3xl text-white" />
    </div>
  );
};

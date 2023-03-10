import Link from "next/link";
import React from "react";

const about = () => {
  return (
    <section className="w-full text-white">
      <div className="w-full flex items-center justify-around">
        <h1 className="w-6/12 font-bold">About me</h1>
        <img className="w-6/12 rounded-3xl" src="/perfil.jpg" alt="" />
      </div>
    </section>
  );
};
export default about;

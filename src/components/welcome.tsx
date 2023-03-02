import Link from "next/link";
import React from "react";

export const Welcome = () => {
  return (
    <section className="w-full text-white">
      <div className="w-full flex items-center justify-around">
        <h1 className="w-6/12 font-bold">Welcome to my portfolio</h1>
        <img className="w-6/12 rounded-3xl" src="/public/perfil.jpg" alt="" />
      </div>
    </section>
  );
};

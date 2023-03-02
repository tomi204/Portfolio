import Link from "next/link";
import React from "react";

export const Welcome = () => {
  return (
    <section className="w-full text-white flex items-center justify-center ">
      <div className="w-6/12 flex items-center justify-around mt-12">
        <div className="w-7/12 flex flex-col justify-around">
          <h1 className="w-full text-xl font-bold">
            FULL STACK WEB3 DEVELOPER
          </h1>
          <h1 className="w-6/12 text-xl font-bold">Tomas Oliver</h1>
        </div>
        <img className="w-4/12 rounded-3xl" src="/perfil.jpg" alt="" />
      </div>
    </section>
  );
};

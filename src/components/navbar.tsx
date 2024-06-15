import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="flex justify-center px-5">
      <div className="flex justify-between gap-5 shadow-sm py-3 md:py-2 w-full max-w-6xl">
        <div className="flex">
          <Image
            src="/assets/logo-S2lIhR8K.svg"
            alt="logo"
            width={150}
            height={80}
          />
        </div>
        <div className="hidden md:flex gap-2 items-center rounded-full bg-slate-200 py-2 px-4">
          <IoSearch size={26} />
          <input
            type="search"
            name=""
            id=""
            placeholder="Search your favourite groups in ATG"
            className="text-lg outline-none bg-slate-200 w-[21rem]"
          />
        </div>
        <div className="hidden md:block my-auto">
          <div className="my-auto font-medium cursor-pointer">
            <span>Create account.</span>{" "}
            <span className="text-blue-500">It&apos;s Free!</span>
          </div>
        </div>
        <div className="md:hidden flex gap-5 items-center">
          <IoSearch size={26} className="cursor-pointer" />
          <Image
            src="/assets/img1.jpg"
            alt="profile"
            width={40}
            height={40}
            className="w-8 h-8 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

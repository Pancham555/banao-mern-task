import Image from "next/image";
import React from "react";
import Leave from "./buttons/leave";

const Hero = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-[26rem] relative">
        <Image
          src="/assets/hero.jpg"
          alt="logo"
          width={1500}
          height={800}
          className="w-full h-full object-cover"
        />
        <div className="md:hidden block absolute top-5 left-0 right-0">
          <Leave />
        </div>
        <div className="absolute bottom-10 md:left-12 left-0 right-0 px-5 text-white">
          <h1 className="text-3xl font-medium">Computer Engineering</h1>
          <p className="text-lg">142,765 Computer Engineers follow this</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

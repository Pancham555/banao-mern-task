import Image from "next/image";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdShare } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
const Card = ({
  src,
  alt,
  emoji,
  tag,
}: {
  src: string;
  alt: string;
  emoji?: string;
  tag?: string;
}) => {
  return (
    <div>
      <div className="w-full border-2 rounded-md">
        <Image
          src={src}
          alt={alt}
          width={400}
          height={350}
          className="w-full h-72"
        />
        <div className="py-4 px-4">
          <p className="text-xl font-medium">
            {emoji ?? "✍"} {tag ?? "Article"}
          </p>
          <div className="my-2 items-start flex justify-between gap-5">
            <div className="overflow-hidden">
              <p className="text-lg md:text-2xl font-medium">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit emer
                illum?
              </p>
              <div className="text-ellipsis overflow-hidden whitespace-nowrap md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae esse quis voluptatibus incidunt cupiditate,
                provident rerum neque minima distinctio eligendi dolorem cumque
                dolore, ratione veniam rem nemo nostrum laborum magnam.
              </div>
            </div>
            <div className="">
              <HiDotsHorizontal size={26} />
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="items-center gap-5 flex">
              <Image
                src={src}
                alt={alt}
                width={40}
                height={40}
                className="w-11 h-11 rounded-full"
              />
              <span className="font-medium">User Name</span>
            </div>
            <div className="gap-5 flex justify-between">
              <div className="items-center flex gap-2">
                <MdOutlineRemoveRedEye size={22} />
                <span>1.4k views</span>
              </div>
              {/* <div className="bg-slate-200 p-2 rounded">
                <IoMdShare size={22} />
              </div> */}
              <IoMdShare
                size={36}
                className="bg-slate-200 p-2 rounded my-auto cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

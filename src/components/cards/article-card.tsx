import Image from "next/image";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdShare } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
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
              <p className="text-lg md:text-2xl font-semibold">
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
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <HiDotsHorizontal size={26} className="cursor-pointer" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Report</DropdownMenuItem>
                  <DropdownMenuItem>Option 3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="items-center gap-5 flex">
              <Image
                src={src}
                alt={alt}
                width={40}
                height={40}
                className="md:w-11 md:h-11 w-14 h-14 rounded-full"
              />
              <div className="">
                <span className="font-medium">User Name</span>
                <div className="items-center flex gap-2 md:hidden">
                  <span>1.4k views</span>
                </div>
              </div>
            </div>
            <div className="gap-5 flex justify-between">
              <div className="items-center md:flex gap-2 hidden">
                <MdOutlineRemoveRedEye size={22} />
                <span>1.4k views</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-200 p-2 rounded my-auto cursor-pointer">
                <IoMdShare size={22} className="" />
                <span className="pr-2 md:hidden block font-medium">Share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import Image from "next/image";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdShare } from "react-icons/io";
import { MdOutlineRemoveRedEye, MdOutlineLocationOn } from "react-icons/md";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { MdDateRange } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
const JobCard = ({
  src,
  usericon,
  username,
  alt,
  title,
  emoji,
  tag,
  img,
  date,
  location,
  company,
  linkname,
  link,
}: {
  title?: string;
  img: boolean;
  date?: string;
  location?: string;
  src: string;
  usericon: string;
  username: string;
  alt: string;
  emoji?: string;
  tag?: string;
  linkname?: string;
  company?: string;
  link?: string;
}) => {
  return (
    <div>
      <div className="w-full border-2 rounded-md">
        {img && (
          <Image
            src={src}
            alt={alt}
            width={400}
            height={350}
            className="w-full h-72"
          />
        )}
        <div className="py-4 px-4">
          <p className="text-xl font-medium">
            {emoji ?? "💼"} {tag ?? "Job"}
          </p>
          <div className="my-2 flex justify-between gap-5 w-full">
            <div className="w-full">
              <p className="text-lg md:text-2xl font-semibold">
                {title ?? "Software Developer"}
              </p>
              <div className="flex gap-5 mt-4 text-sm md:text-base">
                <div className="flex gap-2 items-center">
                  {date ? (
                    <>
                      <MdDateRange size={22} />
                      <span>{date ?? "26th Oct, 2024"}</span>
                    </>
                  ) : (
                    <>
                      <PiSuitcaseSimpleDuotone size={22} />
                      <span>
                        {company ?? "Innovaccer Analytics Private Ltd."}
                      </span>
                    </>
                  )}
                </div>
                <div className="flex gap-2 items-center">
                  <MdOutlineLocationOn size={22} />
                  <span>{location ?? "Noida, India"}</span>
                </div>
                <div className=""></div>
              </div>
            </div>
            <div className="relative">
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
          <div className="border rounded-md my-2 py-2 text-center font-medium text-green-500 border-slate-500 duration-200 hover:border-green-500 cursor-pointer">
            {linkname ?? "Apply on TimeJobs"}
          </div>
          <div className="flex justify-between mt-4">
            <div className="items-center gap-5 flex">
              <Image
                src={usericon}
                alt={alt}
                width={40}
                height={40}
                className="md:w-11 md:h-11 w-14 h-14 rounded-full object-cover"
              />
              <div className="">
                <span className="font-medium">{username ?? "User Name"}</span>
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

export default JobCard;

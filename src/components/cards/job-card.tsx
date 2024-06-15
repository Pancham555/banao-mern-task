import Image from "next/image";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdShare } from "react-icons/io";
import { MdOutlineRemoveRedEye, MdOutlineLocationOn } from "react-icons/md";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { MdDateRange } from "react-icons/md";
const JobCard = ({
  src,
  alt,
  title,
  emoji,
  tag,
  img,
  date,
  location,
  linkname,
  link,
}: {
  title?: string;
  img: boolean;
  date?: string;
  location?: string;
  src: string;
  alt: string;
  emoji?: string;
  tag?: string;
  linkname?: string;
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
              <p className="text-lg md:text-2xl font-medium">
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
                      <span>Innovaccer Analytics Private Ltd.</span>
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
            <div className="">
              <HiDotsHorizontal size={26} />
            </div>
          </div>
          <div className="border rounded-md my-2 py-2 text-center font-medium text-slate-500 hover:text-green-500 border-slate-500 duration-200 hover:border-green-500 cursor-pointer">
            {linkname ?? "Apply on TimeJobs"}
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
              <span className="font-medium md:text-base text-sm">
                User Name
              </span>
            </div>
            <div className="gap-5 flex justify-between">
              <div className="items-center flex gap-2">
                <MdOutlineRemoveRedEye size={22} />
                <span className="md:text-base text-sm">1.4k views</span>
              </div>

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

export default JobCard;

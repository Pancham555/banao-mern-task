import React from "react";
import { MdEdit, MdOutlineLocationOn } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import Image from "next/image";
import { Badge } from "./ui/badge";
const LocationTab = () => {
  return (
    <div className="flex justify-center w-full mt-5">
      <div className="w-full px-3">
        <div className="flex gap-2 items-center border-b-2 pb-2 w-full">
          <MdOutlineLocationOn size={26} />
          <input
            type="text"
            placeholder="Enter your location"
            className="outline-none w-full text-lg font-medium"
            value="Noida, India"
          />
          <MdEdit size={26} className="cursor-pointer" />
        </div>
        <div className="flex gap-2 items-start mt-4 text-slate-500">
          <IoInformationCircleOutline size={30} />
          <span className="text-sm">
            Your location will help us serve better and extend a personalised
            experience.
          </span>
        </div>
        <div className="mt-10">
          <p className="font-medium text-xl mb-2">👍 Recommended Groups</p>
          <div className="flex flex-col gap-2">
            <FollowUser />
            <FollowUser />
            <FollowUser followed />
            <FollowUser followed />
            <FollowUser followed />
          </div>
          <div className="flex justify-end my-4">
            <p className="text-blue-500 cursor-pointer font-medium">
              See more...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FollowUser = ({ followed }: { followed?: boolean }) => {
  return (
    <div className="flex justify-between py-2">
      <div className="flex items-center gap-2">
        <Image
          src={"/assets/img1.jpg"}
          alt={"profile"}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        <p className="font-medium">User name</p>
      </div>
      <Badge
        className="cursor-pointer px-3 text-base"
        variant={followed ? "secondary" : "default"}
      >
        {followed ? "Following" : "Follow"}
      </Badge>
    </div>
  );
};
export default LocationTab;

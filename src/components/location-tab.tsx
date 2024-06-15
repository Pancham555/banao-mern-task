import React from "react";
import { MdEdit, MdOutlineLocationOn } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
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
      </div>
    </div>
  );
};

export default LocationTab;

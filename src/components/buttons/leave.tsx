import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
const Leave = () => {
  return (
    <div className="flex justify-between gap-5 w-full items-center px-5">
      <IoMdArrowRoundBack size={22} className="text-white" />
      <div className="p-2 bg-transparent border-2 border-white text-white rounded-md cursor-pointer my-auto flex gap-2 items-start">
        <span>Leave Group</span>
      </div>
    </div>
  );
};

export default Leave;

import React from "react";
import { MdEdit } from "react-icons/md";

const FloatingPen = () => {
  return (
    <div className="p-4 rounded-full fixed bottom-8 right-2 bg-pink-500 md:hidden">
      <MdEdit size={26} className="cursor-pointer text-white" />
    </div>
  );
};

export default FloatingPen;

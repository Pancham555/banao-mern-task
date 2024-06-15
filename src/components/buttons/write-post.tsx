import React from "react";
import { FaSortDown } from "react-icons/fa";
const WritePost = () => {
  return (
    <div className="p-2 bg-slate-200 rounded cursor-pointer my-auto flex gap-2 items-start">
      <span>Write Post</span>
      <FaSortDown />
    </div>
  );
};

export default WritePost;

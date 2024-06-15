import React from "react";
import { TbUsersPlus } from "react-icons/tb";
const JoinGroup = () => {
  return (
    <div className="p-2 bg-blue-500 text-white rounded cursor-pointer my-auto flex gap-2 items-center">
      <TbUsersPlus />
      <span>Join Group</span>
    </div>
  );
};

export default JoinGroup;

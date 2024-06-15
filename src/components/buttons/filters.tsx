import React from "react";
import { FaSortDown } from "react-icons/fa";
const Filters = () => {
  return (
    <div className="p-2 bg-slate-200 rounded cursor-pointer my-auto flex gap-2 items-start">
      <select name="" id="" className="bg-transparent outline-none font-medium">
        <option value="">Filter: All</option>
        <option value="">Value 1</option>
        <option value="">Value 2</option>
        <option value="">Value 3</option>
      </select>
    </div>
  );
};

export default Filters;

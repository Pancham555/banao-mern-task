import React from "react";
import WritePost from "./buttons/write-post";
import JoinGroup from "./buttons/join-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Tabs = () => {
  return (
    <div className="flex justify-center my-4">
      <div className="flex justify-between w-full text-lg border-b-2 pb-2">
        <div className="flex justify-between gap-5 my-auto ">
          <span className="font-bold border-b-2 border-slate-900">
            All Posts (32)
          </span>
          <div className="md:flex gap-5 hidden">
            <span className="hover:text-blue-600 hover:border-b-2 border-blue-600 cursor-pointer">
              Article
            </span>
            <span className="hover:text-blue-600 hover:border-b-2 border-blue-600 cursor-pointer">
              Event
            </span>
            <span className="hover:text-blue-600 hover:border-b-2 border-blue-600 cursor-pointer">
              Education
            </span>
            <span className="hover:text-blue-600 hover:border-b-2 border-blue-600 cursor-pointer">
              Job
            </span>
          </div>
        </div>
        <div className="hidden md:flex justify-between gap-5 my-auto">
          <WritePost />
          <JoinGroup />
        </div>
        <div className="md:hidden block">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter: All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Option 1">Option 1</SelectItem>
              <SelectItem value="Option 2">Option 2</SelectItem>
              <SelectItem value="Option 3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

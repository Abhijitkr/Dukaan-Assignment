import React from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

export default function Pagination() {
  return (
    <section className="flex justify-center items-center">
      <div className="border-2 rounded-sm flex items-center p-1 pr-2">
        <MdOutlineKeyboardArrowLeft size="20" className="mr-1" />
        Previous
      </div>
      <div className="mx-5">1</div>
      <div className="border-2 rounded-md flex items-center p-1 pl-2">
        Next <MdOutlineKeyboardArrowRight size="20" className="mr-1" />
      </div>
    </section>
  );
}

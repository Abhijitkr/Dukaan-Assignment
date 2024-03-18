import React from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { getPaginationRange } from "../utils/transactionData";

export default function Pagination({ totalPage, page, limit, siblings }) {
  let pageValues = getPaginationRange(totalPage, page, limit, siblings);
  console.log(pageValues);
  return (
    <section className="flex justify-center items-center p-2">
      <div className="border-2 rounded-sm flex items-center p-1 pr-2 cursor-pointer">
        <MdOutlineKeyboardArrowLeft size="20" className="mr-1" />
        Previous
      </div>
      <div className="px-5 flex">
        {pageValues.map((value, index) => (
          <div
            key={index}
            className={`mx-1 cursor-pointer px-2 py-1 rounded-md  ${
              value === page ? "bg-[#146EB4] text-white" : ""
            }`}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="border-2 rounded-md flex items-center p-1 pl-2 cursor-pointer">
        Next <MdOutlineKeyboardArrowRight size="20" className="mr-1" />
      </div>
    </section>
    // <ul className="flex justify-center items-center">
    //   <li>
    //     <MdOutlineKeyboardArrowLeft size="20" className="mr-1" />
    //   </li>
    //   <li>Previous</li>
    //   {pageValues.map((value) => (
    //     <li key={value} className="mx-5">
    //       {value}
    //     </li>
    //   ))}
    //   <li>Next</li>
    //   <li>
    //     <MdOutlineKeyboardArrowRight size="20" className="mr-1" />
    //   </li>
    // </ul>
  );
}

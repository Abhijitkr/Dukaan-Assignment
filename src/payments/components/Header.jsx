import { GoQuestion } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { RiMessage2Fill } from "react-icons/ri";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Header() {
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <section className="flex justify-between items-center shadow px-10 h-16 bg-white">
      <div className="flex gap-5">
        <h4>Payments</h4>
        <small className="flex items-center gap-1 text-gray-600">
          <GoQuestion size="15" />
          How it works
        </small>
      </div>
      <div
        className={`flex items-center bg-[#F2F2F2] px-2 rounded-md ${
          inputFocus ? "border border-gray-300" : ""
        }`}
      >
        <CiSearch size="20" className="text-gray-600 " />
        <input
          type="text"
          name="Search"
          id=""
          placeholder="Search features, tutorials, etc."
          className="bg-[#F2F2F2] p-2 w-80 outline-none placeholder:text-gray-500"
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
        />
      </div>
      <div className="flex gap-3">
        <div className="rounded-full bg-[#F2F2F2] h-10 w-10 flex items-center justify-center cursor-pointer">
          <RiMessage2Fill size="23" className="text-[#4C4C4C]" />
        </div>
        <div className="cursor-pointer rounded-full bg-[#F2F2F2] h-10 w-10 flex items-center justify-center">
          <TiArrowSortedDown size="25" className="text-[#4C4C4C]" />
        </div>
      </div>
    </section>
  );
}

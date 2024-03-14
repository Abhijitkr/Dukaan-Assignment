import { useState } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { CiSearch } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import { TbArrowsSort } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";

export default function Payouts() {
  const [inputFocus, setInputFocus] = useState(false);
  return (
    <div className="flex w-full">
      <div className="w-[17%]">
        <Sidebar />
      </div>
      <div className="w-[83%] bg-gray-50">
        <Header />
        <div className="flex justify-between py-7 px-10">
          <h3 className="text-xl font-medium">Overview</h3>
          <div className="text-gray-600 border p-1 px-1 pr-2 cursor-pointer bg-white rounded-sm">
            <select
              name="filterMonth"
              id=""
              className="px-1 outline-none cursor-pointer"
              defaultValue="lastMonth"
            >
              <option value="lastMonth">Last Month</option>
              <option value="jan">January</option>
            </select>
          </div>
        </div>
        <div className="px-10 flex gap-6">
          <Cards head="Online orders" value="231" />
          <Cards head="Amount received" value="₹23,92,312.19" />
        </div>
        <h3 className="text-xl font-medium py-7 px-10">
          Transactions | This Month
        </h3>
        <div className="bg-white mx-10 p-4 rounded-md">
          <div className="flex justify-between items-center">
            <div
              className={`flex items-center px-2 rounded-md border border-gray-300 w-80 ${
                inputFocus ? "ring-1 ring-gray-300" : ""
              }`}
            >
              <FiSearch size="20" className="text-gray-400" />
              <input
                type="text"
                name="Search"
                id=""
                placeholder="Search by order ID..."
                className="p-2 w-80 outline-none placeholder:text-gray-500"
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
              />
            </div>
            <div className="flex gap-2">
              <button className="border border-gray-300 p-1 px-2 rounded-md text-gray-600 flex items-center gap-1">
                Sort <TbArrowsSort />
              </button>
              <button className="border border-gray-300 p-1 px-2 rounded-md text-gray-600">
                <FiDownload size="18" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

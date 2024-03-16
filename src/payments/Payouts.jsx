import { useState } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { FiDownload } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { TiArrowSortedDown } from "react-icons/ti";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { LuArrowDownUp, LuArrowUpDown } from "react-icons/lu";

const transactions = [
  {
    orderId: "#281209",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFees: "₹22",
  },
];

const transactionData = Array.from({ length: 20 }, () => transactions[0]);

export default function Payouts() {
  const [inputFocus, setInputFocus] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  return (
    <div className="flex w-full">
      <div className="w-[16%] relative">
        <Sidebar />
      </div>
      <div className="w-[84%] bg-gray-50">
        <Header />
        <div className="flex justify-between py-7 px-10 mt-16">
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
              className={`flex items-center px-4 rounded-md border border-gray-300 w-80 ${
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
            {/* TODO: Add Sorting Functionality */}
            <div className="flex gap-2">
              <button
                className="border border-gray-300 p-1 px-3 rounded-md text-gray-600 flex items-center gap-2 text-lg"
                onClick={() => setIsSorted(!isSorted)}
              >
                Sort
                {isSorted ? (
                  <LuArrowUpDown size="16" />
                ) : (
                  <LuArrowDownUp size="16" />
                )}
              </button>
              <button className="border border-gray-300 p-1 px-2 rounded-md text-gray-600">
                <FiDownload size="23" />
              </button>
            </div>
          </div>

          <table className="my-4 w-full">
            <thead>
              <tr className="flex bg-[#F2F2F2] p-2 text-gray-600 rounded-md px-3 flex-grow">
                <th className="font-medium w-1/4 flex">Order ID</th>
                <th className="font-medium flex items-center w-1/4">
                  Order date
                  <TiArrowSortedDown size="18" className="text-gray-700 " />
                </th>
                <th className="font-medium w-1/4 flex justify-end">
                  Order amount
                </th>
                <th className="font-medium flex items-center gap-1 w-1/4 justify-end">
                  Transaction fees <HiOutlineInformationCircle size="18" />
                </th>
              </tr>
            </thead>
            <tbody>
              {transactionData.map((data, index) => (
                <tr className="flex border-b mx-3 py-3" key={index}>
                  <td className="w-1/4 text-[#146EB4] font-medium">
                    {data.orderId}
                  </td>
                  <td className="w-1/4">{data.orderDate}</td>
                  <td className="w-1/4 flex justify-end">{data.orderAmount}</td>
                  <td className="w-1/4 flex justify-end">
                    {data.transactionFees}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import { CiWallet } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import menus from "../data";

export default function Sidebar() {
  return (
    <div className="bg-[#1e2640] text-white h-full relative">
      <div className="flex gap-4 p-4 items-center">
        <div className="w-16">
          <img
            src="src\payments\images\logo.png"
            alt="Nishyan"
            className="rounded-md h-12 w-full"
          />
        </div>
        <div className="flex w-full justify-between items-center">
          <div>
            <h4 className="font-medium text-lg">Nishyan</h4>
            <a href="#" className="underline text-gray-300">
              Visit store
            </a>
          </div>
          <div>
            <FaChevronDown size="22" />
          </div>
        </div>
      </div>

      <div className="flex gap-1 mx-4 cursor-pointer flex-col">
        {menus && menus.length > 0
          ? menus.map((menuItem) => (
              <div
                className={`flex hover:bg-[#494f64] gap-2 px-3 py-2 rounded-sm ${
                  menuItem.label === "Payments" ? "bg-[#494f64]" : ""
                }`}
                key={menuItem.label}
              >
                <div className="w-6 flex justify-center items-center">
                  {menuItem.icon}
                </div>
                <div>{menuItem.label}</div>
              </div>
            ))
          : null}
      </div>

      <div className="absolute bottom-5 left-5 w-[85%] bg-[#353c53] rounded-md flex px-4 py-3 items-center gap-6">
        <div className="bg-[#494f64] p-2 rounded-md">
          <CiWallet size="30" />
        </div>
        <div>
          <h5 className="text-gray-200">Available credits</h5>
          <h4 className="text-xl font-medium">222.10</h4>
        </div>
      </div>
    </div>
  );
}

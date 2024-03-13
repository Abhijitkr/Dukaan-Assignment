import Cards from "./components/Cards";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Payouts() {
  return (
    <div className="flex w-full">
      <div className="w-[17%]">
        <Sidebar />
      </div>
      <div className="w-[83%] bg-gray-50">
        <Header />
        <div className="flex justify-between py-7 px-10">
          <h3 className="text-xl font-medium">Overview</h3>
          <div className="text-gray-600 border p-1 px-1 pr-2 cursor-pointer bg-white">
            <select
              name="filterMonth"
              id=""
              className="px-1 outline-none cursor-pointer"
            >
              <option value="lastMonth" selected>
                Last Month
              </option>
              <option value="jan">January</option>
            </select>
          </div>
        </div>
        <div className="px-10 flex gap-6">
          <Cards head="Online orders" value="231" />
          <Cards head="Amount received" value="₹23,92,312.19" />
        </div>
      </div>
    </div>
  );
}

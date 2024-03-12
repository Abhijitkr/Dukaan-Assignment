import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function Payouts() {
  return (
    <div className="flex w-full">
      <div className="w-[17%]">
        <Sidebar />
      </div>
      <div className="w-[83%]">
        <Header />
        <div className="flex justify-between py-5 px-10">
          <h3 className="text-xl font-medium">Overview</h3>
          <div className="text-gray-600 border p-1 px-1 pr-2">
            <select name="filterMonth" id="" className="px-1 outline-none">
              <option value="lastMonth" selected>
                Last Month
              </option>
              <option value="jan">January</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

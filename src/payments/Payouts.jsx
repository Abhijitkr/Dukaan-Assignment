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
      </div>
    </div>
  );
}

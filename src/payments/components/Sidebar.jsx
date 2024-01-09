import { FaChevronDown, FaWallet } from "react-icons/fa6";
import menus from "../data";
import "../payouts.css";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-title">
        <div className="sidebar-logo">
          <img src="src\payments\images\logo.png" alt="Nishyan" />
        </div>
        <div className="sidebar-head">
          <h4>Nishyan</h4>
          <a href="">Visit Store</a>
        </div>
        <div className="arrow">
          <FaChevronDown />
        </div>
      </div>

      <div className="sidebar-content">
        {menus && menus.length > 0
          ? menus.map((menuItem) => (
              <div
                className={
                  menuItem.label === "Payments"
                    ? "menuItems isActive"
                    : "menuItems"
                }
                key={menuItem.label}
              >
                {menuItem.icon}
                {menuItem.label}
              </div>
            ))
          : null}
      </div>

      <div className="available-credit">
        <div className="wallet-icon">
          {/* <FaHouseChimney /> */}
          <FaWallet />
        </div>
        <div className="wallet-content">
          <h5>Available credits</h5>
          <h4>222.10</h4>
        </div>
      </div>
    </div>
  );
}

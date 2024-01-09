import { FaHouse, FaJediOrder, FaMoneyBill, FaPlug } from "react-icons/fa6";
import {
  BsMegaphone,
  BsArrowUpLeft,
  BsPalette,
  BsPlugin,
} from "react-icons/bs";
import {
  FiHome,
  FiClipboard,
  FiGrid,
  FiTruck,
  FiBarChart,
  FiTool,
  FiPercent,
  FiUsers,
} from "react-icons/fi";

export const menus = [
  {
    label: "Home",
    to: "/",
    icon: <FiHome />,
  },
  {
    label: "Orders",
    to: "/orders",
    icon: <FiClipboard />,
  },
  {
    label: "Products",
    to: "/products",
    icon: <FiGrid />,
  },
  {
    label: "Delivery",
    to: "/delivery",
    icon: <FiTruck />,
  },
  {
    label: "Marketing",
    to: "/marketing",
    icon: <BsMegaphone />,
  },
  {
    label: "Analytics",
    to: "/analytics",
    icon: <FiBarChart />,
  },
  {
    label: "Payments",
    to: "/payments",
    icon: <FaMoneyBill />,
  },
  {
    label: "Tools",
    to: "/tools",
    icon: <FiTool />,
  },
  {
    label: "Discounts",
    to: "/discounts",
    icon: <FiPercent />,
  },
  {
    label: "Audience",
    to: "/audience",
    icon: <FiUsers />,
  },
  {
    label: "Appearance",
    to: "/appearance",
    icon: <BsPalette />,
  },
  {
    label: "Plugins",
    to: "/plugins",
    icon: <FaPlug />,
  },
];

export default menus;

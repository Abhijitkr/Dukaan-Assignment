import { AiOutlineSound } from "react-icons/ai";
import { FiTruck, FiUsers } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { HiCash, HiOutlineLightningBolt } from "react-icons/hi";
import { LuClipboardList, LuPalette } from "react-icons/lu";
import { PiChartBar, PiNavigationArrow } from "react-icons/pi";
import { SlGrid } from "react-icons/sl";
import { TbDiscount2 } from "react-icons/tb";

export const menus = [
  {
    label: "Home",
    to: "/",
    icon: <GrHomeRounded />,
  },
  {
    label: "Orders",
    to: "/orders",
    icon: <LuClipboardList size="20" />,
  },
  {
    label: "Products",
    to: "/products",
    icon: <SlGrid />,
  },
  {
    label: "Delivery",
    to: "/delivery",
    icon: <FiTruck size="19" />,
  },
  {
    label: "Marketing",
    to: "/marketing",
    icon: <AiOutlineSound size="20" />,
  },
  {
    label: "Analytics",
    to: "/analytics",
    icon: <PiChartBar size="20" />,
  },
  {
    label: "Payments",
    to: "/payments",
    icon: <HiCash size="25" />,
  },
  {
    label: "Tools",
    to: "/tools",
    icon: <PiNavigationArrow size="22" />,
  },
  {
    label: "Discounts",
    to: "/discounts",
    icon: <TbDiscount2 size="22" />,
  },
  {
    label: "Audience",
    to: "/audience",
    icon: <FiUsers size="20" />,
  },
  {
    label: "Appearance",
    to: "/appearance",
    icon: <LuPalette size="20" />,
  },
  {
    label: "Plugins",
    to: "/plugins",
    icon: <HiOutlineLightningBolt size="22" />,
  },
];

export default menus;

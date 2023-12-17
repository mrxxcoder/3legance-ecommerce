import { NavLink } from "react-router-dom";
import profile from "../assets/images/profile.jpg";
import Button from "./Button";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineCamera } from "react-icons/hi2";

function AccountNavigation() {
  return (
    <div className="p-8 bg-[#F3F5F7] flex flex-col gap-8 max-h-[450px]">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="relative">
          <img src={profile} className="w-20 h-20 rounded-full" />
          <ButtonIcon className="absolute bg-black p-1 rounded-full border-2 border-white -right-2 bottom-0">
            <HiOutlineCamera size={24} style={{ color: "white" }} />
          </ButtonIcon>
        </div>
        <h2 className="text-lg font-semibold">Ahmed Samy</h2>
      </div>
      <ul className="space-y-4">
        <li className="w-full text-gray-500 font-medium">
          <NavLink
            to="details"
            className={({ isActive }) =>
              isActive ? "border-b border-b-gray-900 block text-gray-800" : ""
            }
          >
            Account
          </NavLink>
        </li>
        <li className="w-full text-gray-500 font-medium">
          <NavLink
            to="wishlist"
            className={({ isActive }) =>
              isActive ? "border-b border-b-gray-900 block text-gray-800" : ""
            }
          >
            Wishlist
          </NavLink>
        </li>
        <li className="w-full text-gray-500 font-medium pb-2">
          <NavLink
            to="orders"
            className={({ isActive }) =>
              isActive ? "border-b border-b-gray-900 block text-gray-800" : ""
            }
          >
            Orders
          </NavLink>
        </li>
        <li>
          <Button variant="primary" width="w-full">
            Logout
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default AccountNavigation;

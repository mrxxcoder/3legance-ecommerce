import { NavLink } from "react-router-dom";
import profile from "../assets/images/profile.jpg";

function AccountNavigation() {
  return (
    <div className="p-8 bg-[#F3F5F7] flex flex-col gap-8">
      <div className="flex flex-col justify-center items-center">
        <div className="relative">
          <img src={profile} className="w-20 h-20 rounded-full" />
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
      </ul>
    </div>
  );
}

export default AccountNavigation;

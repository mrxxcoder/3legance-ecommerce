import { NavLink } from "react-router-dom";
import defaultUser from "../assets/images/default-user.jpg";

import Logout from "../features/authentication/Logout";
import { useUser } from "../features/authentication/useUser";

function AccountNavigation() {
  const { user } = useUser();
  const fullName = user?.user_metadata?.fullName;
  const avatar = user?.user_metadata?.avatar;

  return (
    <div className="p-8 bg-[#F3F5F7] flex flex-col gap-8 max-h-[450px]">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="relative">
          <img src={avatar || defaultUser} className="w-20 h-20 rounded-full" />
        </div>
        <h2 className="text-lg font-semibold">{fullName}</h2>
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
          <Logout />
        </li>
      </ul>
    </div>
  );
}

export default AccountNavigation;

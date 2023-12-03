import { HiMiniXMark, HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { RiYoutubeLine } from "react-icons/ri";
import Button from "./Button";
import { Link, NavLink } from "react-router-dom";

interface IProps {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}

function Menu({ menuOpen, setMenuOpen }: IProps) {
  if (menuOpen)
    return (
      <div className="bg-white h-screen w-[45vh] absolute left-0 top-0 px-8 py-12 flex flex-col justify-between transition-all">
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">3legant</h2>
            <span onClick={() => setMenuOpen(false)}>
              <HiMiniXMark size={26} />
            </span>
          </div>

          <ul className="flex flex-col gap-8">
            <li className="border-b border-b-gray-200 py-3 text-lg font-normal">
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className="border-b border-b-gray-200 py-3 text-lg font-normal">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="border-b border-b-gray-200 py-3 text-lg font-normal">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <ul>
            <li className="flex items-center justify-between border-b border-b-gray-200 py-4">
              <span className="text-xl font-semibold text-gray-400">Cart</span>
              <span>
                <HiOutlineShoppingBag size={24} />
              </span>
            </li>
            <li className="flex items-center justify-between border-b border-b-gray-200 py-4">
              <span className="text-xl font-semibold text-gray-400">
                Wishlist
              </span>
              <span>
                <HiOutlineHeart size={24} />
              </span>
            </li>
          </ul>

          <Button width="w-full">Sign In</Button>
          <div className="flex items-center gap-8">
            <FaInstagram size={24} />
            <FiFacebook size={24} />
            <RiYoutubeLine size={24} />
          </div>
        </div>
      </div>
    );
}

export default Menu;

import { Link, NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { RiYoutubeLine } from "react-icons/ri";
import { useState } from "react";
import Button from "./Button";

interface IProps {
  backgroundColor: string;
}

function Navbar({ backgroundColor = "transparent" }: IProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: backgroundColor }}>
      <div className="container mx-auto py-4 px-8 flex items-center justify-between relative">
        <div className="flex items-center gap-4">
          <span onClick={() => setMenuOpen(true)}>
            <HiBars3 size={26} />
          </span>
          <h1 className="font-semibold text-xl">3legance</h1>
        </div>

        {menuOpen && (
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
                  <span className="text-xl font-semibold text-gray-400">
                    Cart
                  </span>
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
        )}

        <ul className="md:flex items-center gap-6 font-semibold hidden">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <HiOutlineUserCircle size={28} />
          <HiOutlineShoppingBag size={24} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

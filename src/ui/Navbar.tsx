import { Link, NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";
import Menu from "./Menu";
import { useState } from "react";

interface IProps {
  backgroundColor: string;
}

function Navbar({ backgroundColor = "transparent" }: IProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav style={{ backgroundColor: backgroundColor }} className="relative">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span onClick={() => setMenuOpen(true)} className="md:hidden">
            <HiBars3 size={26} />
          </span>
          <h1 className="font-semibold text-xl">3legance</h1>
        </div>

        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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

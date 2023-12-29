import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiBars3 } from "react-icons/hi2";
import Menu from "./Menu";
import { useState } from "react";
import ButtonIcon from "./ButtonIcon";
import FlyoutCart from "../features/cart/FlyoutCart";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface IProps {
  backgroundColor: string;
}

function Navbar({ backgroundColor = "transparent" }: IProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [flyoutCartOpen, setFlyoutCartOpen] = useState(false);
  const products = useSelector((state: RootState) => state.cart.products);
  const navigate = useNavigate();

  return (
    <nav style={{ backgroundColor: backgroundColor }} className="relative">
      <div className="container mx-auto py-4 px-8 md:px-0 flex items-center justify-between">
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
        </ul>

        <div className="flex items-center gap-4">
          <ButtonIcon onClick={() => navigate("/account")}>
            <HiOutlineUserCircle size={28} />
          </ButtonIcon>
          <ButtonIcon
            className="relative"
            onClick={() => setFlyoutCartOpen(true)}
          >
            {products.length > 0 && (
              <span className="absolute -right-[22px] top-0.5 text-white w-5 h-5 rounded-full bg-black flex items-center justify-center text-xs font-medium">
                {products.length}
              </span>
            )}
            <HiOutlineShoppingBag size={24} />
          </ButtonIcon>
        </div>
        <FlyoutCart
          flyoutCartOpen={flyoutCartOpen}
          setFlyoutCartOpen={setFlyoutCartOpen}
        />
        {(flyoutCartOpen || menuOpen) && (
          <div className="fixed w-screen h-screen top-0 left-0 bg-[rgba(0,0,0,0.3)] z-20" />
        )}
      </div>
    </nav>
  );
}

export default Navbar;

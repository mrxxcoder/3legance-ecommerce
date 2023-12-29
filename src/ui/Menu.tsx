import { HiMiniXMark, HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { RiYoutubeLine } from "react-icons/ri";
import Button from "./Button";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";
import { useUser } from "../features/authentication/useUser";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface IProps {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}

function Menu({ menuOpen, setMenuOpen }: IProps) {
  const { user } = useUser();
  const navigate = useNavigate();
  const products = useSelector((state: RootState) => state.cart.products);
  const wishlistItems = useSelector(
    (state: RootState) => state.wishilist.products
  );
  return (
    <div
      className={`bg-white h-screen w-[45vh] fixed left-0 top-0 px-8 py-12 transition-all z-30 flex flex-col justify-between flyout-menu ${
        menuOpen ? "open" : ""
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">3legant</h2>
          <ButtonIcon onClick={() => setMenuOpen(false)}>
            <HiMiniXMark size={26} />
          </ButtonIcon>
        </div>

        <ul className="flex flex-col gap-8">
          <li className="border-b border-b-gray-200 py-3 text-lg font-normal">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="border-b border-b-gray-200 py-3 text-lg font-normal">
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </div>

      <div className="space-y-6">
        <ul>
          <li className="flex items-center justify-between border-b border-b-gray-200 py-4">
            <span
              className="text-xl font-semibold text-gray-400"
              onClick={() => navigate("/cart")}
            >
              Cart
            </span>
            <ButtonIcon className="relative">
              {products.length > 0 && (
                <span className="absolute -right-[22px] top-0.5 text-white w-5 h-5 rounded-full bg-black flex items-center justify-center text-xs font-medium">
                  {products.length}
                </span>
              )}
              <HiOutlineShoppingBag size={24} />
            </ButtonIcon>
          </li>
          <li className="flex items-center justify-between border-b border-b-gray-200 py-4">
            <span
              className="text-xl font-semibold text-gray-400"
              onClick={() => navigate("/account/wishlist")}
            >
              Wishlist
            </span>
            <ButtonIcon className="relative">
              {wishlistItems.length > 0 && (
                <span className="absolute -right-[22px] top-0.5 text-white w-5 h-5 rounded-full bg-black flex items-center justify-center text-xs font-medium">
                  {wishlistItems.length}
                </span>
              )}
              <HiOutlineHeart size={24} />
            </ButtonIcon>
          </li>
        </ul>

        {!user && (
          <Button
            variant="primary"
            width="w-full"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </Button>
        )}
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

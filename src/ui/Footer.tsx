import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { RiYoutubeLine } from "react-icons/ri";

function Footer() {
  return (
    <div className="bg-[#141718] text-white px-16 py-28 space-y-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <h1 className="text-3xl font-semibold lg:border-r lg:border-r-gray-500 lg:pr-12">
            3legant
          </h1>

          <p className="text-md border-b border-b-gray-400 md:border-none pb-4 md:p-0">
            Headphone Store
          </p>
        </div>
        <ul className="flex flex-col md:flex-row items-center gap-16 mt-8">
          <li>Home</li>
          <li>Shop</li>
          <li>Product</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between border-t border-t-gray-600 py-4 gap-4">
        <div className="flex flex-col text-center md:flex-row gap-16 order-2 lg:order-1">
          <p className="text-md font-normal">
            Copyright © 2023 3legant. All rights reserved
          </p>
          <span className="text-lg font-semibold">Privacy Policy</span>
          <span className="text-lg font-semibold">Terms of Use</span>
        </div>
        <div className="flex items-center gap-8 order-1 lg:order-2">
          <FaInstagram size={24} />
          <FiFacebook size={24} />
          <RiYoutubeLine size={24} />
        </div>
      </div>
    </div>
  );
}

export default Footer;

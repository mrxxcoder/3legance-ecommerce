import { HiOutlineEnvelope } from "react-icons/hi2";

function Cta() {
  return (
    <div className="bg-[#F2F4F6] lg:bg-[url('assets/images/cta-last.png')] h-[360px] bg-no-repeat bg-cover  flex items-center justify-center px-8">
      <div className="flex flex-col space-y-4">
        <h3 className="text-3xl md:text-4xl font-semibold">
          Join Our Newsletter
        </h3>
        <p className="text-lg md:text-xl">
          Sign up for deals, new products and promotions
        </p>
        <div className="relative">
          <span className="absolute left-0 top-4">
            <HiOutlineEnvelope size="24px" />
          </span>
          <input
            type="email"
            className="bg-transparent border-b border-b-gray-400 px-8 py-4 w-full outline-none"
            placeholder="Email address"
          />
          <span className="absolute right-0 top-4 text-xl text-gray-500 hover:text-gray-800 cursor-pointer transition">
            Signup
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cta;

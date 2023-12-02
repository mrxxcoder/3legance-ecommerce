import cta from "../assets/images/cta.png";
import Button from "./Button";

interface IProps {}

function Promotion({}: IProps) {
  return (
    <div className="py-24 flex flex-col lg:flex-row">
      <img
        src={cta}
        alt="call to action image"
        className="order-2 lg:order-1"
      />
      <div className="bg-[#FFDD99] w-full p-12 md:p-28 order-1 lg:order-2">
        <span className="uppercase font-semibold mb-6 text-blue-500">
          promotion
        </span>
        <h3 className="text-4xl md:text-5xl font-semibold mb-8">
          Hurry up! 40% OFF
        </h3>
        <p className="text-xl mb-16">
          Thousands of high tech are waiting for you
        </p>
        <p className="text-3xl md:text-4xl font-semibold mb-16">
          Offer expires in 4 days!
        </p>
        <Button>Shop now</Button>
      </div>
    </div>
  );
}

export default Promotion;

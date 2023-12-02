import FeatureCard from "./FeatureCard";
import { HiOutlineTruck } from "react-icons/hi2";
import { HiMiniArrowPath } from "react-icons/hi2";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { HiOutlinePhone } from "react-icons/hi2";

function Features() {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-4 md:gap-8 mb-24 justify-items-center">
      <FeatureCard
        icon={<HiOutlineTruck size="56px" />}
        title="Free Shipping"
        description="Order above $200"
      />
      <FeatureCard
        icon={<HiMiniArrowPath size="56px" />}
        title="Money-back"
        description="30 days guarantee"
      />
      <FeatureCard
        icon={<HiOutlineLockClosed size="56px" />}
        title="Secure Payments"
        description="Secured by Stripe"
      />
      <FeatureCard
        icon={<HiOutlinePhone size="56px" />}
        title="24/7 Support"
        description="Phone and Email support"
      />
    </div>
  );
}

export default Features;

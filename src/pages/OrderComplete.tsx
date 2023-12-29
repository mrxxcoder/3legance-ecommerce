import { HiOutlineCheckCircle } from "react-icons/hi2";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

function OrderComplete() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <div className="mx-auto mt-32 p-16 shadow-xl max-w-[700px] text-center flex flex-col items-center space-y-6">
        <h1 className="text-gray-500 text-2xl font-semibold">Thank you!🎉</h1>
        <h2 className="text-4xl font-semibold">Your order has been received</h2>
        <span>
          <HiOutlineCheckCircle size={120} color="green" />
        </span>
        <Button variant="primary" width="w-fit" onClick={() => navigate("/")}>
          Start shopping again
        </Button>
      </div>
    </div>
  );
}

export default OrderComplete;

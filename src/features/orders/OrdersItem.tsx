interface IProps {}

function OrdersItem({}: IProps) {
  return (
    <div className="flex items-center justify-between text-md font-normal py-6 border-b border-b-gray-200">
      <span>#3456_768</span>
      <span>October 17, 2023</span>
      <span>Delivered</span>
      <span>$1234.00</span>
    </div>
  );
}

export default OrdersItem;

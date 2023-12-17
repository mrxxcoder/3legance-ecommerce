import OrdersItem from "./OrdersItem";

interface IProps {}

function OrdersTable({}: IProps) {
  return (
    <div>
      <div className="flex items-center justify-between border-b border-b-gray-200 py-6 text-md text-gray-500">
        <span>Number ID</span>
        <span>Dates</span>
        <span>Status</span>
        <span>Price</span>
      </div>
      <div>
        <OrdersItem />
        <OrdersItem />
        <OrdersItem />
        <OrdersItem />
        <OrdersItem />
      </div>
    </div>
  );
}

export default OrdersTable;

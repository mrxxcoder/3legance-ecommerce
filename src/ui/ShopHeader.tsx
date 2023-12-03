interface IProps {}

function ShopHeader({}: IProps) {
  return (
    <div className="bg-[url('assets/images/shop-header.jpg')] bg-cover bg-center bg-no-repeat container mx-auto h-[500px] flex items-center justify-center">
      <div className="text-center space-y-6">
        <h2 className="text-6xl font-bold">Shop Page</h2>
        <p className="text-2xl">Let’s design the place you always imagined.</p>
      </div>
    </div>
  );
}

export default ShopHeader;

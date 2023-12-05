interface IProps {}

function ShopFilter({}: IProps) {
  return (
    <div className="px-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 container mx-auto mt-16">
      <div className="flex flex-col">
        <label
          htmlFor="categories"
          className="mb-2 text-md uppercase font-medium text-gray-500 "
        >
          Categories
        </label>
        <select
          name="categories"
          id="categories"
          value="headphones"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 py-2.5 pl-2 pr-24"
        >
          <option value="headphones">Headphones</option>
          <option value="earbuds">Earbuds</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="price"
          className="mb-2 text-md uppercase font-medium text-gray-500 "
        >
          price
        </label>
        <select
          name="price"
          id="price"
          value="all"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 py-2.5 pl-2 pr-24"
        >
          <option value="all">All Prices</option>
          <option value="100-200">$100 - $200</option>
          <option value="200-300">$200 - $300</option>
        </select>
      </div>
    </div>
  );
}

export default ShopFilter;

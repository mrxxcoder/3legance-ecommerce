import Filter from "./Filter";

function ShopFilter() {
  return (
    <div className="px-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 container mx-auto mt-16">
      <Filter
        filterField="categories"
        options={[
          { value: "all", label: "All" },
          { value: "headphones", label: "Headphones" },
          { value: "earbuds", label: "Earbuds" },
          { value: "accessories", label: "Accessories" },
        ]}
      />
    </div>
  );
}

export default ShopFilter;

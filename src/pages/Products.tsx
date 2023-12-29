import ProductsLayout from "../features/products/ProductsLayout";
import { useProducts } from "../features/products/useProducts";
import Cta from "../ui/Cta";
import Footer from "../ui/Footer";
import Pagination from "../ui/Pagination";
// import ShopFilter from "../ui/ShopFilter";
import ShopHeader from "../ui/ShopHeader";

function Products() {
  const { count } = useProducts();
  return (
    <div>
      <ShopHeader />
      {/* <ShopFilter /> */}
      <ProductsLayout />
      <div className="mx-auto container mb-16">
        <Pagination count={count} />
      </div>
      <Cta />
      <Footer />
    </div>
  );
}

export default Products;

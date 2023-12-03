import ProductsLayout from "../features/products/ProductsLayout";
import Cta from "../ui/Cta";
import Footer from "../ui/Footer";
import ShopFilter from "../ui/ShopFilter";
import ShopHeader from "../ui/ShopHeader";

function Products() {
  return (
    <div>
      <ShopHeader />
      <ShopFilter />
      <ProductsLayout />
      <Cta />
      <Footer />
    </div>
  );
}

export default Products;

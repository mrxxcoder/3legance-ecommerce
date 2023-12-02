import CollectionsLayout from "../features/collections/CollectionsLayout";
import ProductsLayout from "../features/products/ProductsLayout";
import BestSeller from "../ui/BestSeller";
import Promotion from "../ui/Promotion";
import Features from "../ui/Features";
import Feed from "../ui/Feed";
import Header from "../ui/Header";
import Cta from "../ui/Cta";
import Footer from "../ui/Footer";

function Home() {
  return (
    <div>
      <Header />
      <ProductsLayout />
      <CollectionsLayout />
      <BestSeller />
      <Promotion />
      <Features />
      <Feed />
      <Cta />
      <Footer />
    </div>
  );
}

export default Home;

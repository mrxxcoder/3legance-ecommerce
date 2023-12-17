import { useSelector } from "react-redux";
import WishlistItem from "./WishlistItem";
import { RootState } from "../../store/store";

function WishlistTable() {
  const wishlistItems = useSelector(
    (state: RootState) => state.wishilist.products
  );
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Your wishlist</h2>
      {wishlistItems.map((item) => (
        <WishlistItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default WishlistTable;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Account from "./pages/Account";
import Orders from "./ui/Orders";
import Wishlist from "./ui/Wishlist";
import AccountForm from "./ui/AccountForm";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 60,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="shop" element={<Products />} />
            <Route path="shop/:productId" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="account" element={<Account />}>
              <Route index path="/account/details" element={<AccountForm />} />
              <Route path="/account/orders" element={<Orders />} />
              <Route path="/account/wishlist" element={<Wishlist />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Account from "./pages/Account";
import AccountForm from "./ui/AccountForm";
import WishlistTable from "./features/wishlist/WishlistTable";
import OrdersTable from "./features/orders/OrdersTable";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ui/ProtectedRoute";
import OrderComplete from "./pages/OrderComplete";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 100000,
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
            <Route path="/complete" element={<OrderComplete />} />

            <Route
              path="account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            >
              <Route
                index
                element={<Navigate replace to="/account/details" />}
              />
              <Route path="/account/details" element={<AccountForm />} />
              <Route path="/account/orders" element={<OrdersTable />} />
              <Route path="/account/wishlist" element={<WishlistTable />} />
            </Route>
          </Route>
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;

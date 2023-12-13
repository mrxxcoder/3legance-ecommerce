import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

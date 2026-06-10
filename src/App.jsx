import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { publicRoutes } from "@/routes";
//ĐỨc thêm
import { CartProvider } from "@/context/CartContext";

// Quân thêm
import { OrderProvider } from "./context/OrderContext";

export default function App() {
  return (
    <CartProvider>
      <OrderProvider>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = MainLayout;
            console.log(route);

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </OrderProvider>
    </CartProvider>
  );
}

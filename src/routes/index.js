import AccessoriesPage from "@/pages/AccessoriesPage";
import CheckOut from "@/pages/payment/CheckOut";
import HomePage from "@/pages/HomePage";
import NewCollectionPage from "@/pages/NewCollectionPage";
import PantsPage from "@/pages/PantsPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import ShirtPage from "@/pages/ShirtPage";
import CartPage from "@/pages/CartPage";

// Quân thêm
import OrdersPage from "@/pages/OrdersPage";

// Những trang có thể vào mà không cần đăng nhập
const publicRoutes = [
  { path: "/", component: HomePage, label: "Trang chủ" },
  { path: "/shirt", component: ShirtPage, label: "Áo" },
  { path: "/pants", component: PantsPage, label: "Quần" },
  { path: "/accessories", component: AccessoriesPage, label: "Phụ kiện" },
  {
    path: "/new-collection",
    component: NewCollectionPage,
    label: "Bộ sưu tập mới",
  },
  {
    path: "/product/:id",
    component: ProductDetailPage,
    label: "Chi tiết sản phẩm",
  },
  {
    path: "/orders",
    component: OrdersPage,
    label: "Đơn hàng của bạn",
  },
];

// Những trang cần đăng nhập mới vào được;
const privateRoutes = [
  { path: "/orders", component: OrdersPage, label: "Đơn hàng" },
];

export { publicRoutes, privateRoutes };

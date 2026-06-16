import AccessoriesPage from "@/pages/AccessoriesPage";
import CheckOut from "@/pages/payment/CheckOut";
import HomePage from "@/pages/HomePage";
import NewCollectionPage from "@/pages/NewCollectionPage";
import PantsPage from "@/pages/PantsPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import ShirtPage from "@/pages/ShirtPage";
import CartPage from "@/pages/CartPage";
import SearchPage from "@/pages/SearchPage";
import OrdersPage from "@/pages/OrdersPage";
import AccountPage from "@/pages/AccountPage";

// Những trang có thể vào mà không cần đăng nhập
const publicRoutes = [
    { path: "/", component: HomePage, label: "TRANG CHỦ" },
    { path: "/shirt", component: ShirtPage, label: "ÁO" },
    { path: "/pants", component: PantsPage, label: "QUẦN" },
    { path: "/accessories", component: AccessoriesPage, label: "PHỤ KIỆN" },
    { path: "/new-collection", component: NewCollectionPage, label: "BỘ SƯU TẬP MỚI" },
    { path: "/cart", component: CartPage },
    { path: "/checkout", component: CheckOut },
    { path: "/product/:id", component: ProductDetailPage },
    { path: "/account", component: AccountPage },
    { path: "/search", component: SearchPage },
    { path: "/orders", component: OrdersPage },
];

// Những trang cần đăng nhập mới vào được;
const privateRoutes = [];

export { publicRoutes, privateRoutes };

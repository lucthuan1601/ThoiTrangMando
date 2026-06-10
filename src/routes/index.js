import AccessoriesPage from "@/pages/AccessoriesPage";
import CheckOut from "@/pages/payment/CheckOut";
import HomePage from "@/pages/HomePage";
import NewCollectionPage from "@/pages/NewCollectionPage";
import PantsPage from "@/pages/PantsPage";
import ShirtPage from "@/pages/ShirtPage";
import CartPage from "@/pages/CartPage";


// Những trang có thể vào mà không cần đăng nhập
const publicRoutes = [
    { path: '/', component: HomePage, label: 'Trang chủ' }, 
    { path: '/shirt', component: ShirtPage, label: 'Áo' },
    { path: '/pants', component: PantsPage, label: 'Quần' },
    { path: '/accessories', component: AccessoriesPage, label: 'Phụ kiện' },
    { path: '/new-collection', component: NewCollectionPage, label: 'Bộ sưu tập mới' },
    // Đức thêm ở đây
    {path: "/cart",component: CartPage,},
];

// Những trang cần đăng nhập mới vào được;
const privateRoutes = [];

export { publicRoutes, privateRoutes };
import AccessoriesPage from "@/pages/AccessoriesPage";
import HomePage from "@/pages/HomePage";
import NewCollectionPage from "@/pages/NewCollectionPage";
import PantsPage from "@/pages/PantsPage";
import ShirtPage from "@/pages/ShirtPage";

// Lục thuận thêm phần này
import SearchPage from "@/pages/SearchPage";
//---------------------------------


// Những trang có thể vào mà không cần đăng nhập
const publicRoutes = [
    { path: '/', component: HomePage, label: 'Trang chủ' },
    { path: '/shirt', component: ShirtPage, label: 'Áo' },
    { path: '/pants', component: PantsPage, label: 'Quần' },
    { path: '/accessories', component: AccessoriesPage, label: 'Phụ kiện' },
    { path: '/new-collection', component: NewCollectionPage, label: 'Bộ sưu tập mới' },

    // Lục thuận thêm phần này
    {
        path: "/search",
        component: SearchPage,
    }
    // ------------------------
];

// Những trang cần đăng nhập mới vào được;
const privateRoutes = [];

export { publicRoutes, privateRoutes };
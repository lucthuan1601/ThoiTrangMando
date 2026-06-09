Giải thích chức năng của từng thư mục / file
- assets/: Nơi chứa các tài nguyên tĩnh không thay đổi.

    + images/: Chứa các ảnh tĩnh như logo, banner quảng cáo. (Ảnh sản phẩm có thể để ở đây hoặc dùng link URL ngoài cho nhẹ dự án).

- components/: Trái tim của dự án, chứa các mảnh ghép UI có thể tái sử dụng.

    + common/: Các component dùng chung ở khắp nơi (ví dụ: Button.jsx, Input.jsx, ProductCard.jsx).

    + layout/: Các thành phần cố định của trang (ví dụ: Header.jsx, Footer.jsx, Sidebar.jsx).

    + specific/: Các component đặc thù, phức tạp (ví dụ: HeroSlideshow.jsx, CartDrawer.jsx).

- context/: Chứa các file thiết lập React Context API. Rất phù hợp để quản lý các trạng thái toàn cục như Giỏ hàng (CartContext.jsx) hoặc Chủ đề sáng/tối (ThemeContext.jsx).

- data/: Vì không có Database, đây là nơi chứa dữ liệu giả.
Ví dụ: File mockProducts.js chứa một mảng các object mô phỏng dữ liệu áo thun, quần jeans, áo khoác nam kèm hình ảnh, giá cả, và size.

- hooks/: Nơi chứa các Custom Hooks do bạn tự viết để gom gọn logic.
Ví dụ: useCart.js (để lấy dữ liệu giỏ hàng), hoặc useInfiniteScroll.js (xử lý logic khi cuộn trang).

- layouts/: Chứa các "bộ khung" của trang.
Ví dụ: MainLayout.jsx sẽ bao gồm Header, phần nội dung động (dùng <Outlet /> của react-router-dom) và Footer.

- pages/: Các trang chính của website. Mỗi file đại diện cho một màn hình.

    + Home.jsx: Trang chủ (có banner, sản phẩm nổi bật).

    + Shop.jsx: Trang danh sách sản phẩm (có bộ lọc).

    + ProductDetail.jsx: Trang xem chi tiết một món đồ.

    + Cart.jsx: Trang giỏ hàng.

- utils/: Các hàm hỗ trợ dùng chung.
Ví dụ: formatCurrency.js (hàm biến số 150000 thành 150.000đ).

- App.jsx: Nơi định nghĩa các Routes (đường dẫn) của website và bọc các Providers (như CartProvider, ThemeProvider).

- main.jsx: Điểm neo của toàn bộ ứng dụng React vào file index.html.

- index.css: File CSS toàn cục. Nơi bạn khai báo CSS reset hoặc định nghĩa các CSS Variables (mã màu chủ đạo, font chữ).
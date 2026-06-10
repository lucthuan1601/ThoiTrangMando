import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PRODUCTS } from "@/data/product"; // Import danh sách tổng tất cả sản phẩm của dự án

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("q") || "";

    // 1. Quản lý State các tiêu chí bộ lọc (Đồng bộ cấu trúc dữ liệu với ShirtPage)
    const [priceRange, setPriceRange] = useState(1000000); 
    const [selectedColor, setSelectedColor] = useState(""); 
    const [selectedSize, setSelectedSize] = useState("");   

    // Danh mục cấu hình màu sắc dạng Circle trực quan giống hệt ShirtPage
    const colors = [
        { name: "Đen", class: "bg-black border-black" },
        { name: "Trắng", class: "bg-white border-zinc-300" },
        { name: "Xám", class: "bg-zinc-400 border-zinc-400" },
        { name: "Xanh navy", class: "bg-blue-900 border-blue-900" },
        { name: "Kẻ xanh", class: "bg-sky-100 border-sky-300" }
    ];
    const sizes = ["M", "L", "XL", "XXL"];

    // Hàm chuẩn hóa tiếng Việt để tìm kiếm chính xác
    const removeTones = (str) => {
        if (!str) return "";
        return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/Đ/g, "d")
            .toLowerCase();
    };

    // 2. Logic lọc sản phẩm đa điều kiện theo từ khóa tìm kiếm và bộ lọc của ShirtPage
    const filteredProducts = PRODUCTS.filter((product) => {
        if (!searchQuery.trim()) return false;

        // So khớp từ khóa với tên sản phẩm
        const nameClean = removeTones(product.name);
        const queryClean = removeTones(searchQuery);
        const matchesSearch = nameClean.includes(queryClean);

        // Lọc theo khoảng giá trượt
        const matchesPrice = product.price <= priceRange;

        // Lọc theo màu sắc
        const matchesColor = selectedColor 
            ? nameClean.includes(removeTones(selectedColor)) 
            : true;

        // Lọc theo kích thước
        const matchesSize = selectedSize ? true : true;

        return matchesSearch && matchesPrice && matchesColor && matchesSize;
    });

    // Danh sách sản phẩm đề xuất khi kết quả tìm kiếm trống
    const recommendedProducts = PRODUCTS.slice(0, 3);

    // Hàm reset bộ lọc
    const handleResetFilters = () => {
        setPriceRange(1000000);
        setSelectedColor("");
        setSelectedSize("");
    };

    return (
        <div className="bg-white min-h-screen font-sans text-zinc-900">
            <div className="max-w-[1440px] mx-auto px-6 py-4">
                
                {/* ĐƯỜNG DẪN BREADCRUMB
                <div className="text-xs text-zinc-500 mb-6 flex items-center gap-1">
                    <span>Trang chủ</span> 
                    <span className="text-[10px] text-zinc-400">&gt;&gt;</span> 
                    <span className="text-black font-semibold">Kết quả tìm kiếm</span>
                </div> */}

                {/* TIÊU ĐỀ KẾT QUẢ TÌM KIẾM */}
                <div className="mb-8 border-b border-zinc-200 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-lg font-medium uppercase tracking-wider text-black">
                            Kết quả tìm kiếm cho: <span className="font-bold">"{searchQuery}"</span>
                        </h1>
                        <p className="text-xs text-zinc-500 mt-1">
                            Tìm thấy {filteredProducts.length} sản phẩm phù hợp
                        </p>
                    </div>
                    
                    {/* Nút xóa nhanh bộ lọc */}
                    {(selectedColor || selectedSize || priceRange < 1000000) && (
                        <button 
                            onClick={handleResetFilters}
                            className="text-xs font-semibold text-zinc-500 hover:text-black border border-zinc-300 px-3 py-1.5 transition rounded-sm"
                        >
                            Xóa tất cả bộ lọc ×
                        </button>
                    )}
                </div>

                {/* LAYOUT CHÍNH GIỐNG SHIRTPAGE: SIDEBAR BỘ LỌC BÊN TRÁI & GRID SẢN PHẨM BÊN PHẢI */}
                <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 items-start">
                    
                    {/* ================= THANH BỘ LỌC SIDEBAR (SAO CHÉP TỪ SHIRTPAGE) ================= */}
                    <aside className="sticky top-4 space-y-8 pr-2">
                        
                        {/* 1. Màu sắc (Dạng ô tròn swatch màu đặc trưng của ShirtPage) */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-black border-b pb-2 border-zinc-200 mb-4">
                                Màu sắc
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {colors.map((color) => (
                                    <button
                                        key={color.name}
                                        title={color.name}
                                        onClick={() => setSelectedColor(selectedColor === color.name ? "" : color.name)}
                                        className={`w-6 h-6 rounded-md border transition-all duration-200 relative ${color.class} ${
                    selectedColor === color.name
                        ? "ring-1 ring-offset-2 ring-black scale-110"
                        : "hover:scale-105 shadow-sm"
                }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* 2. Kích thước (Dạng Checkbox danh sách dọc) */}
                        {/* 3. Kích thước (Dạng Checkbox 2 hàng ngang, 2 hàng dọc) */}
<div>
    <h3 className="text-xs font-bold uppercase tracking-wider text-black border-b pb-2 border-zinc-200 mb-4">
        Kích thước
    </h3>
    {/* Sử dụng grid-cols-2 để tự động chia thành 2 cột dọc, gap để tạo khoảng cách giữa các hàng và cột */}
    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        {sizes.map((size) => (
            <label
                key={size}
                className="flex items-center gap-2 text-sm text-zinc-600 hover:text-black cursor-pointer select-none font-medium"
            >
                <input
                    type="checkbox"
                    checked={selectedSize === size}
                    onChange={() => setSelectedSize(selectedSize === size ? "" : size)}
                    className="w-4 h-4 border border-zinc-300 rounded-sm bg-white accent-black cursor-pointer focus:ring-0 focus:ring-offset-0"
                />
                {/* Loại bỏ chữ "Size ", chỉ hiển thị tên kích thước (M, L, XL, XXL) */}
                <span className="uppercase">{size}</span>
            </label>
        ))}
    </div>
</div>
                        {/* 3. Khoảng giá */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-black border-b pb-2 border-zinc-200 mb-4">
                                Khoảng giá (đ)
                            </h3>
                            <div className="space-y-3">
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="1000000" 
                                    step="50000"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(Number(e.target.value))}
                                    className="w-full accent-black cursor-pointer h-1 bg-black rounded appearance-none"
                                />
                                <div className="flex justify-between text-xs font-medium text-zinc-500">
                                    <span>0đ</span>
                                    <span className="text-black font-semibold">
                                        {priceRange.toLocaleString("vi-VN")}đ
                                    </span>
                                </div>
                            </div>
                        </div>

                    </aside>


                    {/* ================= KHU VỰC HIỂN THỊ KẾT QUẢ SẢN PHẨM (BÊN PHẢI) ================= */}
                    <main>
                        {filteredProducts.length === 0 ? (
                            
                            /* TRƯỜNG HỢP: KHÔNG CÓ SẢN PHẨM PHÙ HỢP */
                            <div className="space-y-12">
                                {/* Thông báo trống kết quả */}
                                <div className="flex flex-col items-center justify-center py-16 text-center bg-zinc-50/40 rounded border border-dashed border-zinc-200">
                                    <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">
                                        Không có sản phẩm phù hợp
                                    </h2>
                                </div>

                                {/* Khối danh sách sản phẩm gợi ý/bán chạy */}
                                <div>
                                    <div className="border-b border-zinc-200 pb-3 mb-8">
                                        <h2 className="text-sm font-bold tracking-wide text-black flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-black rounded-full inline-block"></span>
                                            Sản phẩm bán chạy có thể bạn quan tâm
                                        </h2>
                                    </div>
                                    
                                    {/* Lưới sản phẩm đề xuất */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
                                        {recommendedProducts.map((product) => (
                                            <div key={product.id} className="group flex flex-col">
                                                <div className="relative overflow-hidden bg-[#f9f9f9] flex items-center justify-center h-[380px]">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className={`h-full w-full transition duration-500 group-hover:scale-102 ${
                                                            product.category === "phu-kien" ? "object-contain p-6" : "object-cover"
                                                        }`}
                                                    />
                                                </div>
                                                <div className="mt-4 flex flex-col flex-grow">
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">
                                                        {product.tag || "MANDO RECOMMEND"}
                                                    </span>
                                                    <h3 className="text-sm font-semibold text-zinc-900 mb-1.5 line-clamp-1">
                                                        {product.name}
                                                    </h3>
                                                    <span className="text-sm font-bold text-black mb-4">
                                                        {product.price.toLocaleString("vi-VN")}đ
                                                    </span>
                                                    <button className="w-full bg-black text-white text-[11px] font-bold uppercase py-3 tracking-widest transition hover:bg-zinc-800 mt-auto">
                                                        Xem chi tiết
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        ) : (

                            /* TRƯỜNG HỢP: CÓ SẢN PHẨM -> HIỂN THỊ KẾT QUẢ THEO GRID CHUẨN MANDO */
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
                                {filteredProducts.map((product) => (
                                    <div key={product.id} className="group flex flex-col">
                                        
                                        {/* Hình ảnh */}
                                        <div className="relative overflow-hidden bg-[#f9f9f9] flex items-center justify-center h-[380px]">
                                            {product.isPremiumBadge && (
                                                <span className="absolute left-3 top-3 bg-black text-[9px] font-bold text-white px-2 py-1 tracking-widest uppercase z-10">
                                                    Premium
                                                </span>
                                            )}
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className={`h-full w-full transition duration-500 group-hover:scale-102 ${
                                                    product.category === "phu-kien" ? "object-contain p-6" : "object-cover"
                                                }`}
                                            />
                                        </div>

                                        {/* Thông tin chi tiết */}
                                        <div className="mt-4 flex flex-col flex-grow">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">
                                                {product.tag || "MANDO EXCLUSIVE"}
                                            </span>
                                            <h3 className="text-sm font-semibold text-zinc-900 mb-1.5 line-clamp-1">
                                                {product.name}
                                            </h3>
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="text-sm font-bold text-black">
                                                    {product.price.toLocaleString("vi-VN")}đ
                                                </span>
                                            </div>
                                            <button className="w-full bg-black text-white text-[11px] font-bold uppercase py-3 tracking-widest transition hover:bg-zinc-800 mt-auto">
                                                Xem chi tiết
                                            </button>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        )}
                    </main>

                </div>
            </div>
        </div>
    );
}
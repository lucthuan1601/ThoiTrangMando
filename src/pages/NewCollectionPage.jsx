// function NewCollectionPage() {
//     return <div className="min-h-[60vh] p-6">Trang Bộ sưu tập mới</div>;
// }

// export default NewCollectionPage;

import React, { useState } from "react";
// Import mảng NEW_COLLECTION vừa được tạo từ file dữ liệu
import { NEW_COLLECTION } from "@/data/product"; 

function NewCollectionPage() {
    // State quản lý thanh kéo lọc giá bộ sưu tập (mức cao nhất đặt 2.5M phù hợp với áo Coat cao cấp)
    const [priceRange, setPriceRange] = useState(500000);

    return (
        <div className="bg-white min-h-screen font-sans">
            <div className="max-w-[1440px] mx-auto px-6 py-4">
                
                {/* 1. BREADCRUMB (Đường dẫn trang) */}
                <div className="text-xs text-zinc-500 mb-6 flex items-center gap-1">
                    <span>Trang chủ</span> 
                    <span className="text-[10px] text-zinc-400">&gt;&gt;</span> 
                    <span className="text-black font-semibold">Bộ sưu tập mới</span>
                </div>

                {/* 2. THÂN TRANG: BỘ LỌC BÊN TRÁI & LƯỚI SẢN PHẨM BÊN PHẢI */}
                <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 items-start">
                    
                    {/* KHUNG BỘ LỌC TÌM KIẾM */}
                    <aside className="sticky top-4">
                        <h2 className="text-lg font-bold uppercase tracking-wider mb-6 text-black border-b pb-2 border-zinc-100">
                            Bộ lọc
                        </h2>

                        {/* BỘ LỌC MÀU SẮC (Thiết kế vuông bo góc nhẹ theo yêu cầu) */}
                        <div className="mb-6 pb-6 border-b border-zinc-200">
                            <h3 className="text-xs font-bold uppercase tracking-wider mb-3 text-zinc-800">Màu sắc</h3>
                            <div className="flex flex-wrap gap-2">
                                {/* Ô vuông màu Trắng bo góc có tích chọn */}
                                <button className="w-6 h-6 rounded border border-zinc-400 bg-white flex items-center justify-center relative hover:border-black transition-colors">
                                    <span className="text-[9px] text-black font-bold">✓</span>
                                </button>
                                {/* Các ô vuông màu trơn tối giản khác */}
                                <button className="w-6 h-6 rounded bg-black hover:opacity-80 transition-opacity" />
                                <button className="w-6 h-6 rounded bg-[#5c7294] hover:opacity-80 transition-opacity" />
                                <button className="w-6 h-6 rounded bg-[#cbe0ff] hover:opacity-80 transition-opacity" />
                                <button className="w-6 h-6 rounded bg-[#dbdbdb] hover:opacity-80 transition-opacity" />
                            </div>
                        </div>

                        {/* BỘ LỌC KÍCH THƯỚC */}
                        <div className="mb-6 pb-6 border-b border-zinc-200">
                            <h3 className="text-xs font-bold uppercase tracking-wider mb-3 text-zinc-800">Kích thước</h3>
                            <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                                <label className="flex items-center gap-2 text-xs text-zinc-700 cursor-pointer select-none">
                                    <input type="checkbox" className="w-4 h-4 accent-black rounded border-zinc-300" />
                                    <span>M</span>
                                </label>
                                <label className="flex items-center gap-2 text-xs text-black font-bold cursor-pointer select-none">
                                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-black rounded border-zinc-300" />
                                    <span>L</span>
                                </label>
                                <label className="flex items-center gap-2 text-xs text-zinc-700 cursor-pointer select-none">
                                    <input type="checkbox" className="w-4 h-4 accent-black rounded border-zinc-300" />
                                    <span>XL</span>
                                </label>
                                <label className="flex items-center gap-2 text-xs text-zinc-700 cursor-pointer select-none">
                                    <input type="checkbox" className="w-4 h-4 accent-black rounded border-zinc-300" />
                                    <span>XXL</span>
                                </label>
                            </div>
                        </div>

                        {/* BỘ LỌC KHOẢNG GIÁ */}
                        <div className="mb-6">
                            <h3 className="text-xs font-bold uppercase tracking-wider mb-3 text-zinc-800">Khoảng giá</h3>
                            <input 
                                type="range" 
                                min="500000" 
                                max="2500000" 
                                value={priceRange}
                                onChange={(e) => setPriceRange(Number(e.target.value))}
                                className="w-full h-1 bg-black rounded-lg appearance-none cursor-pointer accent-black" 
                            />
                            <div className="flex justify-between items-center mt-2 text-[11px] font-medium text-zinc-500">
                                <span>500.000đ</span>
                                <span>2.500.000đ</span>
                            </div>
                        </div>
                    </aside>

                    {/* KHU VỰC HIỂN THỊ LƯỚI BỘ SƯU TẬP (MAIN) */}
                    <main>
                        {/* Thanh lọc phụ Sắp xếp */}
                        <div className="flex justify-end items-center mb-6 border-b border-zinc-100 pb-2">
                            <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider cursor-pointer text-zinc-800 hover:text-black">
                                <span>Sắp xếp</span>
                                <span className="text-[9px] font-light">▼</span>
                            </div>
                        </div>

                        {/* Lưới hiển thị danh sách sản phẩm Lookbook (3 cột) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
                            {NEW_COLLECTION.map((product) => (
                                <div key={product.id} className="group flex flex-col">
                                    
                                    {/* Khung ảnh sản phẩm thời trang cao cấp */}
                                    <div className="relative overflow-hidden bg-[#f9f9f9] h-[430px]">
                                        {product.isPremiumBadge && (
                                            <span className="absolute left-3 top-3 bg-black text-[9px] font-bold text-white px-2 py-1 tracking-widest uppercase z-10">
                                                Premium
                                            </span>
                                        )}
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-102"
                                        />
                                    </div>

                                    {/* Khối thông tin chi tiết */}
                                    <div className="mt-4 flex flex-col flex-grow">
                                        {/* Tag bộ sưu tập */}
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">
                                            {product.tag}
                                        </span>
                                        
                                        {/* Tên sản phẩm */}
                                        <h3 className="text-sm font-semibold text-zinc-900 mb-1.5 line-clamp-1 group-hover:text-zinc-600 transition-colors">
                                            {product.name}
                                        </h3>
                                        
                                        {/* Giá tiền */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-sm font-bold text-black">
                                                {product.price.toLocaleString("vi-VN")}đ
                                            </span>
                                            {product.originalPrice && (
                                                <span className="text-xs text-zinc-400 line-through">
                                                    {product.originalPrice.toLocaleString("vi-VN")}đ
                                                </span>
                                            )}
                                        </div>

                                        {/* Nút hành động xem chi tiết */}
                                        <button className="w-full bg-black text-white text-[11px] font-bold uppercase py-3.5 tracking-widest transition hover:bg-zinc-800 mt-auto">
                                            Xem chi tiết
                                        </button>
                                    </div>

                                </div>
                            ))}
                        </div>

                        {/* THANH PHÂN TRANG (PAGINATION) */}
                        <div className="flex justify-center items-center gap-1.5 mt-16 mb-8">
                            <button className="w-8 h-8 flex items-center justify-center border border-zinc-200 text-zinc-400 text-xs hover:border-black transition-colors">&lt;</button>
                            <button className="w-8 h-8 flex items-center justify-center bg-black text-white text-xs font-bold">1</button>
                            <button className="w-8 h-8 flex items-center justify-center border border-zinc-200 text-zinc-600 text-xs hover:border-black transition-colors">2</button>
                            <button className="w-8 h-8 flex items-center justify-center border border-zinc-200 text-zinc-600 text-xs hover:border-black transition-colors">3</button>
                            <button className="w-8 h-8 flex items-center justify-center border border-zinc-200 text-zinc-600 text-xs hover:border-black transition-colors">&gt;</button>
                        </div>
                    </main>

                </div>
            </div>
        </div>
    );
}

export default NewCollectionPage;
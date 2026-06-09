// function AccessoriesPage() {
//     return <div className="min-h-[60vh] p-6">Trang Phụ kiện</div>;
// }

// export default AccessoriesPage;

import React, { useState } from "react";
import { ACCESSORIES } from "@/data/product"; 

function AccessoriesPage() {
    const [priceRange, setPriceRange] = useState(200000);

    return (
        <div className="bg-white min-h-screen font-sans">
            <div className="max-w-[1440px] mx-auto px-6 py-4">
                
                {/* 1. ĐƯỜNG DẪN BREADCRUMB */}
                <div className="text-xs text-zinc-500 mb-6 flex items-center gap-1">
                    <span>Trang chủ</span> 
                    <span className="text-[10px] text-zinc-400">&gt;&gt;</span> 
                    <span className="text-black font-semibold">Phụ kiện</span>
                </div>

                {/* 2. LAYOUT CHÍNH */}
                <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 items-start">
                    
                    {/* BỘ LỌC SIDEBAR */}
                    <aside className="sticky top-4">
                        <h2 className="text-lg font-bold uppercase tracking-wider mb-6 text-black border-b pb-2 border-zinc-100">
                            Bộ lọc
                        </h2>

                        {/* MÀU SẮC (Ô vuông bo góc) */}
                        <div className="mb-6 pb-6 border-b border-zinc-200">
                            <h3 className="text-xs font-bold uppercase tracking-wider mb-3 text-zinc-800">Màu sắc</h3>
                            <div className="flex flex-wrap gap-2">
                                <button className="w-6 h-6 rounded border border-zinc-400 bg-white flex items-center justify-center relative hover:border-black transition-colors">
                                    <span className="text-[9px] text-black font-bold">✓</span>
                                </button>
                                <button className="w-6 h-6 rounded bg-black hover:opacity-80 transition-opacity" />
                                <button className="w-6 h-6 rounded bg-[#5c7294] hover:opacity-80 transition-opacity" />
                                <button className="w-6 h-6 rounded bg-[#cbe0ff] hover:opacity-80 transition-opacity" />
                                <button className="w-6 h-6 rounded bg-[#dbdbdb] hover:opacity-80 transition-opacity" />
                            </div>
                        </div>

                        {/* KÍCH THƯỚC */}
                        <div className="mb-6 pb-6 border-b border-zinc-200">
                            <h3 className="text-xs font-bold uppercase tracking-wider mb-3 text-zinc-800">Kích thước</h3>
                            <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                                <label className="flex items-center gap-2 text-xs text-zinc-700 cursor-pointer select-none">
                                    <input type="checkbox" className="w-4 h-4 accent-black rounded border-zinc-300" />
                                    <span>Free Size</span>
                                </label>
                                <label className="flex items-center gap-2 text-xs text-black font-bold cursor-pointer select-none">
                                    <input type="checkbox" defaultChecked className="w-4 h-4 accent-black rounded border-zinc-300" />
                                    <span>Standard</span>
                                </label>
                            </div>
                        </div>

                        {/* LỌC THEO KHOẢNG GIÁ */}
                        <div className="mb-6">
                            <h3 className="text-xs font-bold uppercase tracking-wider mb-3 text-zinc-800">Khoảng giá</h3>
                            <input 
                                type="range" 
                                min="200000" 
                                max="1500000" 
                                value={priceRange}
                                onChange={(e) => setPriceRange(Number(e.target.value))}
                                className="w-full h-1 bg-black rounded-lg appearance-none cursor-pointer accent-black" 
                            />
                            <div className="flex justify-between items-center mt-2 text-[11px] font-medium text-zinc-500">
                                <span>200.000đ</span>
                                <span>1.500.000đ</span>
                            </div>
                        </div>
                    </aside>

                    {/* KHU VỰC HIỂN THỊ LƯỚI PHỤ KIỆN */}
                    <main>
                        <div className="flex justify-end items-center mb-6 border-b border-zinc-100 pb-2">
                            <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider cursor-pointer text-zinc-800 hover:text-black">
                                <span>Sắp xếp</span>
                                <span className="text-[9px] font-light">▼</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
                            {ACCESSORIES.map((product) => (
                                <div key={product.id} className="group flex flex-col">
                                    
                                    {/* Khung ảnh phụ kiện bo vuông sạch sẽ */}
                                    <div className="relative overflow-hidden bg-[#f9f9f9] flex items-center justify-center h-[430px]">
                                        {product.isPremiumBadge && (
                                            <span className="absolute left-3 top-3 bg-black text-[9px] font-bold text-white px-2 py-1 tracking-widest uppercase z-10">
                                                Premium
                                            </span>
                                        )}
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-102"
                                        />
                                    </div>

                                    {/* Chi tiết văn bản */}
                                    <div className="mt-4 flex flex-col flex-grow">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">
                                            {product.tag}
                                        </span>
                                        
                                        <h3 className="text-sm font-semibold text-zinc-900 mb-1.5 line-clamp-1 group-hover:text-zinc-600 transition-colors">
                                            {product.name}
                                        </h3>
                                        
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

                                        <button className="w-full bg-black text-white text-[11px] font-bold uppercase py-3.5 tracking-widest transition hover:bg-zinc-800 mt-auto">
                                            Xem chi tiết
                                        </button>
                                    </div>

                                </div>
                            ))}
                        </div>

                        {/* PHÂN TRANG */}
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

export default AccessoriesPage;
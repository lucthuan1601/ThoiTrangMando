// src/pages/CartPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/specific/CartItem";
import CartSummary from "../components/specific/CartSummary";

const CartPage = () => {
  const { cartItems, totalItemsCount } = useCart();

  // TRƯỜNG HỢP 1: GIỎ HÀNG TRỐNG (Hiển thị theo ảnh mẫu mới của bạn)
  if (cartItems.length === 0) {
    return (
      <div className="w-full min-h-[500px] flex flex-col items-center justify-center font-sans px-4">
        {/* Chữ GIỎ HÀNG CỦA BẠN ĐANG TRỐNG viết hoa, font đậm */}
        <h2 className="text-[28px] font-bold tracking-wide text-black mb-8 uppercase text-center">
          Giỏ hàng của bạn đang trống
        </h2>

        {/* Nút MUA NGAY màu đỏ, chữ trắng, bo góc nhẹ và căn giữa */}
        <Link
          to="/shop"
          className="bg-[#FF3B3B] text-white font-bold text-sm tracking-widest px-14 py-4 uppercase transition-all duration-200 hover:bg-red-600 hover:shadow-md text-center"
        >
          Mua ngay
        </Link>
      </div>
    );
  }

  // TRƯỜNG HỢP 2: GIỎ HÀNG CÓ SẢN PHẨM (Giữ nguyên layout 2 cột)
  return (
    <div className="max-w-[1200px] mx-auto my-10 px-6 font-sans">
      {/* Tiêu đề trang */}
      <h2 className="text-xl font-bold tracking-wide mb-8 uppercase text-black">
        GIỎ HÀNG CỦA BẠN ({totalItemsCount} SẢN PHẨM)
      </h2>

      {/* Cấu trúc chia Layout 2 cột bằng Flexbox */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Bên trái: Bảng danh sách sản phẩm (Chiếm 70% chiều rộng) */}
        <div className="w-full lg:w-[70%]">
          {/* Thanh tiêu đề cột */}
          <div className="flex pb-2.5 border-b border-zinc-200 text-[11px] font-bold text-zinc-400 tracking-wider">
            <div className="w-2/5">SẢN PHẨM</div>
            <div className="w-1/5 text-center">ĐƠN GIÁ</div>
            <div className="w-1/5 text-center">SỐ LƯỢNG</div>
            <div className="w-1/5 text-right">TỔNG</div>
          </div>

          {/* Vòng lặp in sản phẩm */}
          <div className="flex flex-col">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Nút quay lại mua sắm */}
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-black hover:text-zinc-600 transition-colors uppercase tracking-tight"
          >
            <span className="text-base">←</span> Tiếp tục mua sắm
          </Link>
        </div>

        {/* Bên phải: Tóm tắt đơn hàng */}
        <div className="w-full lg:w-[30%] lg:sticky lg:top-6">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;

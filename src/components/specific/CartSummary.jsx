// src/components/specific/CartSummary.jsx
import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { formatCurrency } from "../../utils/formatCurrency";

const CartSummary = () => {
  const { cartSubtotal, cartTotal, appliedVoucher, setAppliedVoucher } =
    useCart();
  const [voucherInput, setVoucherInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Hàm xử lý khi nhấn nút ÁP DỤNG
  const handleApplyVoucher = () => {
    setErrorMessage(""); // Reset thông báo lỗi cũ
    const cleanInput = voucherInput.trim().toUpperCase();

    if (!cleanInput) {
      setErrorMessage("Vui lòng nhập mã voucher.");
      setAppliedVoucher(null);
      return;
    }

    // Kiểm tra mã voucher chuẩn theo ảnh mẫu
    if (cleanInput === "MANDOSINHVIEN") {
      setAppliedVoucher({
        code: "MANDOSINHVIEN",
        discount: 50000,
        message: "Mã hợp lệ: Đã giảm 50.000đ",
      });
    } else {
      // Nếu nhập bất kỳ mã nào khác (ví dụ: MANDO) -> Báo lỗi đỏ
      setErrorMessage("Rất tiếc! Không thể tìm thấy mã voucher này.");
      setAppliedVoucher(null);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="border border-zinc-200 p-6 bg-white">
        <h3 className="text-lg font-bold tracking-wide mb-6 text-black">
          TÓM TẮT ĐƠN HÀNG
        </h3>

        {/* Tạm tính */}
        <div className="flex justify-between mb-4 text-sm text-zinc-700">
          <span>Tạm tính</span>
          <span>{formatCurrency(cartSubtotal)}đ</span>
        </div>

        {/* Phí vận chuyển */}
        <div className="flex justify-between pb-5 border-b border-zinc-200 text-sm text-zinc-700">
          <span>Phí vận chuyển</span>
          <span className="font-semibold text-zinc-500 uppercase">
            MIỄN PHÍ
          </span>
        </div>

        {/* Ô Nhập Mã giảm giá */}
        <div className="mt-5">
          <label className="block text-[11px] font-bold text-zinc-600 mb-2 tracking-widest uppercase">
            MÃ GIẢM GIÁ
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="NHẬP VOUCHER"
              value={voucherInput}
              onChange={(e) => setVoucherInput(e.target.value)}
              className="flex-1 border border-zinc-300 p-2.5 text-sm outline-none focus:border-black placeholder-zinc-400 uppercase font-medium"
            />
            <button
              onClick={handleApplyVoucher}
              className="bg-black text-white px-5 text-xs font-bold tracking-widest hover:bg-zinc-800 transition-colors uppercase whitespace-nowrap"
            >
              Áp
              <br />
              dụng
            </button>
          </div>

          {/* TRƯỜNG HỢP 1: Hiện thông báo LỖI MÀU ĐỎ (Khi nhập sai) */}
          {errorMessage && (
            <div className="flex items-center gap-1.5 mt-2.5 text-xs font-medium text-[#FF2424]">
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {errorMessage}
            </div>
          )}

          {/* TRƯỜNG HỢP 2: Hiện thông báo THÀNH CÔNG MÀU XANH (Khi nhập đúng MANDOSINHVIEN) */}
          {appliedVoucher && (
            <div className="flex items-center gap-1.5 mt-2.5 text-xs font-medium text-[#00B074]">
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {appliedVoucher.message}
            </div>
          )}
        </div>

        {/* Tổng cộng tiền sau giảm giá */}
        <div className="flex justify-between items-center mt-8 mb-5 font-bold">
          <span className="text-sm text-black tracking-wide">TỔNG CỘNG</span>
          <span className="text-2xl text-black font-extrabold tracking-tight">
            {formatCurrency(cartTotal)}đ
          </span>
        </div>

        {/* Nút tiến hành thanh toán */}
        <button className="w-full bg-black text-white py-4 text-sm font-bold tracking-widest hover:bg-zinc-900 transition-colors uppercase">
          Tiến hành thanh toán
        </button>
      </div>

      {/* Khối bảo mật dưới cùng */}
      <div className="border border-zinc-200 bg-zinc-50 p-4 flex gap-3 items-center">
        <div className="text-black flex-shrink-0">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
        <p className="text-xs text-zinc-600 leading-relaxed">
          MANDO đảm bảo thanh toán an toàn và bảo mật cho mọi giao dịch.
        </p>
      </div>
    </div>
  );
};

export default CartSummary;

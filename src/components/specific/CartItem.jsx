// src/components/specific/CartItem.jsx
import React from "react";
import { useCart } from "../../context/CartContext";
import { formatCurrency } from "../../utils/formatCurrency";

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center py-6 border-b border-zinc-200">
      {/* Cột 1: Thông tin sản phẩm (Chiếm 40% chiều rộng) */}
      <div className="w-2/5 flex gap-5">
        <img
          src={item.image}
          alt={item.name}
          className="w-[90px] h-[110px] object-cover border border-zinc-100"
        />
        <div className="flex flex-col justify-between py-1">
          <div>
            <h4 className="text-[16px] font-semibold text-black leading-tight mb-1">
              {item.name}
            </h4>
            <p className="text-sm text-zinc-500">Màu sắc: {item.color}</p>
            <p className="text-sm text-zinc-500">Size: {item.size}</p>
          </div>
          <button
            className="flex items-center gap-1 text-[11px] font-bold text-red-600 uppercase tracking-wider hover:text-red-800 transition-colors mt-2"
            onClick={() => removeItem(item.id)}
          >
            {/* Icon Thùng rác chữ XÓA màu đỏ đúng tiêu chuẩn */}
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            XÓA
          </button>
        </div>
      </div>

      {/* Cột 2: Đơn giá (Chiếm 20% chiều rộng) */}
      <div className="w-1/5 text-center text-sm font-medium text-zinc-800">
        {formatCurrency(item.price)}đ
      </div>

      {/* Cột 3: Số lượng với nút tăng giảm - 1 + (Chiếm 20% chiều rộng) */}
      <div className="w-1/5 flex justify-center">
        <div className="flex items-center border border-zinc-300 h-9">
          <button
            className="w-8 h-full flex items-center justify-center text-lg hover:bg-zinc-50 active:bg-zinc-100"
            onClick={() => updateQuantity(item.id, -1)}
          >
            -
          </button>
          <span className="w-10 text-center text-sm font-medium">
            {item.quantity}
          </span>
          <button
            className="w-8 h-full flex items-center justify-center text-lg hover:bg-zinc-50 active:bg-zinc-100"
            onClick={() => updateQuantity(item.id, 1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Cột 4: Tổng tiền của dòng đó (Chiếm 20% chiều rộng) */}
      <div className="w-1/5 text-right text-[16px] font-bold text-black">
        {formatCurrency(item.price * item.quantity)}đ
      </div>
    </div>
  );
};

export default CartItem;
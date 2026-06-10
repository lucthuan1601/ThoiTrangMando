// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from "react";
import { initialCart } from "../data/mockCart";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialCart);
  // Lưu thông tin voucher đang được áp dụng (nếu có)
  const [appliedVoucher, setAppliedVoucher] = useState(null);

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      }),
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalItemsCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );
  const cartSubtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  // LOGIC TÍNH TỔNG TIỀN SAU GIẢM GIÁ
  const discountAmount = appliedVoucher ? appliedVoucher.discount : 0;
  // Tổng cộng cuối cùng = Tạm tính - Số tiền giảm (Nếu tổng âm thì gán bằng 0)
  const cartTotal = Math.max(0, cartSubtotal - discountAmount);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        updateQuantity,
        removeItem,
        totalItemsCount,
        cartSubtotal,
        cartTotal, // Tổng tiền cuối cùng sau giảm giá
        appliedVoucher, // Voucher hiện tại đang dùng
        setAppliedVoucher, // Hàm để kích hoạt voucher
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

import React, { createContext, useContext, useState } from "react";
import { mockOrders } from "../data/mockOrders";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(mockOrders);

  const cancelOrder = (orderId) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: "da_huy" } : o))
    );
  };

  const submitReview = (orderId, rating, review) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId ? { ...o, status: "da_danh_gia", rating, review } : o
      )
    );
  };

  return (
    <OrderContext.Provider value={{ orders, cancelOrder, submitReview }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);

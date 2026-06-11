import CancelOrderModal from "@/components/specific/CancelOrderModal";
import ReviewModal from "@/components/specific/ReviewModal";
import { PRODUCTS } from "@/data/product";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const sidebarStyle = {
  width: 220,
  minHeight: "100vh",
  background: "#fff",
  borderRight: "1px solid #e5e7eb",
  padding: "24px 0",
  display: "flex",
  flexDirection: "column",
  gap: 0,
};

const avatarBoxStyle = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  padding: "0 20px 20px 20px",
  borderBottom: "1px solid #e5e7eb",
  marginBottom: 8,
};

const avatarStyle = {
  width: 44,
  height: 44,
  borderRadius: "50%",
  background: "#222",
  overflow: "hidden",
  flexShrink: 0,
};

const sidebarMenuStyle = (active) => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
  padding: "11px 20px",
  cursor: "pointer",
  background: active ? "#111" : "transparent",
  color: active ? "#fff" : "#222",
  fontWeight: active ? 600 : 400,
  fontSize: 14,
  borderRadius: 0,
  textDecoration: "none",
  userSelect: "none",
});

const tabsData = [
  "Tất cả",
  "Chờ xác nhận",
  "Đang giao",
  "Đã nhận",
  "Đã đánh giá",
  "Đã hủy"
];


const suggestedProducts = PRODUCTS.slice(0, 4);

const OrdersPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Tất cả");
  const [currentPage, setCurrentPage] = useState(1);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState(() => {
      return JSON.parse(
          localStorage.getItem("mando_orders") || "[]"
      );
  });
 console.log("Orders:", orders);
useEffect(() => {
  setCurrentPage(1);
}, [activeTab]);

const handleReviewSubmit = (orderId, rating, review) => {
  const updatedOrders = orders.map((order) =>
    order.id === orderId
      ? {
          ...order,
          status: "da_danh_gia",
          rating,
          review,
          reviewedAt: new Date().toISOString(),
        }
      : order
  );

  setOrders(updatedOrders);

  localStorage.setItem(
    "mando_orders",
    JSON.stringify(updatedOrders)
  );
};
const handleCancelConfirm = (id, reason, note) => {
    const updatedOrders = orders.map((order) =>
        order.id === id
            ? {
                  ...order,
                  status: "da_huy",
                  cancelReason: reason,
                  cancelNote: note,
                  cancelledAt: new Date().toISOString(),
              }
            : order
    );

    setOrders(updatedOrders);

    localStorage.setItem(
        "mando_orders",
        JSON.stringify(updatedOrders)
    );
};
const handleCancelOrder = (orderId) => {
  const updatedOrders = orders.map((order) =>
    order.id === orderId
      ? {
          ...order,
          status: "da_huy",
        }
      : order
  );

  setOrders(updatedOrders);

  localStorage.setItem(
    "mando_orders",
    JSON.stringify(updatedOrders)
  );
};

  const filteredOrders =
  activeTab === "Tất cả"
    ? orders
    : orders.filter((order) => {
        switch (activeTab) {
          case "Chờ xác nhận":
            return order.status === "cho_xac_nhan";

          case "Đang giao":
            return order.status === "dang_giao";

          case "Đã nhận":
            return order.status === "da_nhan";

          case "Đánh giá":
            return order.status === "cho_danh_gia";
          case "Đã hủy":
            return order.status === "da_huy";
          case "Đã đánh giá":
            return order.status === "da_danh_gia";
          default:
            return true;
        }
      });

       const ordersPerPage = 3;

const totalPages = Math.max(
  1,
  Math.ceil(filteredOrders.length / ordersPerPage)
);

const startIndex = (currentPage - 1) * ordersPerPage;
const endIndex = startIndex + ordersPerPage;

const currentOrders = filteredOrders.slice(
  startIndex,
  endIndex
);
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f3f4f6",
        fontFamily: "sans-serif",
      }}
    >
      {/* Sidebar */}
      <aside style={sidebarStyle}>
        <div style={avatarBoxStyle}>
          <div style={avatarStyle}>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="avatar"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#111" }}>
              Lê Minh Quân
            </div>
            <div style={{ fontSize: 12, color: "#6b7280" }}>Thành viên Bdc</div>
          </div>
        </div>

        <div style={{ padding: "8px 0" }}>
          <div style={sidebarMenuStyle(false)} onClick={() => navigate("/account")} >
            <span style={{ fontSize: 16 }}></span>
            Thông tin tài khoản
          </div>
          <div style={sidebarMenuStyle(true)}>
            <span style={{ fontSize: 16 }}></span>
            Đơn hàng của tôi
          </div>
          <div style={sidebarMenuStyle(false)}>
            <span style={{ fontSize: 16 }}></span>
            Đổi mật khẩu
          </div>
          <div
            style={{
              ...sidebarMenuStyle(false),
              color: "#ef4444",
              marginTop: 4,
            }}
          >
            <span style={{ fontSize: 16 }}>↪️</span>
            Đăng xuất
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: "32px 36px" }}>
        <h2
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#111",
            marginBottom: 24,
            letterSpacing: 0.5,
          }}
        >
          QUẢN LÝ ĐƠN HÀNG CỦA TÔI
        </h2>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: 0,
            borderBottom: "1px solid #e5e7eb",
            marginBottom: 24,
          }}
        >
          {tabsData.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: "none",
                border: "none",
                borderBottom:
                  activeTab === tab
                    ? "2px solid #111"
                    : "2px solid transparent",
                padding: "10px 20px",
                fontWeight: activeTab === tab ? 700 : 400,
                fontSize: 14,
                color: activeTab === tab ? "#111" : "#6b7280",
                cursor: "pointer",
                marginBottom: -1,
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Orders */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {currentOrders.map((order) => (
            <div
              key={order.id}
              style={{
                background: "#fff",
                borderRadius: 8,
                overflow: "hidden",
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}
            >
              {/* Order header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 20px",
                  borderBottom: "1px solid #f3f4f6",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      background: "#eff6ff",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                    }}
                  >
                    {order.icon}
                  </div>
                  <div>
                    <div
                      style={{ fontWeight: 700, fontSize: 14, color: "#111" }}
                    >
                      ĐƠN HÀNG #{order.id}
                    </div>
                    <div style={{ fontSize: 12, color: "#9ca3af" }}>
                      {order.date}
                    </div>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#374151",
                    background: "#f3f4f6",
                    borderRadius: 20,
                    padding: "4px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#6b7280",
                      display: "inline-block",
                    }}
                  />
                  {order.status}
                </span>
              </div>

              {/* Order product */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 20px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <img
                    src={order.items?.[0]?.image}
                    alt={order.items?.[0]?.name}
                    style={{
                      width: 90,
                      height: 90,
                      objectFit: "cover",
                      borderRadius: 6,
                      background: "#f3f4f6",
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: 15,
                        color: "#111",
                        marginBottom: 4,
                      }}
                    >
                      {order.items?.[0]?.name}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "#9ca3af",
                        marginBottom: 10,
                      }}
                    >
                      Size: {order.items?.[0]?.size} |
                      Số lượng: {order.items?.[0]?.quantity}  
                    </div>
                    <div
                      style={{ fontWeight: 700, fontSize: 15, color: "#111" }}
                    >
                      {order.total?.toLocaleString()}đ
                    </div>
                  </div>
                </div>
                {order.status === "cho_xac_nhan" && (
                  <button
                    onClick={() => {
                      setSelectedOrder(order);
                      setShowCancelModal(true);
                    }}
                    style={{
                      border: "1px solid #d1d5db",
                      background: "#fff",
                      borderRadius: 6,
                      padding: "8px 20px",
                      fontSize: 13,
                      color: "#374151",
                      cursor: "pointer",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Huỷ đơn hàng
                  </button>
                )}

                {order.status === "da_nhan" && (
                <button
                  onClick={() => {
                    setSelectedOrder(order);
                    setShowReviewModal(true);
                  }}
                  style={{
                    border: "none",
                    background: "#111",
                    color: "#fff",
                    borderRadius: 6,
                    padding: "8px 20px",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  Đánh giá
                </button>
              )}
              {order.status === "da_danh_gia" && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: "#f59e0b",
                  fontWeight: 600,
                }}
              >
                {"★".repeat(order.rating || 0)}
                {"☆".repeat(5 - (order.rating || 0))}

                <span
                  style={{
                    color: "#16a34a",
                    marginLeft: 8,
                  }}
                >
                  Đã đánh giá
                </span>
              </div>
            )}
              </div>
            </div>
          ))}
        </div>

       {showCancelModal && selectedOrder && (
            <CancelOrderModal
                order={selectedOrder}
                onClose={() => {
                    setShowCancelModal(false);
                    setSelectedOrder(null);
                }}
                onConfirm={handleCancelConfirm}
            />
        )}

        {showReviewModal && selectedOrder && (
          <ReviewModal
            order={selectedOrder}
            onClose={() => {
              setShowReviewModal(false);
              setSelectedOrder(null);
            }}
            onSubmit={handleReviewSubmit}
          />
        )}
        {/* Pagination */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
            marginTop: 28,
          }}
        >
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            style={paginationBtnStyle(false)}
          >
            ‹
          </button>
          {Array.from(
            { length: totalPages },
            (_, i) => i + 1
          ).map((p) => (
            <button
              key={p}
              onClick={() => setCurrentPage(p)}
              style={paginationBtnStyle(currentPage === p)}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            style={paginationBtnStyle(false)}
          >
            ›
          </button>
        </div>

        {/* Suggested products */}
        <div style={{ marginTop: 40 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#9ca3af",
              letterSpacing: 1,
              marginBottom: 16,
            }}
          >
            CÓ THỂ BẠN QUAN TÂM
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {suggestedProducts.map((prod) => (
              <div
                onClick={() => navigate(`/product/${prod.id}`)}
                key={prod.item?.name}
                style={{
                  background: "#fff",
                  borderRadius: 8,
                  overflow: "hidden",
                  width: 180,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.07)",
                  cursor: "pointer",
                }}
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  style={{
                    width: "100%",
                    height: 220,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div style={{ padding: "12px 12px 14px" }}>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#111",
                      marginBottom: 4,
                    }}
                  >
                    {prod.name}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#111" }}>
                    {prod.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

const paginationBtnStyle = (active) => ({
  width: 34,
  height: 34,
  border: "1px solid #d1d5db",
  borderRadius: 4,
  background: active ? "#111" : "#fff",
  color: active ? "#fff" : "#374151",
  fontWeight: active ? 700 : 400,
  fontSize: 14,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default OrdersPage;
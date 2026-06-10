// src/pages/OrdersPage.jsx
import React, { useState } from "react";

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

const tabsData = ["Tất cả", "Chờ xác nhận", "Đang giao", "Đã nhận", "Đánh giá"];

const ordersData = [
  {
    id: "MD1024",
    date: "Đặt ngày 12 tháng 10, 2024",
    status: "CHỜ XÁC NHẬN",
    statusColor: "#6b7280",
    icon: "🚚",
    product: "Áo Sơ Mi Cotton Basic - Trắng",
    size: "L",
    qty: 1,
    price: "330.000đ",
    img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=120&h=120&fit=crop&auto=format",
  },
  {
    id: "MD1019",
    date: "Đặt ngày 05 tháng 10, 2024",
    status: "ĐANG GIAO",
    statusColor: "#6b7280",
    icon: "📦",
    product: "Quần Âu Relaxed Fit - Xanh Navy",
    size: "32",
    qty: 1,
    price: "550.000đ",
    img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=120&h=120&fit=crop&auto=format",
  },
];

const suggestedProducts = [
  {
    name: "Quần Tây Slim-fit Black",
    price: "450.000đ",
    img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=200&h=260&fit=crop&auto=format",
  },
  {
    name: "Blazer Casual Navy",
    price: "890.000đ",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=200&h=260&fit=crop&auto=format",
  },
];

const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState("Tất cả");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

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
          <div style={sidebarMenuStyle(false)}>
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
          {ordersData.map((order) => (
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
                    src={order.img}
                    alt={order.product}
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
                      {order.product}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "#9ca3af",
                        marginBottom: 10,
                      }}
                    >
                      Size: {order.size} | Số lượng: {order.qty}
                    </div>
                    <div
                      style={{ fontWeight: 700, fontSize: 15, color: "#111" }}
                    >
                      {order.price}
                    </div>
                  </div>
                </div>
                <button
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
              </div>
            </div>
          ))}
        </div>

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
          {[1, 2, 3].map((p) => (
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
                key={prod.name}
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
                  src={prod.img}
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

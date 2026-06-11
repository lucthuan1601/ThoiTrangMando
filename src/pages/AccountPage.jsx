import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const sidebarStyle = {
  width: 220,
  minHeight: "100vh",
  background: "#fff",
  borderRight: "1px solid #e5e7eb",
  padding: "24px 0",
  display: "flex",
  flexDirection: "column",
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

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  fontSize: "14px",
  outline: "none",
};

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  fontWeight: 600,
  color: "#374151",
};

const AccountPage = () => {
  const [gender, setGender] = useState("Nam");
  const navigate = useNavigate();
  return (
    <div
      style={{
        background: "#f8f9fa",
        minHeight: "100vh",
        padding: "",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "flex-start",
        }}
      >
        {/* Sidebar */}
        <aside style={sidebarStyle}>
          <div style={avatarBoxStyle}>
            <div style={avatarStyle}>
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "15px",
                }}
              >
                Lê Minh Quân
              </div>

              <div
                style={{
                  fontSize: "12px",
                  color: "#6b7280",
                }}
              >
                Thành viên Bdc
              </div>
            </div>
          </div>

          <div style={{ padding: "8px 0" }}>
            <div style={sidebarMenuStyle(true)}>
                <span style={{ fontSize: 16 }}></span>
                Thông tin tài khoản
            </div>

            <div
                style={sidebarMenuStyle(false)}
                onClick={() => navigate("/orders")}
            >
                <span style={{ fontSize: 16 }}></span>
                Đơn hàng của tôi
            </div>

            <div style={sidebarMenuStyle(false)}>
                <span style={{ fontSize: 16 }}></span>
                Đổi mật khẩu</div>

            <div
              style={{
                borderTop: "1px solid #e5e7eb",
                marginTop: "10px",
                paddingTop: "10px",
              }}
            >
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
          </div>
        </aside>

        {/* Content */}
        <div
          style={{
            flex: 1,
            background: "#fff",
            border: "1px solid #e5e7eb",
            padding: "32px",
            minHeight: "600px",
          }}
        >
          <h2
            style={{
              margin: 0,
              marginBottom: "32px",
              fontWeight: 700,
            }}
          >
            THÔNG TIN TÀI KHOẢN
          </h2>

          {/* Họ tên + SĐT */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <div>
              <label style={labelStyle}>Họ và tên</label>
              <input
                type="text"
                placeholder="Nhập họ và tên"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Số điện thoại</label>
              <input
                type="text"
                placeholder="Nhập số điện thoại"
                style={inputStyle}
              />
            </div>
          </div>

          {/* Email */}
          <div style={{ marginBottom: "20px" }}>
            <label style={labelStyle}>Email</label>
            <input type="email" placeholder="Nhập email" style={inputStyle} />
          </div>

          {/* Ngày sinh + Giới tính */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "20px",
              alignItems: "end",
            }}
          >
            <div>
              <label style={labelStyle}>Ngày sinh</label>
              <input type="date" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>Giới tính</label>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                }}
              >
                <label
                  style={{
                    border:
                      gender === "Nam" ? "2px solid #000" : "1px solid #d1d5db",
                    borderRadius: "8px",
                    padding: "10px 18px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={gender === "Nam"}
                    onChange={() => setGender("Nam")}
                  />
                  Nam
                </label>

                <label
                  style={{
                    border:
                      gender === "Nữ" ? "2px solid #000" : "1px solid #d1d5db",
                    borderRadius: "8px",
                    padding: "10px 18px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={gender === "Nữ"}
                    onChange={() => setGender("Nữ")}
                  />
                  Nữ
                </label>

                <label
                  style={{
                    border:
                      gender === "Khác"
                        ? "2px solid #000"
                        : "1px solid #d1d5db",
                    borderRadius: "8px",
                    padding: "10px 18px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={gender === "Khác"}
                    onChange={() => setGender("Khác")}
                  />
                  Khác
                </label>
              </div>
            </div>
          </div>

          {/* Nút cập nhật */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button
              style={{
                background: "#000",
                color: "#fff",
                border: "none",
                padding: "12px 28px",
                borderRadius: "8px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Lưu thay đổi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
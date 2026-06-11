import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {
      key: "profile",
      path: "/profile",
      label: "Thông tin tài khoản",
      icon: (
        <svg
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      key: "orders",
      path: "/orders",
      label: "Đơn hàng của tôi",
      icon: (
        <svg
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
    },
    {
      key: "password",
      path: "/password",
      label: "Đổi mật khẩu",
      icon: (
        <svg
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar__user">
        <div className="sidebar__avatar">
          <img src="https://i.pravatar.cc/80?img=11" alt="Lê Minh Quân" />
        </div>
        <div>
          <p className="sidebar__name">Lê Minh Quân</p>
          <p className="sidebar__tier">Thành viên Bạc</p>
        </div>
      </div>
      <div className="sidebar__divider" />
      <nav className="sidebar__nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.key}
            to={item.path}
            className={({ isActive }) =>
              `sidebar__nav-item${isActive ? " sidebar__nav-item--active" : ""}`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
        <a href="#" className="sidebar__nav-item sidebar__logout">
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          <span>Đăng xuất</span>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;

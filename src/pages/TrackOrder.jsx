import { useState } from "react";

// ── Icons (inline SVG components) ─────────────────────────────────────────────
const CheckIcon = ({ color = "#fff", size = 14 }) => (
  <svg width={size} height={size * 0.76} viewBox="0 0 14 11" fill="none">
    <path
      d="M1 5L5.5 9.5L13 1"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const TruckIcon = ({ color = "#fff", size = 20 }) => (
  <svg width={size} height={size * 0.73} viewBox="0 0 20 15" fill="none">
    <path
      d="M1 1h11v9H1V1zM12 4h4l3 3v3h-7V4z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="4.5" cy="12.5" r="1.5" stroke={color} strokeWidth="1.5" />
    <circle cx="15.5" cy="12.5" r="1.5" stroke={color} strokeWidth="1.5" />
  </svg>
);
const BoxIcon = ({ color = "#fff", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path
      d="M8 1L15 4.5V11.5L8 15L1 11.5V4.5L8 1Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M1 4.5L8 8L15 4.5" stroke={color} strokeWidth="1.5" />
    <path d="M8 8V15" stroke={color} strokeWidth="1.5" />
  </svg>
);
const HomeIcon = ({ color = "#fff", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path
      d="M2 7L8 2L14 7V14H10V10H6V14H2V7Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);
const SearchIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
    <circle cx="8" cy="8" r="5.5" stroke="#191C1E" strokeWidth="1.5" />
    <path
      d="M12.5 12.5L16 16"
      stroke="#191C1E"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const BagIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <path
      d="M5 7h10l-1.5 9H6.5L5 7z"
      stroke="#191C1E"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M7 7V5a3 3 0 016 0v2" stroke="#191C1E" strokeWidth="1.5" />
  </svg>
);
const UserIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="7" r="3.5" stroke="#000" strokeWidth="1.5" />
    <path
      d="M2 18c0-4 3.6-7 8-7s8 3 8 7"
      stroke="#000"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const MenuIcon = ({ size = 16 }) => (
  <svg width={size} height={size * 1.25} viewBox="0 0 16 20" fill="none">
    <path
      d="M1 4h14M1 10h14M1 16h14"
      stroke="#191C1E"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const PrintIcon = ({ size = 20 }) => (
  <svg width={size} height={size * 0.9} viewBox="0 0 20 18" fill="none">
    <path
      d="M5 5V1h10v4"
      stroke="#000"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M1 6h18v8H1V6z" stroke="#000" strokeWidth="1.5" />
    <path d="M5 11h10v6H5V11z" stroke="#000" strokeWidth="1.5" />
  </svg>
);
const CardIcon = ({ size = 22 }) => (
  <svg width={size} height={size * 0.73} viewBox="0 0 22 16" fill="none">
    <rect
      x="1"
      y="1"
      width="20"
      height="14"
      rx="2"
      stroke="#000"
      strokeWidth="1.5"
    />
    <path d="M1 5h20" stroke="#000" strokeWidth="1.5" />
    <rect x="3" y="8" width="5" height="2" rx="1" fill="#000" />
  </svg>
);
const ProfileIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="5" r="3" stroke="#45464D" strokeWidth="1.5" />
    <path
      d="M1 15c0-3.5 3-6 7-6s7 2.5 7 6"
      stroke="#45464D"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const LockIcon = ({ size = 16 }) => (
  <svg width={size} height={size * 1.31} viewBox="0 0 16 21" fill="none">
    <rect
      x="1"
      y="9"
      width="14"
      height="11"
      rx="2"
      stroke="#45464D"
      strokeWidth="1.5"
    />
    <path d="M4 9V6a4 4 0 018 0v3" stroke="#45464D" strokeWidth="1.5" />
  </svg>
);
const LogoutIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
    <path
      d="M7 2H2v14h5"
      stroke="#BA1A1A"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 6l4 3-4 3"
      stroke="#BA1A1A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 9H7"
      stroke="#BA1A1A"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// ── Data ───────────────────────────────────────────────────────────────────────
const STEPS = [
  { label: "Đặt hàng", icon: <CheckIcon /> },
  { label: "Xác nhận", icon: <CheckIcon /> },
  { label: "Vận chuyển", icon: <TruckIcon size={16} /> },
  { label: "Giao hàng", icon: <HomeIcon size={14} /> },
];
const CURRENT_STEP = 2; // 0-indexed

// ── Sub-components ─────────────────────────────────────────────────────────────
function NavBar() {
  return (
    <header style={styles.header}>
      <div style={styles.headerInner}>
        {/* Left: Logo + Nav */}
        <div style={styles.headerLeft}>
          <span style={styles.logo}>MANDO</span>
          <nav style={styles.nav}>
            {["Áo", "Quần", "Phụ kiện", "Bộ sưu tập mới"].map((item) => (
              <a key={item} href="#" style={styles.navLink}>
                {item}
              </a>
            ))}
          </nav>
        </div>
        {/* Right: Actions */}
        <div style={styles.headerRight}>
          <button style={styles.iconBtn}>
            <SearchIcon />
          </button>
          <button style={{ ...styles.iconBtn, position: "relative" }}>
            <BagIcon />
            <span style={styles.badge}>1</span>
          </button>
          <button
            style={{
              ...styles.iconBtn,
              borderBottom: "2px solid #000",
              borderRadius: 0,
            }}
          >
            <UserIcon />
          </button>
          <button style={styles.iconBtn}>
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.sidebarCard}>
        {/* Avatar + name */}
        <div style={styles.sidebarProfile}>
          <div style={styles.avatar}>
            <div style={styles.avatarInner} />
          </div>
          <div>
            <p style={styles.profileName}>Lê Minh Quân</p>
            <p style={styles.profileMeta}>Thành viên</p>
          </div>
        </div>
        {/* Nav links */}
        <nav style={styles.sidebarNav}>
          <a href="#" style={styles.sidebarLink}>
            <ProfileIcon /> <span>Thông tin tài khoản</span>
          </a>
          <a
            href="#"
            style={{ ...styles.sidebarLink, ...styles.sidebarLinkActive }}
          >
            <TruckIcon color="#fff" size={16} />{" "}
            <span style={{ color: "#fff", fontWeight: 700 }}>
              Theo dõi đơn hàng
            </span>
          </a>
          <a href="#" style={styles.sidebarLink}>
            <LockIcon /> <span>Đổi mật khẩu</span>
          </a>
          <a
            href="#"
            style={{
              ...styles.sidebarLink,
              borderTop: "1px solid #C6C6CD",
              marginTop: 4,
            }}
          >
            <LogoutIcon /> <span style={{ color: "#BA1A1A" }}>Đăng xuất</span>
          </a>
        </nav>
      </div>
    </aside>
  );
}

function ProgressBar() {
  return (
    <div style={styles.progressWrap}>
      <div style={styles.progressInner}>
        {/* Background track */}
        <div style={styles.trackBg} />
        {/* Filled track up to current step */}
        <div
          style={{
            ...styles.trackFill,
            right: `${((STEPS.length - 1 - CURRENT_STEP) / (STEPS.length - 1)) * 100}%`,
          }}
        />
        {/* Steps */}
        {STEPS.map((step, i) => {
          const done = i < CURRENT_STEP;
          const active = i === CURRENT_STEP;
          const pending = i > CURRENT_STEP;
          return (
            <div key={step.label} style={styles.stepCol}>
              <div
                style={{
                  ...styles.stepDot,
                  background: pending ? "#C6C6CD" : "#000",
                  width: active ? 44 : 40,
                  height: active ? 44 : 40,
                  boxShadow: active
                    ? "0 10px 15px -3px rgba(0,0,0,.12), 0 4px 6px -4px rgba(0,0,0,.1)"
                    : "0 1px 2px rgba(0,0,0,.05)",
                  border: "4px solid #F2F4F6",
                }}
              >
                {step.icon}
              </div>
              <span
                style={{
                  ...styles.stepLabel,
                  fontWeight: active ? 700 : 400,
                  color: pending ? "#45464D" : "#000",
                }}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProductList() {
  return (
    <div style={styles.productCard}>
      <div style={styles.cardHeading}>Sản phẩm</div>
      <div style={styles.productRow}>
        <div style={styles.productImg}>
          {/* placeholder swatch */}
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg,#e8e8e8,#d0d0d0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BoxIcon color="#aaa" size={32} />
          </div>
        </div>
        <div style={styles.productMeta}>
          <div>
            <p style={styles.productName}>Áo Sơ Mi Oxford Trắng</p>
            <p style={styles.productDetail}>
              Size: L &nbsp;|&nbsp; Số lượng: 1
            </p>
          </div>
          <p style={styles.productPrice}>550.000đ</p>
        </div>
      </div>
    </div>
  );
}

function OrderSummary() {
  return (
    <div style={styles.summaryCard}>
      <div style={styles.summaryRow}>
        <span style={styles.summaryLabel}>Tạm tính</span>
        <span style={styles.summaryValue}>550.000đ</span>
      </div>
      <div style={styles.summaryRow}>
        <span style={styles.summaryLabel}>Phí vận chuyển</span>
        <span style={styles.summaryValue}>Miễn phí</span>
      </div>
      <div
        style={{
          ...styles.summaryRow,
          borderTop: "1px solid #C6C6CD",
          paddingTop: 12,
          marginTop: 4,
          alignItems: "flex-end",
        }}
      >
        <span style={{ ...styles.summaryLabel, color: "#000" }}>Tổng cộng</span>
        <span style={styles.summaryTotal}>550.000đ</span>
      </div>
    </div>
  );
}

function ShippingInfo() {
  return (
    <div style={styles.infoCard}>
      <p style={styles.infoHeading}>Giao nhận</p>
      <div style={styles.infoGroup}>
        <p style={styles.infoLabel}>NGƯỜI NHẬN</p>
        <p style={styles.infoValue}>Lê Minh Quân</p>
      </div>
      <div style={styles.infoGroup}>
        <p style={styles.infoLabel}>ĐỊA CHỈ</p>
        <p style={styles.infoValue}>
          123 Đường Nguyễn Huệ, Quận 1,
          <br />
          TP. Hồ Chí Minh
        </p>
      </div>
      <div style={styles.infoGroup}>
        <p style={styles.infoLabel}>SỐ ĐIỆN THOẠI</p>
        <p style={styles.infoValue}>090 1234 567</p>
      </div>
    </div>
  );
}

function PaymentInfo() {
  return (
    <div style={styles.infoCard}>
      <p style={styles.infoHeading}>Thanh toán</p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <CardIcon />
        <div>
          <p style={{ ...styles.infoValue, marginBottom: 2 }}>Visa **** 4242</p>
          <p style={{ ...styles.summaryLabel, fontSize: 14, color: "#45464D" }}>
            Thanh toán khi nhận hàng
          </p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerGrid}>
        <div style={styles.footerCol}>
          <p style={styles.footerBrand}>MANDO</p>
          <p style={styles.footerTagline}>
            Trang phục dành cho phái mạnh hiện đại. Tinh tế trong từng đường
            nét, chất lượng trong từng sợi vải.
          </p>
        </div>
        <div style={styles.footerCol}>
          <p style={styles.footerColTitle}>VỀ CHÚNG TÔI</p>
          <a href="#" style={styles.footerLink}>
            Hệ thống cửa hàng
          </a>
          <a href="#" style={styles.footerLink}>
            Liên hệ
          </a>
        </div>
        <div style={styles.footerCol}>
          <p style={styles.footerColTitle}>CHÍNH SÁCH</p>
          <a href="#" style={styles.footerLink}>
            Chính sách đổi trả
          </a>
          <a href="#" style={styles.footerLink}>
            Chính sách bảo mật
          </a>
          <a href="#" style={styles.footerLink}>
            Hướng dẫn chọn size
          </a>
        </div>
        <div style={styles.footerCol}>
          <p style={styles.footerColTitle}>ĐĂNG KÝ BẢN TIN</p>
          <div style={styles.newsletterRow}>
            <input placeholder="Email của bạn" style={styles.newsletterInput} />
            <button style={styles.newsletterBtn}>Gửi</button>
          </div>
          <p style={{ ...styles.footerTagline, marginTop: 16, opacity: 0.7 }}>
            © 2024 MANDO FASHION. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function TrackOrder() {
  const [cancelled, setCancelled] = useState(false);

  return (
    <div style={styles.page}>
      <NavBar />

      <main style={styles.main}>
        <Sidebar />

        <section style={styles.content}>
          {/* Order Header */}
          <div style={styles.orderHeader}>
            <div>
              <div style={styles.orderMeta}>
                <span style={styles.statusBadge}>Vận chuyển</span>
                <span style={styles.orderDate}>Ngày đặt: 15/10/2024</span>
              </div>
              <h1 style={styles.orderTitle}>Mã đơn #MD1024</h1>
            </div>
            <button style={styles.printBtn}>
              <PrintIcon />
              <span>In đơn hàng</span>
            </button>
          </div>

          {/* Progress */}
          <ProgressBar />

          {/* Grid: products + sidebar */}
          <div style={styles.gridLayout}>
            {/* Left column */}
            <div style={styles.leftCol}>
              <ProductList />
              <OrderSummary />
              {!cancelled ? (
                <button
                  style={styles.cancelBtn}
                  onClick={() => setCancelled(true)}
                >
                  Huỷ đơn hàng
                </button>
              ) : (
                <p style={{ color: "#BA1A1A", fontSize: 14, marginTop: 8 }}>
                  Đơn hàng đã được yêu cầu huỷ.
                </p>
              )}
            </div>

            {/* Right column */}
            <div style={styles.rightCol}>
              <ShippingInfo />
              <PaymentInfo />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// ── Styles ─────────────────────────────────────────────────────────────────────
const styles = {
  page: {
    fontFamily: "'Hanken Grotesk', 'Inter', sans-serif",
    background: "#F7F9FB",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },

  // Header
  header: {
    background: "#fff",
    borderBottom: "1px solid #C6C6CD",
    padding: "16px",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  headerInner: {
    maxWidth: 1248,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: { display: "flex", alignItems: "center", gap: 32 },
  logo: {
    fontWeight: 900,
    fontSize: 24,
    letterSpacing: -1.2,
    lineHeight: "32px",
    cursor: "pointer",
  },
  nav: { display: "flex", gap: 24 },
  navLink: {
    color: "#45464D",
    fontSize: 16,
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
  headerRight: { display: "flex", alignItems: "center", gap: 4 },
  iconBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 8,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    position: "absolute",
    top: 4,
    right: 4,
    background: "#000",
    color: "#fff",
    fontSize: 10,
    fontWeight: 700,
    width: 16,
    height: 16,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
  },

  // Layout
  main: {
    flex: 1,
    maxWidth: 1280,
    margin: "0 auto",
    width: "100%",
    display: "flex",
    gap: 32,
    padding: "32px 16px",
    boxSizing: "border-box",
  },

  // Sidebar
  sidebar: { width: 288, flexShrink: 0 },
  sidebarCard: {
    background: "#fff",
    border: "1px solid #C6C6CD",
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
  sidebarProfile: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    paddingBottom: 24,
    borderBottom: "1px solid #C6C6CD",
  },
  avatar: {
    width: 48,
    height: 48,
    background: "#E6E8EA",
    borderRadius: 12,
    overflow: "hidden",
    flexShrink: 0,
  },
  avatarInner: {
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg,#d0d0d0,#b0b0b0)",
  },
  profileName: {
    fontSize: 20,
    fontWeight: 600,
    color: "#191C1E",
    margin: 0,
    lineHeight: "28px",
  },
  profileMeta: {
    fontSize: 12,
    fontWeight: 600,
    color: "#45464D",
    margin: 0,
    lineHeight: "16px",
  },
  sidebarNav: { display: "flex", flexDirection: "column", gap: 4 },
  sidebarLink: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 16px",
    textDecoration: "none",
    color: "#45464D",
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 0.14,
    borderRadius: 4,
  },
  sidebarLinkActive: { background: "#000", borderRadius: 4 },

  // Main content
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 32,
    minWidth: 0,
    padding: "8px 0 40px",
  },

  // Order Header
  orderHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  orderMeta: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 8,
  },
  statusBadge: {
    background: "#D0E1FB",
    color: "#54647A",
    fontSize: 12,
    fontWeight: 600,
    padding: "4px 12px",
    borderRadius: 12,
  },
  orderDate: { fontSize: 16, color: "#45464D" },
  orderTitle: {
    fontSize: 48,
    fontWeight: 700,
    letterSpacing: -0.96,
    color: "#191C1E",
    margin: 0,
    lineHeight: "56px",
  },
  printBtn: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    border: "1px solid #000",
    background: "none",
    padding: "0 24px",
    height: 48,
    cursor: "pointer",
    fontSize: 16,
    color: "#000",
    whiteSpace: "nowrap",
  },

  // Progress
  progressWrap: {
    background: "#F2F4F6",
    border: "1px solid #C6C6CD",
    borderRadius: 8,
    padding: "32px",
  },
  progressInner: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  trackBg: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 4,
    background: "#C6C6CD",
    top: "calc(50% - 20px)",
    zIndex: 0,
  },
  trackFill: {
    position: "absolute",
    left: 0,
    height: 4,
    background: "#000",
    top: "calc(50% - 20px)",
    zIndex: 1,
  },
  stepCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    zIndex: 2,
    position: "relative",
  },
  stepDot: {
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "all .2s",
  },
  stepLabel: { fontSize: 16, lineHeight: "24px", whiteSpace: "nowrap" },

  // Grid
  gridLayout: {
    display: "flex",
    gap: 24,
    alignItems: "flex-start",
  },
  leftCol: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 24,
    minWidth: 0,
  },
  rightCol: {
    width: 252,
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },

  // Product card
  productCard: {
    background: "#fff",
    border: "1px solid #C6C6CD",
    borderRadius: 8,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
  cardHeading: {
    fontSize: 20,
    fontWeight: 600,
    color: "#191C1E",
    paddingBottom: 16,
    borderBottom: "1px solid #C6C6CD",
  },
  productRow: { display: "flex", gap: 24, alignItems: "center" },
  productImg: {
    width: 96,
    height: 128,
    background: "#ECEEF0",
    border: "1px solid #C6C6CD",
    flexShrink: 0,
    overflow: "hidden",
  },
  productMeta: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productName: { fontSize: 18, color: "#000", margin: "0 0 4px 0" },
  productDetail: { fontSize: 16, color: "#45464D", margin: 0 },
  productPrice: { fontSize: 16, color: "#000", margin: 0, textAlign: "right" },

  // Summary
  summaryCard: {
    background: "#F2F4F6",
    border: "1px solid #C6C6CD",
    borderRadius: 8,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  summaryLabel: { fontSize: 16, color: "#45464D" },
  summaryValue: { fontSize: 16, color: "#45464D" },
  summaryTotal: { fontSize: 24, fontWeight: 600, color: "#000" },

  // Cancel button
  cancelBtn: {
    border: "1px solid #000",
    background: "none",
    padding: "0 24px",
    height: 48,
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 0.14,
    alignSelf: "flex-start",
  },

  // Info cards
  infoCard: {
    background: "#fff",
    border: "1px solid #C6C6CD",
    borderRadius: 8,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  infoHeading: { fontSize: 20, fontWeight: 600, color: "#191C1E", margin: 0 },
  infoGroup: { display: "flex", flexDirection: "column", gap: 4 },
  infoLabel: {
    fontSize: 13,
    fontWeight: 500,
    color: "#45464D",
    letterSpacing: 0.8,
    textTransform: "uppercase",
    margin: 0,
  },
  infoValue: { fontSize: 16, color: "#000", margin: 0, lineHeight: "26px" },

  // Footer
  footer: {
    background: "#F2F4F6",
    borderTop: "1px solid #C6C6CD",
  },
  footerGrid: {
    maxWidth: 1280,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 32,
    padding: "48px 16px 32px",
  },
  footerCol: { display: "flex", flexDirection: "column", gap: 12 },
  footerBrand: { fontSize: 16, fontWeight: 700, color: "#000", margin: 0 },
  footerTagline: {
    fontSize: 16,
    color: "#45464D",
    lineHeight: "24px",
    margin: 0,
  },
  footerColTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#000",
    margin: 0,
    textTransform: "uppercase",
  },
  footerLink: {
    fontSize: 16,
    color: "#45464D",
    textDecoration: "none",
    lineHeight: "24px",
  },
  newsletterRow: { display: "flex" },
  newsletterInput: {
    flex: 1,
    border: "1px solid #C6C6CD",
    borderRight: "none",
    padding: "9px 8px",
    fontSize: 16,
    color: "#000",
    outline: "none",
    background: "#fff",
  },
  newsletterBtn: {
    background: "#000",
    color: "#fff",
    border: "none",
    padding: "0 16px",
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
  },
};

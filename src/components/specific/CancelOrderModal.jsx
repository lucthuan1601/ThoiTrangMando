import React from "react";

const order = {
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
};

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalStyle = {
  width: "min(560px, calc(100% - 32px))",
  maxHeight: "90vh",
  overflowY: "auto",
  background: "#fff",
  borderRadius: 20,
  padding: "24px",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.2)",
};

const CancelOrderModal = ({ onClose }) => {
  return (
    <div style={overlayStyle} className="modal-overlay" onClick={onClose}>
      <div
        style={modalStyle}
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="modal__header">
          <h3>Chi tiết đơn hàng</h3>
          <button className="modal__close" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* ORDER INFO */}
        <div className="order-detail">
          <div className="order-detail__top">
            <div>
              <p className="order-detail__id">Đơn hàng #{order.id}</p>
              <p className="order-detail__date">{order.date}</p>
            </div>

            <span
              className="order-detail__status"
              style={{ color: order.statusColor }}
            >
              {order.icon} {order.status}
            </span>
          </div>

          <hr />

          {/* PRODUCT */}
          <div className="order-detail__product">
            <img src={order.img} alt={order.product} />

            <div className="order-detail__info">
              <p className="order-detail__name">{order.product}</p>
              <p className="order-detail__meta">
                Size: <b>{order.size}</b> • SL: <b>{order.qty}</b>
              </p>
              <p className="order-detail__price">{order.price}</p>
            </div>
          </div>

          <hr />

          {/* SUMMARY */}
          <div className="order-detail__summary">
            <div className="row">
              <span>Tạm tính</span>
              <span>{order.price}</span>
            </div>

            <div className="row">
              <span>Phí vận chuyển</span>
              <span>Miễn phí</span>
            </div>

            <div className="row total">
              <span>Tổng cộng</span>
              <span>{order.price}</span>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="modal__footer">
          <button className="btn btn--ghost" onClick={onClose}>
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelOrderModal;

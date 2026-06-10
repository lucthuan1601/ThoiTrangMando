import React, { useState } from "react";
import { ORDER_STATUS } from "../../utils/orderStatus";
import { formatCurrency, formatDate } from "../../utils/formatCurrency";
import CancelOrderModal from "../specific/CancelOrderModal";
import ReviewModal from "../specific/ReviewModal";

const OrderCard = ({ order, onCancel, onReview }) => {
  const [showCancel, setShowCancel] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const status = ORDER_STATUS[order.status] || ORDER_STATUS.cho_xac_nhan;

  const handleCancelConfirm = (id, reason, note) => {
    onCancel(id, reason, note);
    setTimeout(() => setShowCancel(false), 1500);
  };

  const handleReviewSubmit = (id, rating, review) => {
    onReview(id, rating, review);
    setTimeout(() => setShowReview(false), 1500);
  };

  return (
    <>
      <div className="order-card">
        <div className="order-card__header">
          <div className="order-card__id-row">
            <div className="order-card__icon">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                {order.status === "dang_giao" ? (
                  <><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>
                ) : (
                  <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>
                )}
              </svg>
            </div>
            <div>
              <p className="order-card__id">ĐƠN HÀNG #{order.id}</p>
              <p className="order-card__date">Đặt ngày {formatDate(order.date)}</p>
            </div>
          </div>
          <span
            className="order-card__status"
            style={{ color: status.color, backgroundColor: status.bg }}
          >
            <span className="order-card__status-dot" style={{ background: status.dot }} />
            {status.label.toUpperCase()}
          </span>
        </div>

        <div className="order-card__divider" />

        <div className="order-card__items">
          {(expanded ? order.items : order.items.slice(0, 1)).map((item) => (
            <div key={item.id} className="order-card__item">
              <img
                src={item.image}
                alt={item.name}
                className="order-card__item-img"
              />
              <div className="order-card__item-info">
                <p className="order-card__item-name">{item.name}</p>
                <p className="order-card__item-meta">
                  Size: {item.size} | Số lượng: {item.quantity}
                </p>
                <p className="order-card__item-price">{formatCurrency(item.price * item.quantity)}</p>
              </div>
            </div>
          ))}
          {order.items.length > 1 && (
            <button
              className="order-card__expand"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded
                ? "Thu gọn"
                : `+ ${order.items.length - 1} sản phẩm khác`}
            </button>
          )}
        </div>

        {order.items.length > 1 && (
          <div className="order-card__total">
            Tổng cộng: <strong>{formatCurrency(order.total)}</strong>
          </div>
        )}

        <div className="order-card__actions">
          {order.status === "da_danh_gia" && order.rating && (
            <div className="order-card__reviewed">
              <span>{"★".repeat(order.rating)}{"☆".repeat(5 - order.rating)}</span>
              <span>Đã đánh giá</span>
            </div>
          )}
          {order.status === "cho_danh_gia" && (
            <button
              className="btn btn--primary"
              onClick={() => setShowReview(true)}
            >
              Đánh giá
            </button>
          )}
          {status.canCancel && (
            <button
              className="btn btn--outline"
              onClick={() => setShowCancel(true)}
            >
              Huỷ đơn hàng
            </button>
          )}
          {order.status === "dang_giao" && (
            <button className="btn btn--outline btn--disabled" disabled>
              Huỷ đơn hàng
            </button>
          )}
        </div>
      </div>

      {showCancel && (
        <CancelOrderModal
          order={order}
          onClose={() => setShowCancel(false)}
          onConfirm={handleCancelConfirm}
        />
      )}
      {showReview && (
        <ReviewModal
          order={order}
          onClose={() => setShowReview(false)}
          onSubmit={handleReviewSubmit}
        />
      )}
    </>
  );
};

export default OrderCard;

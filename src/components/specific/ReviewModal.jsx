import React, { useState } from "react";
import { formatCurrency } from "../../utils/formatCurrency";

const StarRating = ({ value, onChange }) => {
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          className={`star ${star <= (hover || value) ? "star--active" : ""}`}
          onClick={() => onChange(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          aria-label={`${star} sao`}
        >
          ★
        </button>
      ))}
    </div>
  );
};

const ReviewModal = ({ order, onClose, onSubmit }) => {
  const [ratings, setRatings] = useState({});
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const allRated = order.items.every((item) => ratings[item.id]);

  const handleSubmit = () => {
    if (!allRated) return;
    const avgRating = Math.round(
      Object.values(ratings).reduce((a, b) => a + b, 0) / order.items.length
    );
    onSubmit(order.id, avgRating, review);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal__success">
            <div className="modal__success-icon">
              <svg width="40" height="40" fill="none" stroke="#16a34a" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h3>Cảm ơn đánh giá của bạn!</h3>
            <p>Phản hồi của bạn giúp MANDO cải thiện chất lượng sản phẩm và dịch vụ.</p>
            <button className="btn btn--primary" onClick={onClose}>Đóng</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal modal--review" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h3>Đánh giá sản phẩm</h3>
          <button className="modal__close" onClick={onClose}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <p className="modal__desc">Đơn hàng #{order.id} — {formatCurrency(order.total)}</p>

        <div className="review__items">
          {order.items.map((item) => (
            <div key={item.id} className="review__item">
              <img src={item.image} alt={item.name} />
              <div className="review__item-info">
                <p className="review__item-name">{item.name}</p>
                <p className="review__item-meta">Size {item.size} • {formatCurrency(item.price)}</p>
                <StarRating
                  value={ratings[item.id] || 0}
                  onChange={(v) => setRatings((prev) => ({ ...prev, [item.id]: v }))}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="modal__field">
          <label className="modal__label">NHẬN XÉT <span className="modal__optional">(KHÔNG BẮT BUỘC)</span></label>
          <textarea
            className="modal__textarea"
            placeholder="Chia sẻ trải nghiệm của bạn về sản phẩm..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows={3}
          />
        </div>

        <button
          className={`btn btn--primary btn--full ${!allRated ? "btn--disabled" : ""}`}
          onClick={handleSubmit}
          disabled={!allRated}
        >
          GỬI ĐÁNH GIÁ
        </button>
        <button className="btn btn--ghost btn--full" onClick={onClose}>HỦY</button>
      </div>
    </div>
  );
};

export default ReviewModal;

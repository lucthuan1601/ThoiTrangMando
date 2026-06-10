import React, { useState } from "react";
import { cancelReasons } from "../../data/mockOrders";
import { formatCurrency } from "../../utils/formatCurrency";

const CancelOrderModal = ({ order, onClose, onConfirm }) => {
  const [reason, setReason] = useState("");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleConfirm = () => {
    if (!reason) return;
    onConfirm(order.id, reason, note);
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
            <h3>Đã hủy đơn hàng</h3>
            <p>Đơn hàng #{order.id} đã được hủy thành công. Nếu bạn đã thanh toán, tiền sẽ được hoàn trong 3–5 ngày làm việc.</p>
            <button className="btn btn--primary" onClick={onClose}>Đóng</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h3>Hủy đơn hàng</h3>
          <button className="modal__close" onClick={onClose}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <p className="modal__desc">
          Chúng tôi rất tiếc khi bạn muốn hủy đơn hàng. Vui lòng cho MANDO biết lý do để chúng tôi có thể cải thiện dịch vụ.
        </p>

        <div className="modal__field">
          <label className="modal__label">LÝ DO HỦY ĐƠN</label>
          <div className="select-wrapper">
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className={`modal__select ${!reason ? "modal__select--placeholder" : ""}`}
            >
              <option value="" disabled>Chọn lý do</option>
              {cancelReasons.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            <svg className="select-chevron" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
        </div>

        <div className="modal__field">
          <label className="modal__label">GHI CHÚ THÊM <span className="modal__optional">(KHÔNG BẮT BUỘC)</span></label>
          <textarea
            className="modal__textarea"
            placeholder="Nhập thông tin chi tiết..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={4}
          />
        </div>

        <div className="modal__order-preview">
          <img src={order.items[0]?.image} alt={order.items[0]?.name} />
          <div>
            <p className="modal__order-id">Đơn hàng #{order.id}</p>
            <p className="modal__order-meta">
              {order.items.length} sản phẩm • {formatCurrency(order.total)}
            </p>
          </div>
        </div>

        <button
          className={`btn btn--primary btn--full ${!reason ? "btn--disabled" : ""}`}
          onClick={handleConfirm}
          disabled={!reason}
        >
          XÁC NHẬN HỦY
        </button>
        <button className="btn btn--ghost btn--full" onClick={onClose}>
          QUAY LẠI
        </button>
      </div>
    </div>
  );
};

export default CancelOrderModal;

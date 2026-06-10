import React, { useState } from "react";
import { useOrders } from "../context/OrderContext";
import { TAB_FILTERS } from "../utils/orderStatus";
import OrderCard from "../components/common/OrderCard";
import ProductCard from "../components/common/ProductCard";
import { suggestedProducts } from "../data/mockOrders";

const Orders = () => {
  const { orders, cancelOrder, submitReview } = useOrders();
  const [activeTab, setActiveTab] = useState("tat_ca");
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 3;

  const filtered = activeTab === "tat_ca"
    ? orders
    : orders.filter((o) => o.status === activeTab);

  const totalPages = Math.ceil(filtered.length / ordersPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
  );

  const handleTabChange = (key) => {
    setActiveTab(key);
    setCurrentPage(1);
  };

  return (
    <main className="orders-page">
      <h1 className="orders-page__title">QUẢN LÝ ĐƠN HÀNG CỦA TÔI</h1>

      {/* Tabs */}
      <div className="orders-tabs">
        {TAB_FILTERS.map((tab) => {
          const count = tab.key === "tat_ca"
            ? orders.length
            : orders.filter((o) => o.status === tab.key).length;
          return (
            <button
              key={tab.key}
              className={`orders-tab ${activeTab === tab.key ? "orders-tab--active" : ""}`}
              onClick={() => handleTabChange(tab.key)}
            >
              {tab.label}
              {count > 0 && tab.key !== "tat_ca" && (
                <span className="orders-tab__count">{count}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Order list */}
      <div className="orders-list">
        {paginated.length === 0 ? (
          <div className="orders-empty">
            <svg width="48" height="48" fill="none" stroke="#ccc" strokeWidth="1.5" viewBox="0 0 24 24">
              <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
            </svg>
            <p>Không có đơn hàng nào</p>
          </div>
        ) : (
          paginated.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              onCancel={cancelOrder}
              onReview={submitReview}
            />
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination__btn"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`pagination__btn ${currentPage === page ? "pagination__btn--active" : ""}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="pagination__btn"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      )}

      {/* Suggestions */}
      <section className="suggestions">
        <h2 className="suggestions__title">CÓ THỂ BẠN QUAN TÂM</h2>
        <div className="suggestions__grid">
          {suggestedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Orders;

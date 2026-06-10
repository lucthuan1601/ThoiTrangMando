import React from "react";
import { formatCurrency } from "../../utils/formatCurrency";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card__image-wrap">
        <img src={product.image} alt={product.name} className="product-card__image" />
        <button className="product-card__wishlist" aria-label="Thêm vào yêu thích">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div className="product-card__info">
        <p className="product-card__name">{product.name}</p>
        <p className="product-card__price">{formatCurrency(product.price)}</p>
      </div>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onAddToCart, isFirstTimeUser, calculateDiscount }) => {
  const finalPrice = calculateDiscount(product.price, product.discount);
  const totalDiscount = product.discount + (isFirstTimeUser ? 10 : 0);

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        {totalDiscount > 0 && (
          <span className="discount-badge">-{totalDiscount}%</span>
        )}
        <span className="product-type-badge">
          {product.type === 'natural' ? '🌱 Natural' : '📦 Packaged'}
        </span>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="price-container">
          {totalDiscount > 0 && (
            <span className="original-price">₹{product.price}</span>
          )}
          <span className="final-price">₹{finalPrice.toFixed(2)}</span>
        </div>
        <button onClick={() => onAddToCart(product)} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
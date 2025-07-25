import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import "react-datepicker/dist/react-datepicker.css";
import '../styles/Cart.css';

const Cart = ({ items, onClose, onUpdateQuantity, onRemoveItem, isFirstTimeUser, calculateDiscount }) => {
  const [deliveryDate, setDeliveryDate] = useState(null);
  const [isPreOrder, setIsPreOrder] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const hasNaturalProducts = items.some(item => item.type === 'natural');
  const hasPackagedProducts = items.some(item => item.type === 'packaged');

  const total = items.reduce((sum, item) => {
    const finalPrice = calculateDiscount(item.price, item.discount);
    return sum + finalPrice * item.quantity;
  }, 0);

  const handlePreOrderToggle = (checked) => {
    if (checked && hasPackagedProducts) {
      toast.warning("Pre-order is only available for natural products (meat, seafood, eggs, honey). Please remove packaged items to enable pre-order.", {
        position: "top-center",
        autoClose: 5000
      });
      return;
    }
    setIsPreOrder(checked);
  };

  const handleCheckout = () => {
    if (isPreOrder) {
      if (!deliveryDate) {
        toast.error('Please select a delivery date for pre-order');
        return;
      }
      if (hasPackagedProducts) {
        toast.error('Cannot pre-order packaged products. Please remove them from cart.');
        return;
      }
    }

    const message = isPreOrder 
      ? 'Thank you for your pre-order! Your items will be delivered on ${deliveryDate.toLocaleDateString()}'
      : 'Thank you for your order!';

    setCheckoutMessage(message);
    setIsModalOpen(true);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    window.location.reload(); // Reload the page after closing the modal
  };

  return (
    <div className="cart-sidebar">
      <div className="cart">
        <button onClick={onClose} className="close-cart-btn">×</button>
        <h2>Shopping Cart</h2>
        {items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {items.map((item) => {
              const finalPrice = calculateDiscount(item.price, item.discount);
              return (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <span className="item-type">{item.type === 'natural' ? '🌱 Natural Product' : '📦 Packaged'}</span>
                    <div className="price-info">
                      <span className="final-price">₹{finalPrice.toFixed(2)}</span>
                      {(item.discount > 0 || isFirstTimeUser) && (
                        <span className="original-price">₹{item.price}</span>
                      )}
                    </div>
                    <div className="quantity-controls">
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button onClick={() => onRemoveItem(item.id)} className="remove-btn">Remove</button>
                  </div>
                </div>
              );
            })}
            
            {hasNaturalProducts && (
              <div className="pre-order-section">
                <label className="pre-order-label">
                  <input
                    type="checkbox"
                    checked={isPreOrder}
                    onChange={(e) => handlePreOrderToggle(e.target.checked)}
                  /> 
                  <span>Pre-order Natural Products</span>
                </label>
                {isPreOrder && (
                  <DatePicker
                    selected={deliveryDate}
                    onChange={date => setDeliveryDate(date)}
                    minDate={new Date()}
                    placeholderText="Select delivery date"
                    className="date-picker"
                  />
                )}
              </div>
            )}

            <div className="cart-total">
              <h3>Total: ₹{total.toFixed(2)}</h3>
              {isFirstTimeUser && (
                <p className="first-time-discount">10% First Time User Discount Applied!</p>
              )}
              <button onClick={handleCheckout} className="checkout-btn">
                {isPreOrder ? 'Pre-order Now' : 'Checkout'}
              </button>
            </div>
          </>
        )}
      </div>

      {/* Custom Modal */}
      {isModalOpen && (
        <div className="custom-modal">
          <div className="modal-content">
            <h2>Order Confirmation</h2>
            <p>{checkoutMessage}</p>
            <button onClick={closeModal} className="close-modal-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
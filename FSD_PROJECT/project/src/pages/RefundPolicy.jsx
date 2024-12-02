import React from 'react';
import { Link } from 'react-router-dom';

const RefundPolicy = () => {
  return (
    <div className="policy-page">
      <h1>Refund Policy</h1>
      <div className="policy-content">
        <p>For items that are damaged upon delivery or lost during transit, please contact our customer support immediately. Refunds will be processed within 15 minutes of order delivery if the items are in unsatisfactory condition.</p>

        <h2>Refund Process</h2>
        <ul>
          <li>Contact customer support within 15 minutes of delivery</li>
          <li>Provide order details and reason for refund</li>
          <li>Submit photos of damaged items if applicable</li>
          <li>Refund will be processed to original payment method</li>
        </ul>

        <p>Our customer support team is available to assist you with immediate refund processing.</p>

        <div className="back-link">
          <Link to="/">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
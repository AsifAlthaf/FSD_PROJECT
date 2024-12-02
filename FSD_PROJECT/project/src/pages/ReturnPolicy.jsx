import React from 'react';
import { Link } from 'react-router-dom';

const ReturnPolicy = () => {
  return (
    <div className="policy-page">
      <h1>Return Policy</h1>
      <div className="policy-content">
        <p>We source our items from various vendors, and while we strive for excellence, we acknowledge that some products may not meet your expectations. We're committed to continuous improvement and welcome your feedback.</p>
        
        <h2>Return Guidelines</h2>
        <ul>
          <li>Inspect your items immediately upon delivery</li>
          <li>Report any issues within 15 minutes of delivery</li>
          <li>Keep original packaging when possible</li>
          <li>Take photos of damaged items for verification</li>
        </ul>

        <p>If you encounter any issues with your order, please don't hesitate to reach out to us through our customer support channels.</p>

        <div className="back-link">
          <Link to="/">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
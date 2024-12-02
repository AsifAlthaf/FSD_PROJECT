import React from 'react';
import '../styles/CategoryFilter.css';

const categories = [
  { id: 'all', label: 'All Items', icon: '🏪' },
  { id: 'vegetables', label: 'Vegetables', icon: '🥕' },
  { id: 'green-vegetables', label: 'Green Vegetables', icon: '🥬' },
  { id: 'fruits', label: 'Fruits', icon: '🍎' },
  { id: 'dairy', label: 'Dairy', icon: '🥛' },
  { id: 'meat', label: 'Meat', icon: '🍖' },
  { id: 'seafood', label: 'Seafood', icon: '🦐' },
  { id: 'natural', label: 'Natural Products', icon: '🍯' }
];

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="category-filter">
      {categories.map(category => (
        <button
          key={category.id}
          className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
          onClick={() => onCategoryChange(category.id)}
        >
          <span className="category-icon">{category.icon}</span>
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
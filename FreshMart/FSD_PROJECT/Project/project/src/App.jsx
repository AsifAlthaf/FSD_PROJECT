import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import Footer from './components/Footer';
import ReturnPolicy from './pages/ReturnPolicy';
import RefundPolicy from './pages/RefundPolicy';
import { groceryData } from './data/groceryData';
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.css';
import './styles/Policy.css';

function App() {
  const [products] = useState(groceryData);
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(() => {
    return !localStorage.getItem('returningUser');
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (isFirstTimeUser) {
      localStorage.setItem('returningUser', 'true');
    }
  }, [isFirstTimeUser]);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const calculateDiscount = (price, discount) => {
    const firstTimeDiscount = isFirstTimeUser ? 10 : 0;
    const totalDiscount = discount + firstTimeDiscount;
    return price * (1 - totalDiscount / 100);
  };

  return (
    <Router>
      <div className="app">
        <ToastContainer position="bottom-right" />
        <Routes>
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route
            path="/"
            element={
              <>
                <header>
                  <h1>Fresh Mart</h1>
                  <div className="header-right">
                    <button
                      className="cart-toggle"
                      onClick={() => setIsCartOpen(!isCartOpen)}
                    >
                      Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                    </button>
                  </div>
                </header>

                <main>
                  <div className="filters">
                    <SearchBar
                      searchTerm={searchTerm}
                      onSearchChange={setSearchTerm}
                    />
                    <CategoryFilter
                      selectedCategory={selectedCategory}
                      onCategoryChange={setSelectedCategory}
                    />
                  </div>

                  <p className="price-note">* All prices are per 500 grams *</p>

                  <div className="products-grid">
                    {filteredProducts.map(product => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                        calculateDiscount={calculateDiscount}
                        isFirstTimeUser={isFirstTimeUser}
                      />
                    ))}
                  </div>

                  {isCartOpen && (
                    <Cart
                      items={cartItems}
                      onClose={() => setIsCartOpen(false)}
                      onUpdateQuantity={handleUpdateQuantity}
                      onRemoveItem={handleRemoveItem}
                      calculateDiscount={calculateDiscount}
                      isFirstTimeUser={isFirstTimeUser}
                    />
                  )}
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
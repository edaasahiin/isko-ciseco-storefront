import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import SearchPanel from './components/SearchPanel';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <SearchPanel />
      <CartDrawer />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

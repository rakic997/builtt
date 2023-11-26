import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Products from './pages/Products';
import Cart from './pages/Cart';

import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
    <div className='content'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}    

export default App;
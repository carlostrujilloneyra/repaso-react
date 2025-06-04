import { Route, Routes } from 'react-router-dom';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { ProductPage } from '../pages/ProductPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';

export const PracticeRoutes = () => {
  const handleLogout = () => {
    localStorage.removeItem('isLogged');
    window.location.reload();
  };

  return (
    <>
      <nav className='navbar'>
        <p>Soy el Navbar</p>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </nav>

      <div>
        <Routes>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='products/:producId' element={<ProductDetailPage />} />
        </Routes>
      </div>
    </>
  );
};

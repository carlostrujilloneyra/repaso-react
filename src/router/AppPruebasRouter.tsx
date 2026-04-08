import { HomePage } from '@/pages/HomePage';
import { Link, Route, Routes } from 'react-router-dom';

export const AppPruebasRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/prueba' element={<span>Entrando a la ruta de prueba</span>} />
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<HomePage />} />

        <Route
          path='/products/:productId'
          element={<span>Entrando a la página individual del producto</span>}
        />

        {/* Ruta ESPECIAL */}
        <Route
          path='/heroes/*'
          element={
            <span>
              Entrando a la ruta <strong>especial</strong> de super-heroes{' '}
            </span>
          }
        />
      </Routes>
    </>
  );
};

const NotFound = () => {
  return <h2 className='text-4xl font-semibold'>Esta ruta no existe - 404</h2>;
};

const NavBar = () => {
  return (
    <nav className='w-1/2 p-2'>
      <ul className='flex gap-3 bg-blue-950 p-1 rounded-2xl justify-center text-white cursor-pointer'>
        <li>
          <Link to='/prueba'>About us</Link>
        </li>

        <li>Clients</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

import { Link } from 'react-router-dom';

export const ProductPage = () => {
  return (
    <>
      <span>Página de los productos</span>
      <Link to={`/products/kefir-de-leche`}>VER PRODUCTO</Link>
    </>
  );
};

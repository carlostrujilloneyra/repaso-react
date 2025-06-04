import { Outlet } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
      <span>Este es la página principal</span>

      <div className='container'>
        <Outlet />
      </div>
    </>
  );
};

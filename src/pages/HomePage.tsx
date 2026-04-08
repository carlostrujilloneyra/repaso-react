import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
      <div className='container-counter p-3'>
        <span>
          Estás en la página <strong>Home</strong>{' '}
        </span>

        <div className='my-2'>
          <Link
            to='/about'
            className='bg-blue-800 text-white cursor-pointer rounded-md p-1 font-bold'
          >
            Ir a About
          </Link>
        </div>
      </div>
    </>
  );
};

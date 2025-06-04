import { Navigate, Route, Routes } from 'react-router-dom';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { privateRoutes, publicRoutes } from '../routes/allRoutes';
import { LoggedLayout } from '../layouts/LoggedLayout';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<PublicRoutes />}>
          {publicRoutes.map(({ path, element }, i) => {
            return <Route key={i} path={path} element={element} />;
          })}
        </Route>

        <Route element={<PrivateRoutes />}>
          {privateRoutes.map(({ path, element }, i) => {
            return (
              <>
                <Route key={i} path={path} element={<LoggedLayout>{element}</LoggedLayout>} />
              </>
            );
          })}
        </Route>

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};

import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/Main';
import { Loans } from '../pages/Loans';
import { APP_ROUTES, getRoutePath } from './constants';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={getRoutePath(APP_ROUTES.LOANS)} element={<Loans />} />
        <Route path={getRoutePath(APP_ROUTES.LOAN_ACCOUNTS)} element={<Loans />} />
      </Route>
    </Routes>
  );
};

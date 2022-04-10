import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/Main';
import { LoanAccounts } from '../pages/LoanAccounts';
import { LoanDetailsPage } from '../pages/LoanDetailsPage';
import { Loans } from '../pages/Loans';
import { APP_ROUTES, getRoutePath } from './constants';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={getRoutePath(APP_ROUTES.LOANS)} element={<Loans />} />
        <Route path={getRoutePath(APP_ROUTES.LOAN_ACCOUNTS)} element={<LoanAccounts />} />
        <Route path={getRoutePath(APP_ROUTES.LOAN_DETAILS)} element={<LoanDetailsPage />} />
      </Route>
    </Routes>
  );
};

import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/Main';
import { BankAccounts } from '../pages/BankAccounts';
import { DematAccounts } from '../pages/DematAccounts';
import { LoanAccounts } from '../pages/LoanAccounts';
import { LoanDetailsPage } from '../pages/LoanDetailsPage';
import { LoansDashboard } from '../pages/LoansDashboard';
import { Planner } from '../pages/Planner';
import { Salary } from '../pages/Salary';
import { APP_ROUTES, getRoutePath } from './constants';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path={getRoutePath(APP_ROUTES.BASE)}
          element={<Navigate to={getRoutePath(APP_ROUTES.LOANS)} />}
        />
        <Route index path={getRoutePath(APP_ROUTES.LOANS)} element={<LoansDashboard />} />
        <Route path={getRoutePath(APP_ROUTES.LOAN_ACCOUNTS)} element={<LoanAccounts />} />
        <Route path={getRoutePath(APP_ROUTES.LOAN_DETAILS)} element={<LoanDetailsPage />} />
        <Route path={getRoutePath(APP_ROUTES.PLANNER)} element={<Planner />} />
        <Route path={getRoutePath(APP_ROUTES.BANK_ACCOUNTS)} element={<BankAccounts />} />
        <Route path={getRoutePath(APP_ROUTES.DEMAT_ACCOUNTS)} element={<DematAccounts />} />
        <Route path={getRoutePath(APP_ROUTES.SALARY)} element={<Salary />} />
      </Route>
    </Routes>
  );
};

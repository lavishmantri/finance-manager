import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/Main';
import { LoanAccounts } from '../pages/LoanAccounts';
import { LoanDetailsPage } from '../pages/LoanDetailsPage';
import { LoansDashboard } from '../pages/LoansDashboard';
import { Planner } from '../pages/Planner';
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
      </Route>
    </Routes>
  );
};

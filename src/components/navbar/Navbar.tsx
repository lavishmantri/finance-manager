import { NavLink } from 'react-router-dom';
import { APP_ROUTES, getRoutePath } from '../../routes/constants';
import styles from './navbar.module.scss';

export const Navbar = () => {
  return (
    <header className={styles.navbarContainer}>
      <NavLink className={styles.navlink} to={getRoutePath(APP_ROUTES.LOANS)}>
        Loans
      </NavLink>
      <NavLink className={styles.navlink} to={getRoutePath(APP_ROUTES.LOAN_ACCOUNTS)}>
        Loan Accounts
      </NavLink>
    </header>
  );
};

import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar';
import styles from './layout.module.scss';

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.appContent}>
        <Outlet />
      </div>
    </div>
  );
};

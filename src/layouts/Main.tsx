import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { AppHeader } from '../components/app-header/AppHeader';
import { Navbar } from '../components/navbar/Navbar';

export const MainLayout = () => {
  return (
    <AppShell padding="md" navbar={<Navbar />} header={<AppHeader />}>
      <Outlet />
    </AppShell>
  );
};

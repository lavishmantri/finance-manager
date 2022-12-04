import { AppShell, Header } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { AppHeader } from '../components/app-header/AppHeader';
import { Navbar } from '../components/navbar/Navbar';

export const MainLayout = () => {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar />}
      header={
        <Header height={60} p="xs">
          <AppHeader />
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
};

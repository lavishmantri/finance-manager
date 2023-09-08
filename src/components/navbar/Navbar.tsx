import { Navbar as MantineNavbar, Stack } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { APP_ROUTES, getRoutePath } from '../../routes/constants';

export const Navbar = () => {
  return (
    <MantineNavbar height={600} p="xs" width={{ base: 100 }}>
      <MantineNavbar.Section grow mt="md">
        <Stack>
          <NavLink to={getRoutePath(APP_ROUTES.LOANS)}>Loans</NavLink>
          <NavLink to={getRoutePath(APP_ROUTES.LOAN_ACCOUNTS)}>Loan Accounts</NavLink>
          <NavLink to={getRoutePath(APP_ROUTES.PLANNER)}>Planner</NavLink>
          <NavLink to={getRoutePath(APP_ROUTES.BANK_ACCOUNTS)}>Bank Accounts</NavLink>
          <NavLink to={getRoutePath(APP_ROUTES.DEMAT_ACCOUNTS)}>Demat Accounts</NavLink>
          <NavLink to={getRoutePath(APP_ROUTES.SALARY)}>Salary</NavLink>
        </Stack>
      </MantineNavbar.Section>
      <MantineNavbar.Section>{/* Footer with user */}</MantineNavbar.Section>
    </MantineNavbar>
  );
};

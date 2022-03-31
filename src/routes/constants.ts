export enum APP_ROUTES {
  LOANS = 'LOANS',
  LOAN_ACCOUNTS = 'LOAN_ACCOUNTS',
}

export const routePaths = {
  [APP_ROUTES.LOANS]: '/loans',
  [APP_ROUTES.LOAN_ACCOUNTS]: '/loan-accounts',
};

export const getRoutePath = (route: APP_ROUTES) => routePaths[route];

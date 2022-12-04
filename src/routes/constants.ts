export enum APP_ROUTES {
  LOANS = 'LOANS',
  LOAN_DETAILS = 'LOAN_DETAILS',
  LOAN_ACCOUNTS = 'LOAN_ACCOUNTS',
  PLANNER = 'PLANNER',
}

export const routePaths: Record<APP_ROUTES, string> = {
  [APP_ROUTES.LOANS]: '/loans',
  [APP_ROUTES.LOAN_DETAILS]: '/loan/:id',
  [APP_ROUTES.LOAN_ACCOUNTS]: '/loan-accounts',
  [APP_ROUTES.PLANNER]: '/planner',
};

export const getRoutePath = (route: APP_ROUTES) => routePaths[route];

export const getLoanDetailPath = (id: string): string => {
  const loanDetailsPath = routePaths[APP_ROUTES.LOAN_DETAILS];
  return loanDetailsPath.replace(':id', id);
};

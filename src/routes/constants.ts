export enum APP_ROUTES {
  BASE = 'BASE',
  LOANS = 'LOANS',
  LOAN_DETAILS = 'LOAN_DETAILS',
  LOAN_ACCOUNTS = 'LOAN_ACCOUNTS',
  PLANNER = 'PLANNER',
  BANK_ACCOUNTS = 'BANK_ACCOUNTS',
  DEMAT_ACCOUNTS = 'DEMAT_ACCOUNTS',
  PORTFOLIO = 'PORTFOLIO',
  SALARY = 'SALARY',
  WORKBOOK = 'WORKBOOK',
  WORKBOOK_CONTENT = 'WORKBOOK_CONTENT',
}

export const routePaths: Record<APP_ROUTES, string> = {
  [APP_ROUTES.BASE]: '/',
  [APP_ROUTES.LOANS]: '/loans',
  [APP_ROUTES.LOAN_DETAILS]: '/loan/:id',
  [APP_ROUTES.LOAN_ACCOUNTS]: '/loan-accounts',
  [APP_ROUTES.PLANNER]: '/planner',
  [APP_ROUTES.BANK_ACCOUNTS]: '/bank-accounts',
  [APP_ROUTES.DEMAT_ACCOUNTS]: '/demat-accounts',
  [APP_ROUTES.PORTFOLIO]: '/portfolio',
  [APP_ROUTES.SALARY]: '/salary',
  [APP_ROUTES.WORKBOOK]: '/workbook',
  [APP_ROUTES.WORKBOOK_CONTENT]: '/workbook/:id',
};

export const getRoutePath = (route: APP_ROUTES) => routePaths[route];

export const getLoanDetailPath = (id: string): string => {
  const loanDetailsPath = routePaths[APP_ROUTES.LOAN_DETAILS];
  return loanDetailsPath.replace(':id', id);
};

export const getWorkbookPath = (id: string): string => {
  const workbookContentPath = routePaths[APP_ROUTES.WORKBOOK_CONTENT];
  return workbookContentPath.replace(':id', id);
};

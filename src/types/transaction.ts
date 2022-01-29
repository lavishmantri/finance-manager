export enum TransactionMode {
  CASH = 'CASH',
  ACCOUNT = 'ACCOUNT',
}

export interface Transaction {
  id: string;
  accountId: string;
  type: 'CREDIT' | 'DEBIT';
  rate: number;
  mode: TransactionMode;
}

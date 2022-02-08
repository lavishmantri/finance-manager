export enum TransactionNature {
  ONE = 'ONE',
  TWO = 'TWO',
  MIXED = 'MIXED',
}

export enum TransactionMode {
  CASH = 'CASH',
  ACCOUNT = 'ACCOUNT',
}

export enum TransactionType {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT',
}

export interface Transaction {
  id: string;
  accountId: string;
  amount: number;
  type: TransactionType;
  rate: number;
  mode: TransactionMode;
}

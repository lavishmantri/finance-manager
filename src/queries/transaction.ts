import { useQuery } from 'react-query';
import { Transaction, TransactionMode } from '../types/transaction';
import { uuid } from '../utils/uuid';

export const useCreateTransactionMutation = () => {};

const fetchTransactionsList = (): Transaction[] => {
  return [
    {
      id: uuid(),
      accountId: uuid(),
      type: 'DEBIT',
      rate: 12,
      mode: TransactionMode.ACCOUNT,
    },
  ];
};

export const useGetTransactionsQuery = () => {
  return useQuery(['transactions'], fetchTransactionsList);
};

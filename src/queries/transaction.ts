import { useQuery } from 'react-query';
import { Transaction, TransactionMode, TransactionType } from '../types/transaction';
import { uuid } from '../utils/uuid';

export const useCreateTransactionMutation = () => {};

const fetchTransactionsList = (): Transaction[] => {
  return [
    {
      id: uuid(),
      accountId: uuid(),
      amount: Math.floor(Math.random() * 1000000),
      rate: 12,
      type: TransactionType.CREDIT,
      mode: TransactionMode.ACCOUNT,
    },
  ];
};

export const useGetTransactionsQuery = () => {
  return useQuery(['transactions'], fetchTransactionsList);
};

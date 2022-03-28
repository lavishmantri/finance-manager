import { useState } from 'react';
import { Transaction } from '../../types/transaction';
import { AddTransaction } from '../add-transaction';
import { Button } from '../button';
import { DataTable } from '../data-table';
import { Typography, TypographyVariants } from '../typography';
import styles from './transactionlist.module.scss';

const columns = [
  {
    field: 'accountId',
    headerName: 'Name',
  },
  {
    field: 'amount',
    headerName: 'Amount',
  },
];

interface TransactionsListProps {
  transactions: Transaction[];
}

export const TransactionsList = ({ transactions }: TransactionsListProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddTransaction = () => {
    setIsFormOpen(true);
  };

  const handleClose = () => {};

  return (
    <div className={styles.transactionContainer}>
      <div className={styles.transactionHeader}>
        <Typography variant={TypographyVariants.HEADING1}>Transactions</Typography>
        <Button onClick={handleAddTransaction}>Add transaction</Button>
      </div>
      <DataTable columns={columns} rows={transactions} />
      <AddTransaction />
    </div>
  );
};

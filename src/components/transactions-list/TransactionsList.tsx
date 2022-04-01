import { useState } from 'react';
import { Button } from '../../oxygen/atoms/button';
import { Typography, TypographyVariants } from '../../oxygen/molecules/typography';
import { Transaction } from '../../types/transaction';
import { AddTransaction } from '../add-transaction';
import { DataTableMUI } from '../data-table';
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
      <DataTableMUI columns={columns} rows={transactions} />
      <AddTransaction />
    </div>
  );
};

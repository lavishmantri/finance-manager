import { CellProps } from 'react-table';
import { Typography, TypographyVariants } from '../../oxygen/molecules/typography';
import { DataTable } from '../data-table/DataTable';

const columns = [
  {
    Header: 'Id',
    accessor: 'id',
    Cell: ({ value }: CellProps<Record<string, unknown>>) => {
      return <Typography variant={TypographyVariants.BODY1}>{value}</Typography>;
    },
  },
  {
    Header: 'Name',
    accessor: 'bankName',
    Cell: ({ value }: CellProps<Record<string, unknown>>) => {
      return <Typography variant={TypographyVariants.BODY1}>{value}</Typography>;
    },
  },
];

export const BankAccountList = () => {
  const bankAccounts = [
    {
      id: '31b38c48-9951-472c-a3b3-1b0714ece1e1',
      bankName: 'HDFC BANK',
      accountName: 'Lavish Mantri',
    },
  ];

  return <DataTable columns={columns} data={bankAccounts} />;
};

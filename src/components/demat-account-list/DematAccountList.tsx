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
    Header: 'Demat account ID',
    accessor: 'dematAccountId',
    Cell: ({ value }: CellProps<Record<string, unknown>>) => {
      return <Typography variant={TypographyVariants.BODY1}>{value}</Typography>;
    },
  },
  {
    Header: 'Broker',
    accessor: 'broker',
    Cell: ({ value }: CellProps<Record<string, unknown>>) => {
      return <Typography variant={TypographyVariants.BODY1}>{value}</Typography>;
    },
  },
];

export const DematAccountList = () => {
  const dematAccounts = [
    {
      id: '31b38c48-9951-472c-a3b3-1b0714ece1e1',
      dematAccountId: '1208160066964442',
      accountName: 'Lavish Mantri',
      broker: 'Zerodha',
    },
  ];

  return <DataTable columns={columns} data={dematAccounts} />;
};

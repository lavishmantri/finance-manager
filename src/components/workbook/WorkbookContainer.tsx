import { Alert, Loader } from '@mantine/core';
import { Sheet, useGetSheetsQuery } from '../../services/generated/graphql-types';
import { Workbook } from './Workbook';

interface WorkbookContainerProps {
  workbookId: string;
}

export const WorkbookContainer = ({ workbookId }: WorkbookContainerProps) => {
  const { data, loading, error } = useGetSheetsQuery({
    variables: {
      workbookId,
    },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Alert variant="filled">Error happened</Alert>;
  }

  return <Workbook sheets={(data?.getSheetsList as Sheet[]) ?? null} />;
};

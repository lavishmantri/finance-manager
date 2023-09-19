import { Alert, Card, Loader, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Box } from '../../../oxygen/atoms/box';
import { getWorkbookPath } from '../../../routes/constants';
import { useGetWorkbooksQuery } from '../../../services/generated/graphql-types';

export const WorkbookCardsContainer = () => {
  const { data, loading, error } = useGetWorkbooksQuery();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Alert>Error fetching workbooks</Alert>;
  }

  return (
    <Box>
      {data?.getWorkbookList?.map(workbook => {
        return (
          <Card id={workbook?.id}>
            <Link to={getWorkbookPath(workbook?.id ?? '')}>
              <Text>{workbook?.name}</Text>
            </Link>
          </Card>
        );
      })}
    </Box>
  );
};

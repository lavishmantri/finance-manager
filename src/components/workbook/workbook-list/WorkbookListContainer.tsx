import { Box } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../oxygen/atoms/button';
import { getWorkbookPath } from '../../../routes/constants';
import { useCreateWorkbookMutation } from '../../../services/generated/graphql-types';
import { WorkbookCardsContainer } from './WorkbookCardsContainer';

export const WorkbookListContainer = () => {
  const navigate = useNavigate();
  const [createWorkbook, { data, error, loading }] = useCreateWorkbookMutation();

  const handleClick = async () => {
    const workbook = await createWorkbook({
      variables: {
        name: 'Workbook 1',
      },
    });

    if (!workbook.data?.createWorkbook.id) {
      console.log('No workbook id: ');
      return;
    }

    navigate(getWorkbookPath(workbook.data?.createWorkbook.id));
  };
  return (
    <Box>
      <Box>
        <Button loading={loading} onClick={handleClick}>
          Create Workbook
        </Button>
      </Box>
      <WorkbookCardsContainer />
    </Box>
  );
};

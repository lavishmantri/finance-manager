import { useParams } from 'react-router-dom';
import { WorkbookContainer } from '../components/workbook/WorkbookContainer';
import { Box } from '../oxygen/atoms/box';

export const WorkbookContent = () => {
  const { id } = useParams();

  if (!id) {
    return <Box>Workbook id not found</Box>;
  }

  return <WorkbookContainer workbookId={id} />;
};

import { Box, Tabs } from '@mantine/core';
import first from 'lodash/first';
import { Sheet, useCreateSheetInWorkbookMutation } from '../../services/generated/graphql-types';
import { NewSheetBtn } from './NewSheetBtn';
import { SheetView } from './Sheet';

interface WorkbookProps {
  workbookId: string;
  sheets: Sheet[] | null;
}

export const Workbook = ({ workbookId, sheets }: WorkbookProps) => {
  const [createSheetInWorkbook, { loading }] = useCreateSheetInWorkbookMutation();
  console.log('Sheet re-rendering: ', sheets);

  const handleAddSheet = () => {
    createSheetInWorkbook({
      variables: {
        workbookId,
      },
    });
  };

  return (
    <Box>
      {/* <Text>{output}</Text> */}
      <Tabs defaultValue={first(sheets)?.id}>
        <Tabs.List>
          {sheets?.map(sheet => {
            return (
              <Tabs.Tab key={sheet.id} value={sheet.id}>
                {sheet.name}
              </Tabs.Tab>
            );
          })}
          <NewSheetBtn onAddSheet={handleAddSheet} loading={loading} />
        </Tabs.List>
        {sheets?.map(sheet => {
          return (
            <Tabs.Panel key={sheet.id} value={sheet.id}>
              <SheetView sheet={sheet} />
            </Tabs.Panel>
          );
        })}
      </Tabs>
    </Box>
  );
};

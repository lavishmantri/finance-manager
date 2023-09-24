import { Box, Tabs } from '@mantine/core';
import first from 'lodash/first';
import React from 'react';
import { DataGrid } from '../../oxygen/organisms/data-grid/DataGrid';
import { Sheet } from '../../services/generated/graphql-types';
import { SheetView } from './Sheet';

const MemoizedDataGrid = React.memo(DataGrid);

interface WorkbookProps {
  sheets: Sheet[] | null;
}

export const Workbook = ({ sheets }: WorkbookProps) => {
  console.log('Sheet re-rendering: ', sheets);

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

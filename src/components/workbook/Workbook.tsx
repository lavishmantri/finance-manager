import { HotTable } from '@handsontable/react';
import { Box, Tabs } from '@mantine/core';
import { CellChange, ChangeSource } from 'handsontable/common';
import { useRef } from 'react';
import { DataGrid } from '../../oxygen/organisms/data-grid/DataGrid';
import { Sheet, useUpdateSheetDataMutation } from '../../services/generated/graphql-types';

interface WorkbookProps {
  sheets: Sheet[] | null;
}

export const Workbook = ({ sheets }: WorkbookProps) => {
  const ref = useRef<HotTable>(null);
  const [updateData] = useUpdateSheetDataMutation();

  const handleDataChange = (
    sheetId: string,
    changes: CellChange[] | null,
    source: ChangeSource,
  ) => {
    if (source === 'edit') {
      updateData({
        variables: {
          id: sheetId,
          data: ref?.current?.hotInstance?.getData() ?? [[]],
        },
      });
    }
  };
  return (
    <Box>
      <Tabs>
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
              <DataGrid
                ref={ref}
                onChange={(changes: CellChange[] | null, source: ChangeSource) =>
                  handleDataChange(sheet.id, changes, source)
                }
              />
            </Tabs.Panel>
          );
        })}
      </Tabs>
    </Box>
  );
};

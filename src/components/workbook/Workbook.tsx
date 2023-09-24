import { HotTable } from '@handsontable/react';
import { Box, Tabs } from '@mantine/core';
import { CellChange, ChangeSource } from 'handsontable/common';
import first from 'lodash/first';
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
      const updatedData = ref?.current?.hotInstance?.getData() ?? [[]];
      console.log('Updated date: ', updatedData);
      updateData({
        variables: {
          id: sheetId,
          data: ref?.current?.hotInstance?.getData() ?? [[]],
        },
        optimisticResponse: {
          updateData: {
            id: sheetId,
            name: sheets ? sheets[0]?.name : '',
            data: ref?.current?.hotInstance?.getData() ?? [[]],
          },
        },
      });
    }
  };
  return (
    <Box>
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
              <DataGrid
                ref={ref}
                data={sheet.data as (string | number | boolean)[][]}
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

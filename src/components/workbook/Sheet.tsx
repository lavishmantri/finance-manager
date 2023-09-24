import { HotTable } from '@handsontable/react';
import { CellChange, ChangeSource } from 'handsontable/common';
import { cloneDeep } from 'lodash';
import { useCallback, useEffect, useRef } from 'react';
import { DataGrid } from '../../oxygen/organisms/data-grid/DataGrid';
import { Sheet, useUpdateSheetDataMutation } from '../../services/generated/graphql-types';

interface SheetProps {
  sheet: Sheet;
}

export const SheetView = ({ sheet }: SheetProps) => {
  const hotRef = useRef<HotTable>(null);
  const [updateData] = useUpdateSheetDataMutation();

  useEffect(() => {
    if (sheet.data) {
      const clonedData = cloneDeep(sheet.data);

      console.log('Loading data: ', clonedData);
      hotRef.current?.hotInstance?.loadData(clonedData as any[][]);
    }
  }, []);

  const handleDataChange = useCallback(
    async (changes: CellChange[] | null, source: ChangeSource) => {
      console.log('Sheet save: ', sheet.id, changes, source);
      if (source === 'loadData') {
        return; //don't save this change
      }

      if (source === 'edit') {
        const updatedData = hotRef?.current?.hotInstance?.getData() ?? [[]];
        console.log('Updated data: ', updatedData);
        await updateData({
          variables: {
            id: sheet.id,
            data: hotRef?.current?.hotInstance?.getData() ?? [[]],
          },
        });
      }
    },
    [sheet.id, sheet.data],
  );

  return <DataGrid ref={hotRef} onChange={handleDataChange} />;
};

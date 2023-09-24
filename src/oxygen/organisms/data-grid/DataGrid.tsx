import { HotTable } from '@handsontable/react';
import { CellChange, ChangeSource } from 'handsontable/common';
import 'handsontable/dist/handsontable.full.min.css';
import { registerAllModules } from 'handsontable/registry';
import { HyperFormula } from 'hyperformula';
import { forwardRef } from 'react';

registerAllModules();

interface DataGridProps {
  onChange: (changes: CellChange[] | null, source: ChangeSource) => void;
}

export const DataGrid = forwardRef<HotTable, DataGridProps>(({ onChange }, ref) => {
  const hyperformulaInstance = HyperFormula.buildEmpty({
    licenseKey: 'internal-use-in-handsontable',
  });

  console.log('Rendering HotTable');

  return (
    <HotTable
      licenseKey="non-commercial-and-evaluation"
      ref={ref}
      colHeaders
      rowHeaders
      startCols={5}
      startRows={10}
      colWidths={200}
      rowHeights={40}
      height="auto"
      dropdownMenu
      contextMenu
      filters
      manualColumnResize
      manualRowResize
      formulas={{
        engine: hyperformulaInstance,
      }}
      afterChange={onChange}
    />
  );
});

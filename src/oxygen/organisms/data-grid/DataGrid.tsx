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

  return (
    <HotTable
      licenseKey="non-commercial-and-evaluation"
      ref={ref}
      colHeaders={true}
      rowHeaders={true}
      startCols={3}
      startRows={3}
      height="auto"
      dropdownMenu={true}
      filters={true}
      manualColumnResize={true}
      manualRowResize={true}
      formulas={{
        engine: hyperformulaInstance,
      }}
      afterChange={onChange}
    />
  );
});

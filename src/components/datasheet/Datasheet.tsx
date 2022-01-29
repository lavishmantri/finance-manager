import ReactDataSheet from 'react-datasheet';

import 'react-datasheet/lib/react-datasheet.css';

export interface GridElement extends ReactDataSheet.Cell<GridElement, number> {
  value: string | number | null;
}

class MyReactDataSheet extends ReactDataSheet<GridElement, number> {}
let grid: GridElement[][] = [
  [{ value: '1' }, { value: '3' }],
  [{ value: '2' }, { value: '4' }],
];

export const Datasheet = () => {
  return (
    <MyReactDataSheet
      data={grid}
      valueRenderer={cell => cell.value}
      onCellsChanged={changes => {
        const newGrid = grid.map(row => [...row]);
        changes.forEach(({ cell, row, col, value }) => {
          newGrid[row][col] = { ...grid[row][col], value };
        });

        grid = [...newGrid];
      }}
    />
  );
};

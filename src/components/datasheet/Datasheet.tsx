import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';
import './datasheet.css';

export interface Column {
  id: string;
}
export interface GridElement extends ReactDataSheet.Cell<GridElement, number> {
  columnId: string;
  value: string | number | null;
}

class MyReactDataSheet extends ReactDataSheet<GridElement, number> {}

interface DatasheetProps {
  grid: GridElement[][];
}

export const Datasheet = ({ grid }: DatasheetProps) => {
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

import { Cell, CellValue, MatrixType } from "../types";

let globalIdCounter = 1;

export const generateRandomCellValue = (): CellValue =>
  Math.floor(Math.random() * 900) + 100;

export const generateMatrix = (rows: number, cols: number): Cell[][] => {
  globalIdCounter = 1;

  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({
      id: globalIdCounter++,
      amount: generateRandomCellValue(),
    }))
  );
};

export const generateNewRow = (cols: number): Cell[] => {
  return Array.from({ length: cols }, () => ({
    id: globalIdCounter++,
    amount: generateRandomCellValue(),
  }));
};

export const calculateRowSum = (row: Cell[]): number =>
  row.reduce((sum, cell) => sum + cell.amount, 0);

export const calculateColumnPercentile = (
  matrix: MatrixType,
  colIndex: number
): number => {
  const values = matrix
    .map((row) => row[colIndex]?.amount || 0)
    .sort((a, b) => a - b);
  const mid = Math.floor(values.length / 2);
  return values.length % 2 !== 0
    ? values[mid]
    : (values[mid - 1] + values[mid]) / 2;
};

export const calcProcetCell = (cell: Cell, rowSum: number): number => {
  return Number(((cell.amount * 100) / rowSum).toFixed());
};

export const calcHeatmapColor = (cell: Cell, maxCellValue: number): string => {
  const percentage = (cell.amount / maxCellValue) * 100;
  return `rgba(173, 216, 230, ${percentage / 100})`;
};

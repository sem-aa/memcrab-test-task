import { Cell, MatrixType } from "../types";

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

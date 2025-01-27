import { Cell, CellValue } from "../types";

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

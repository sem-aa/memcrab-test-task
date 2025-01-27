import { useState, useCallback, useMemo } from "react";
import { Cell as CellType, MatrixType } from "../types";

export const useHighlightClosestCells = (matrix: MatrixType) => {
  const [hoveredCell, setHoveredCell] = useState<CellType | null>(null);
  const [qntShowClosestValues, setQntShowClosestValues] = useState("3");

  const handleMouseEnter = useCallback((cell: CellType) => {
    setHoveredCell(cell);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredCell(null);
  }, []);

  const findClosestValues = (
    arr: CellType[],
    target: CellType,
    count: number
  ) => {
    return arr
      .filter((item) => item.id !== target.id)
      .map((item) => ({ ...item, diff: Math.abs(item.amount - target.amount) }))
      .sort((a, b) => a.diff - b.diff)
      .slice(0, count);
  };

  const closestCells = useMemo(() => {
    if (hoveredCell) {
      return findClosestValues(
        matrix.flat(),
        hoveredCell,
        Number(qntShowClosestValues)
      );
    } else return [];
  }, [hoveredCell, matrix, qntShowClosestValues]);

  const isCellHighlighted = useCallback(
    (cellId: number) => {
      return closestCells.some(({ id }) => id === cellId);
    },
    [closestCells]
  );

  return {
    qntShowClosestValues,
    setQntShowClosestValues,
    handleMouseEnter,
    isCellHighlighted,
    handleMouseLeave,
  };
};

import { FC, memo, useMemo, useState } from "react";
import {
  calcHeatmapColor,
  calcProcetCell,
  calculateRowSum,
} from "../utils/helpers";
import { useMatrixActions } from "../hooks/useMatrixActions";

interface MatrixRowProps {
  index: number;
  rows: { id: number; amount: number }[];
  isCellHighlighted: (cellId: number) => boolean;
  handleMouseEnter: (cell: { id: number; amount: number }) => void;
  handleMouseLeave: () => void;
}

const MatrixRow: FC<MatrixRowProps> = ({
  index,
  rows,
  isCellHighlighted,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const [hoverSum, setHoverSum] = useState(false);

  const { handleCellClick, handleRemoveRow } = useMatrixActions();
 
  const rowSum = useMemo(() => calculateRowSum(rows), [rows]);
  const maxCellValue = useMemo(
    () => Math.max(...rows.map((cell) => cell.amount)),
    [rows]
  );

  return (
    <tr>
      <td style={{ fontWeight: "bold" }}>Cell Value M = {index + 1}</td>
      {rows.map((cell, j) => (
        <td
          style={{
            textAlign: "center",
            background: isCellHighlighted(cell.id)
              ? "lightblue"
              : hoverSum
              ? calcHeatmapColor(cell, maxCellValue)
              : "white",
          }}
          key={cell.id}
          onClick={() => handleCellClick(index, j)}
          onMouseEnter={() => handleMouseEnter(cell)}
          onMouseLeave={handleMouseLeave}
        >
          {hoverSum ? `${calcProcetCell(cell, rowSum)}%` : cell.amount}
        </td>
      ))}
      <td
        onMouseEnter={() => setHoverSum(true)}
        onMouseLeave={() => setHoverSum(false)}
        style={{ fontWeight: "bold" }}
      >
        {rowSum}
      </td>
      <td>
        <button onClick={() => handleRemoveRow(index)}>Delete Row</button>
      </td>
    </tr>
  );
};

export default memo(MatrixRow);

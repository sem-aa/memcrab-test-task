import { FC, memo, useMemo, useState } from "react";
import {
  calcHeatmapColor,
  calcProcetCell,
  calculateRowSum,
} from "../../../utils/helpers";
import { useMatrixActions } from "../../../hooks/useMatrixActions";
import styles from "./MatrixRow.module.css";
import Button from "../../Buttons/Button";

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
    <tr className={styles.matrixRow}>
      {rows.map((cell, j) => (
        <td
          className={`${styles.matrixCell} ${
            isCellHighlighted(cell.id)
              ? styles.matrixCellHighlighted
              : hoverSum
              ? styles.matrixCellHeatmap
              : ""
          }`}
          style={{
            background: hoverSum ? calcHeatmapColor(cell, maxCellValue) : "",
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
        className={styles.sumCell}
        onMouseEnter={() => setHoverSum(true)}
        onMouseLeave={() => setHoverSum(false)}
      >
        {rowSum}
      </td>
      <td className={styles.deleteCell}>
        <Button
          onClick={() => handleRemoveRow(index)}
          variant="danger"
          size="small"
        >
          Delete row
        </Button>
      </td>
    </tr>
  );
};

export default memo(MatrixRow);

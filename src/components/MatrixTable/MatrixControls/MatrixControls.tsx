import { FC, memo } from "react";
import { useMatrixActions } from "../../../hooks/useMatrixActions";
import Button from "../../Buttons/Button";
import styles from "./MatrixControls.module.css";

interface MatrixControlsProps {
  qntShowClosestValues: string;
  setQntShowClosestValues: (value: string) => void;
}

const MatrixControls: FC<MatrixControlsProps> = ({
  qntShowClosestValues,
  setQntShowClosestValues,
}) => {
  const { matrix, handleAddRow, clearMatrix } = useMatrixActions();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      Number(e.target.value) < 0 ||
      Number(e.target.value) > matrix.flat().length - 1
    ) {
      alert("Number must not be greater than the number of cells");
      return;
    }
    setQntShowClosestValues(e.target.value);
  };

  return (
    <div className={styles.buttonsContainer}>
      <Button onClick={handleAddRow} variant="secondary">
        Add row
      </Button>
      <div className={styles.inputContainer}>
        <span className={styles.tooltip}>
          ℹ
          <span className={styles.tooltipText}>
            Enter the number of values closest to the current value to
            highlight.
          </span>
        </span>

        <input
          className={styles.inputX}
          type="number"
          value={qntShowClosestValues}
          onChange={handleOnChange}
          min={1}
          max={matrix.flat().length}
        />
      </div>

      <Button onClick={clearMatrix} variant="danger">
        Delete table
      </Button>
    </div>
  );
};

export default memo(MatrixControls);

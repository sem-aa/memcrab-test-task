import { memo } from "react";
import { useHighlightClosestCells } from "../../hooks/useHighlightClosestCells";
import { useMatrixActions } from "../../hooks/useMatrixActions";
import MatrixControls from "./MatrixControls/MatrixControls";
import MatrixRow from "./MatrixRow/MatrixRow";
import MatrixFooter from "./MatrixFooter/MatrixFooter";
import styles from "./MatrixTable.module.css";

const MatrixTable = () => {
  const { matrix } = useMatrixActions();
  const {
    qntShowClosestValues,
    setQntShowClosestValues,
    isCellHighlighted,
    handleMouseEnter,
    handleMouseLeave,
  } = useHighlightClosestCells(matrix);

  return (
    <div className={styles.container}>
      {matrix.length ? (
        <>
          <MatrixControls
            qntShowClosestValues={qntShowClosestValues}
            setQntShowClosestValues={setQntShowClosestValues}
          />
          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  {Array.from({ length: matrix[0].length }, (_, i) => (
                    <th key={i}></th>
                  ))}
                  <th>Sum values</th>
                </tr>
              </thead>
              <tbody>
                {matrix.map((rows, i) => (
                  <MatrixRow
                    key={i}
                    index={i}
                    rows={rows}
                    isCellHighlighted={isCellHighlighted}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                  />
                ))}
                <MatrixFooter matrix={matrix} />
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p className={styles.noMatrixMessage}>No table, please generate it.</p>
      )}
    </div>
  );
};

export default memo(MatrixTable);

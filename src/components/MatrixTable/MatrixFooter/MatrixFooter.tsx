import { FC, useMemo, memo } from "react";
import { MatrixType } from "../../../types";
import { calculateColumnPercentile } from "../../../utils/helpers";
import styles from "./MatrixFooter.module.css";

interface MatrixFooterProps {
  matrix: MatrixType;
}

const MatrixFooter: FC<MatrixFooterProps> = ({ matrix }) => {
  const columnPercentiles = useMemo(() => {
    return matrix[0].map((_, i) => calculateColumnPercentile(matrix, i));
  }, [matrix]);

  return (
    <tr className={styles.footerRow}>
      {columnPercentiles.map((percentile, i) => (
        <td key={i} className={styles.footerCell}>
          {percentile}
        </td>
      ))}
      <td className={styles.footerCell}>50th percentile</td>
    </tr>
  );
};

export default memo(MatrixFooter);

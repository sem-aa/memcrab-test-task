import { FC, useMemo, memo } from "react";
import { MatrixType } from "../types";
import { calculateColumnPercentile } from "../utils/helpers";

interface MatrixFooterProps {
  matrix: MatrixType;
}

const MatrixFooter: FC<MatrixFooterProps> = ({ matrix }) => {
  const columnPercentiles = useMemo(() => {
    return matrix[0].map((_, i) => calculateColumnPercentile(matrix, i));
  }, [matrix]);

  return (
    <tr>
      <td style={{ fontWeight: "bold" }}>50th percentile</td>
      {columnPercentiles.map((percentile, i) => (
        <td style={{ fontWeight: "bold", textAlign: "center" }} key={i}>
          {percentile}
        </td>
      ))}
    </tr>
  );
};

export default memo(MatrixFooter);

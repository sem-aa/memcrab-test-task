import { FC, memo } from "react";

interface MatrixHeaderProps {
  cols: number;
}

const MatrixHeader: FC<MatrixHeaderProps> = ({ cols }) => (
  <thead>
    <tr>
      <td></td>
      {Array.from({ length: cols }, (_, i) => (
        <th key={i}>Cell values N = {i + 1}</th>
      ))}
      <th>Sum values</th>
    </tr>
  </thead>
);

export default memo(MatrixHeader);

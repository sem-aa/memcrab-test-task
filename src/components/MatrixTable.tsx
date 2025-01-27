import { useHighlightClosestCells } from "../hooks/useHighlightClosestCells";
import { useMatrixActions } from "../hooks/useMatrixActions";
import MatrixHeader from "./MatrixHeader";
import MatrixRow from "./MatrixRow";
import MatrixFooter from "./MatrixFooter";

export const MatrixTable = () => {
  const { matrix, handleAddRow } = useMatrixActions();
  const {
    qntShowClosestValues,
    setQntShowClosestValues,
    isCellHighlighted,
    handleMouseEnter,
    handleMouseLeave,
  } = useHighlightClosestCells(matrix);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      Number(e.target.value) < 0 ||
      Number(e.target.value) > matrix.flat().length - 1
    ) {
      return;
    }
    setQntShowClosestValues(e.target.value);
  };

  if (matrix.length === 0) {
    return <p>No matrix. Please initialize it.</p>;
  }

  return (
    <div>
      <button onClick={handleAddRow}>Add Row</button>
      <label>
        Qnt of closest values:
        <input
          type="number"
          value={qntShowClosestValues}
          onChange={handleOnChange}
        />
      </label>
      <table>
        <MatrixHeader cols={matrix[0].length} />
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
  );
};

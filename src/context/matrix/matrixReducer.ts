import { MatrixType } from "../../types";
import { generateMatrix, generateNewRow } from "../../utils/helpers";
import { MatrixAction } from "./types";

export const matrixReducer = (
  state: MatrixType,
  action: MatrixAction
): MatrixType => {
  switch (action.type) {
    case "SET_MATRIX": {
      const { rows, cols } = action;
      return generateMatrix(rows, cols);
    }
    case "UPDATE_CELL_BY_INDEX": {
      const { rowIndex, colIndex, value } = action;
      return state.map((row, rIdx) =>
        row.map((cell, cIdx) =>
          rIdx === rowIndex && cIdx === colIndex
            ? { ...cell, amount: cell.amount + value }
            : cell
        )
      );
    }
    case "ADD_ROW": {
      const newRow = generateNewRow(state[0].length);
      return [...state, newRow];
    }
    case "REMOVE_ROW": {
      return state.filter((_, idx) => idx !== action.rowIndex);
    }
    default:
      return state;
  }
};

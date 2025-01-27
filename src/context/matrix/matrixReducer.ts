import { MatrixType } from "../../types";
import { generateMatrix, generateNewRow } from "../../utils/matrixGenerator";
import { MatrixAction, MatrixActionTypes } from "./types";

export const matrixReducer = (
  state: MatrixType,
  action: MatrixAction
): MatrixType => {
  switch (action.type) {
    case MatrixActionTypes.SET_MATRIX: {
      const { rows, cols } = action;
      return generateMatrix(rows, cols);
    }
    case MatrixActionTypes.UPDATE_CELL_BY_INDEX: {
      const { rowIndex, colIndex, value } = action;
      return state.map((row, rIdx) =>
        row.map((cell, cIdx) =>
          rIdx === rowIndex && cIdx === colIndex
            ? { ...cell, amount: cell.amount + value }
            : cell
        )
      );
    }
    case MatrixActionTypes.ADD_ROW: {
      const newRow = generateNewRow(state[0].length);
      return [...state, newRow];
    }
    case MatrixActionTypes.REMOVE_ROW: {
      return state.filter((_, idx) => idx !== action.rowIndex);
    }
    case MatrixActionTypes.CLEAR_MATRIX: {
      return [];
    }
    default:
      return state;
  }
};

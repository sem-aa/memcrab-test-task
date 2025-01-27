import { MatrixType } from "../../types";

export type MatrixAction =
  | { type: "SET_MATRIX"; rows: number; cols: number }
  | {
      type: "UPDATE_CELL_BY_INDEX";
      rowIndex: number;
      colIndex: number;
      value: number;
    }
  | { type: "UPDATE_CELL"; rowIndex: number; colIndex: number; value: number }
  | { type: "ADD_ROW" }
  | { type: "REMOVE_ROW"; rowIndex: number };

export type MatrixContextType = {
  matrix: MatrixType;
  dispatch: React.Dispatch<MatrixAction>;
};

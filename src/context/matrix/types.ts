import { MatrixType } from "../../types";

export enum MatrixActionTypes {
  SET_MATRIX = "SET_MATRIX",
  UPDATE_CELL_BY_INDEX = "UPDATE_CELL_BY_INDEX",
  ADD_ROW = "ADD_ROW",
  REMOVE_ROW = "REMOVE_ROW",
  CLEAR_MATRIX = "CLEAR_MATRIX",
}

interface SetMatrixAction {
  type: MatrixActionTypes.SET_MATRIX;
  rows: number;
  cols: number;
}

interface UpdateCellByIndexAction {
  type: MatrixActionTypes.UPDATE_CELL_BY_INDEX;
  rowIndex: number;
  colIndex: number;
  value: number;
}

interface AddRowAction {
  type: MatrixActionTypes.ADD_ROW;
}

interface RemoveRowAction {
  type: MatrixActionTypes.REMOVE_ROW;
  rowIndex: number;
}

interface ClearMatrixAction {
  type: MatrixActionTypes.CLEAR_MATRIX;
}

export type MatrixAction =
  | SetMatrixAction
  | UpdateCellByIndexAction
  | AddRowAction
  | RemoveRowAction
  | ClearMatrixAction;

export type MatrixContextType = {
  matrix: MatrixType;
  dispatch: React.Dispatch<MatrixAction>;
};

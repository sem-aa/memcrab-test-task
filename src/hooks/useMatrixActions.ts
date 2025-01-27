import { useCallback } from "react";
import { useMatrixContext } from "../context/matrix/useMatrixContext";
import { MatrixActionTypes } from "../context/matrix/types";

export const useMatrixActions = () => {
  const { matrix, dispatch } = useMatrixContext();

  const handleCellClick = useCallback(
    (rowIndex: number, colIndex: number) => {
      dispatch({
        type: MatrixActionTypes.UPDATE_CELL_BY_INDEX,
        rowIndex,
        colIndex,
        value: 1,
      });
    },
    [dispatch]
  );

  const handleAddRow = useCallback(() => {
    dispatch({ type: MatrixActionTypes.ADD_ROW });
  }, [dispatch]);

  const handleRemoveRow = useCallback(
    (rowIndex: number) => {
      dispatch({ type: MatrixActionTypes.REMOVE_ROW, rowIndex });
    },
    [dispatch]
  );

  const clearMatrix = useCallback(() => {
    dispatch({ type: MatrixActionTypes.CLEAR_MATRIX });
  }, [dispatch]);

  return {
    matrix,
    handleCellClick,
    handleAddRow,
    handleRemoveRow,
    clearMatrix,
  };
};

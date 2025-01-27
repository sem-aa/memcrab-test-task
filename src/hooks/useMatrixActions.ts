import { useCallback } from "react";
import { useMatrixContext } from "../context/matrix/useMatrixContext";

export const useMatrixActions = () => {
  const { matrix, dispatch } = useMatrixContext();

  const handleCellClick = useCallback(
    (rowIndex: number, colIndex: number) => {
      dispatch({ type: "UPDATE_CELL_BY_INDEX", rowIndex, colIndex, value: 1 });
    },
    [dispatch]
  );

  const handleAddRow = useCallback(() => {
    dispatch({ type: "ADD_ROW" });
  }, [dispatch]);

  const handleRemoveRow = useCallback(
    (rowIndex: number) => {
      dispatch({ type: "REMOVE_ROW", rowIndex });
    },
    [dispatch]
  );

  return { matrix, handleCellClick, handleAddRow, handleRemoveRow };
};

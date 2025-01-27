import { useContext } from "react";
import { MatrixContext } from "./matrixContext";

export const useMatrixContext = () => {
  const context = useContext(MatrixContext);

  if (!context) {
    throw new Error("useMatrixContext must be used within a MatrixProvider");
  }

  return context;
};

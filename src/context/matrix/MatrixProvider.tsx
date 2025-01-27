import { useMemo, useReducer } from "react";
import { matrixReducer } from "./matrixReducer";
import { MatrixContext } from "./matrixContext";

export const MatrixProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [matrix, dispatch] = useReducer(matrixReducer, []);

  const value = useMemo(() => ({ matrix, dispatch }), [matrix]);

  return (
    <MatrixContext.Provider value={value}>{children}</MatrixContext.Provider>
  );
};

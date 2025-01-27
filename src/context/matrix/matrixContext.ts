import { createContext } from "react";
import { MatrixContextType } from "./types";

export const MatrixContext = createContext<MatrixContextType | null>(null);

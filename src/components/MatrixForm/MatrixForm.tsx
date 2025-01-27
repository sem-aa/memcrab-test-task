import { memo, useRef } from "react";
import { MatrixActionTypes } from "../../context/matrix/types";
import { useMatrixContext } from "../../context/matrix/useMatrixContext";
import Button from "../Buttons/Button";
import styles from "./MatrixForm.module.css";

const MatrixForm = () => {
  const { dispatch } = useMatrixContext();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const rows = Number(formData.get("rows"));
    const cols = Number(formData.get("cols"));
    dispatch({ type: MatrixActionTypes.SET_MATRIX, rows, cols });

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.inputForm}
        type="number"
        name="rows"
        min="0"
        max="100"
        placeholder="Enter the number of rows"
        required
      />
      <input
        className={styles.inputForm}
        type="number"
        name="cols"
        min="0"
        max="100"
        placeholder="Enter the number of columns"
        required
      />
      <Button type="submit">Generate Table</Button>
    </form>
  );
};

export default memo(MatrixForm);

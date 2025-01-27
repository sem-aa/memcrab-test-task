import { useMatrixContext } from "../context/matrix/useMatrixContext";

export const Form = () => {
  const { dispatch } = useMatrixContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const rows = Number(formData.get("rows"));
    const cols = Number(formData.get("cols"));
    dispatch({ type: "SET_MATRIX", rows, cols });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        M qnt rows:
        <input type="number" name="rows" min="0" max="100" required />
      </label>
      <label>
        N qnt columns:
        <input type="number" name="cols" min="0" max="100" required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

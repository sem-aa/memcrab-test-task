import { Form } from "./components/Form";
import { MatrixTable } from "./components/MatrixTable";
import { MatrixProvider } from "./context/matrix/MatrixProvider";

const App = () => {
  return (
    <MatrixProvider>
      <h1>Matrix table</h1>
      <Form />
      <MatrixTable />
    </MatrixProvider>
  );
};

export default App;

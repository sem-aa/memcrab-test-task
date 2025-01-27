import { MatrixProvider } from "./context/matrix/MatrixProvider";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import MatrixForm from "./components/MatrixForm/MatrixForm";
import MatrixTable from "./components/MatrixTable/MatrixTable";

const App = () => {
  return (
    <Container>
      <Header />
      <MatrixProvider>
        <MatrixForm />
        <MatrixTable />
      </MatrixProvider>
    </Container>
  );
};

export default App;

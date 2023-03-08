import { Container } from "@mui/material";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  return (
    <Container maxWidth="md">
      <ProductList />
    </Container>
  );
}

export default App;

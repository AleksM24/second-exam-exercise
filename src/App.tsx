import { Container } from "@mui/material";
import "./App.css";
import Main from "./container/Main";

function App() {
  return (
    <Container maxWidth="md">
      <Main price={15000} />
    </Container>
  );
}

export default App;
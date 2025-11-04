import Container from "./components/layout/Container";
import Header from "./components/ui/Header";
import Welcome from "@/pages/Welcome";

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Welcome />
      </Container>
    </>
  );
};

export default App;

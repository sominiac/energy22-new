import Container from "./components/layout/Container";
import Header from "./components/ui/Header";
import Welcome from "@/pages/Welcome";
import About from "@/pages/About";

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Welcome />
        <About />
      </Container>
    </>
  );
};

export default App;

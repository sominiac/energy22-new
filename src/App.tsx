import Container from "./components/layout/Container";
import Header from "./components/ui/Header";
import Welcome from "@/pages/Welcome";
import About from "@/pages/About";
import Tags from "@components/ui/Tags";
import styles from "./styles/app.module.scss";

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Welcome />
        <About />
      </Container>
      <Tags className={styles.tagsWrapper} />
    </>
  );
};

export default App;

import Container from "./components/layout/Container";
import Header from "./components/ui/Header";
import Welcome from "@/pages/Welcome";
import About from "@/pages/About";
import Tags from "@components/ui/Tags";
import styles from "./styles/app.module.scss";
import Mission from "@/pages/Mission";
import UpButton from "@components/ui/UpButton";
import Projects from "@/pages/Projects";

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Welcome />
        <About />
      </Container>
      <Tags className={styles.tagsWrapper} />
      <Container>
        <Mission />
      </Container>
      <div className={styles.arrowUpWrapper}>
        <UpButton />
      </div>
      <Container>
        <Projects />
      </Container>
    </>
  );
};

export default App;

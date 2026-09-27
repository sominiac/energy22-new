import Container from "@components/layout/Container";
import Header from "@components/ui/Header";
import Welcome from "@/pages/Welcome";
import About from "@/pages/About";
import Tags from "@components/ui/Tags";
import Mission from "@/pages/Mission";
import UpButton from "@components/ui/UpButton";
import Projects from "@/pages/Projects";
import Services from "@/pages/Services";
import Advantages from "@/pages/Advantages";
import Stages from "@/pages/Stages";
import Info from "@/pages/Info";
import FAQ from "@/pages/FAQ";
import SupFooter from "@/pages/SupFooter";
import Footer from "@components/ui/Footer";

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
      <Container>
        <Mission />
      </Container>
      <div className={styles.arrowUpWrapper}>
        <UpButton />
      </div>
      <Container>
        <Projects />
        <Services />
        <Advantages />
        <Stages />
        <Info />
        <FAQ />
      </Container>
      <SupFooter />
      <Footer />
    </>
  );
};

export default App;

import { useEffect, useRef, useState } from "react";

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
import NotificationModal from "@components/ui/NotificationModal";
import NotificationProvider from "@/stores/providers/NotificationProvider";

import styles from "./styles/app.module.scss";

const App = () => {
  const [isUpButtonVisible, setIsUpButtonVisible] = useState(false);

  const arrowUpContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const arrowUpContainerElem = arrowUpContainer?.current;
    const onScroll = () => {
      if (arrowUpContainerElem) {
        if (
          window.pageYOffset > arrowUpContainerElem.getBoundingClientRect().top
        ) {
          setIsUpButtonVisible(true);
        } else {
          setIsUpButtonVisible(false);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <>
      <NotificationProvider>
        <Container>
          <Header />
          <Welcome />
          <About />
        </Container>
        <Tags className={styles.tagsWrapper} />
        <Container>
          <Mission />
        </Container>
        <div ref={arrowUpContainer}>
          {isUpButtonVisible && (
            <div className={styles.arrowUpWrapper}>
              <UpButton />
            </div>
          )}
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
        </div>
        <NotificationModal />
      </NotificationProvider>
    </>
  );
};

export default App;

import Section from "@components/layout/Section";
import ListImage1 from "@assets/images/projects/1.png";
import ListImage2 from "@assets/images/projects/2.png";
import ListImage3 from "@assets/images/projects/3.png";
import ListImage4 from "@assets/images/projects/4.png";
import ListImage5 from "@assets/images/projects/5.png";
import ListImage6 from "@assets/images/projects/6.png";
import ListImage7 from "@assets/images/projects/7.png";
import ListImage8 from "@assets/images/projects/8.png";
import styles from "./styles/projects.module.scss";

const Projects = () => {
  return (
    <Section
      title="Готовые проекты"
      classNameSection={styles.projects}
      classNameInner={styles.projects__inner}
    >
      <ul className={styles.projects__list}>
        <li className={styles.projects__item}>
          <img className={styles.projects__itemImage} src={ListImage1} alt="" />
        </li>
        <li className={styles.projects__item}>
          <img className={styles.projects__itemImage} src={ListImage2} alt="" />
        </li>
        <li className={styles.projects__item}>
          <img className={styles.projects__itemImage} src={ListImage3} alt="" />
        </li>
        <li className={styles.projects__item}>
          <img className={styles.projects__itemImage} src={ListImage4} alt="" />
        </li>
        <li className={styles.projects__item}>
          <img className={styles.projects__itemImage} src={ListImage5} alt="" />
        </li>
        <li className={styles.projects__item}>
          <img className={styles.projects__itemImage} src={ListImage6} alt="" />
        </li>
        <li className={styles.projects__item}>
          <img className={styles.projects__itemImage} src={ListImage7} alt="" />
        </li>
        <li className={styles.projects__item}>
          <img className={styles.projects__itemImage} src={ListImage8} alt="" />
        </li>
      </ul>
    </Section>
  );
};

export default Projects;

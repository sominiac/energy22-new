import clsx from "clsx";
import Section from "@components/layout/Section";
import Text from "@components/ui/Text";
import AboutBGImage from "@assets/images/about-bg.png";
import AboutBG2Image from "@assets/images/about-bg2.png";
import styles from "./styles/about.module.scss";

const INFO_LIST = [
  "15 лет опыта в сфере электромонтажных работ — это не просто цифры, а гарантия качества",
  "Знаю все тонкости электропроводки",
  "Понимаю, как важно иметь надёжное электричество в доме",
  "Каждый день быстро решаю задачи, которые другие считают трудными. Устраняю проблемы любой сложности",
  "Подхожу к работе с душой и вниманием к деталям",
  "Работаю честно и прозрачно",
];

const About = () => {
  const isRightSideItem = (index: number, listLength: number) => {
    return index > listLength / 2;
  };

  return (
    <Section
      classNameSection={styles.about}
      classNameInner={styles.about__inner}
      title="Обо мне"
    >
      <ol className={styles.about__list}>
        {INFO_LIST.map((item, index, array) => {
          const isLeftSideItem = !isRightSideItem(index + 1, array.length);
          return (
            <li
              className={clsx(
                isLeftSideItem
                  ? styles.about__listLeftItem
                  : styles.about__listRightItem,
              )}
              style={{
                gridRowStart: isLeftSideItem
                  ? index + 1
                  : index + 1 - array.length / 2,
              }}
              key={index}
            >
              <Text className={styles.about__itemText} componentType="text2">
                {item}
              </Text>
            </li>
          );
        })}
      </ol>
      <img className={styles.about__innerImage} src={AboutBGImage} />
      <img className={styles.about__innerImage} src={AboutBG2Image} />
    </Section>
  );
};

export default About;

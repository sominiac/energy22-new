import Text from "@components/ui/Text";
import Section from "@components/layout/Section";
import PhoneIcon from "@assets/images/phone.png";
import WelcomeBgImage from "@assets/images/welcome-bg.png";
import styles from "./styles/welcome.module.scss";

const Welcome = () => {
  return (
    <Section
      classNameSection={styles.welcome}
      classNameInner={styles.welcome__inner}
    >
      <div className={styles.welcome__wrapper}>
        <Text
          className={styles.welcome__title}
          component="h2"
          componentType="h2"
        >
          Услуги профессионального электрика в Барнауле
        </Text>
        <Text
          className={styles.welcome__description}
          component="p"
          componentType="text1"
        >
          Электромонтажные работы любой сложности: от простых решений до
          масштабных проектов!
        </Text>
        <div className={styles.welcome__info}>
          <img src={PhoneIcon} alt="phone icon" />
          <Text
            className={styles.welcome__phone}
            component="h4"
            componentType="h4"
          >
            8 996 705-70-21
          </Text>
        </div>
        <Text className={styles.welcome__infoDescription} componentType="text4">
          Или пишите на WhatsApp{" "}
        </Text>
      </div>
      <img src={WelcomeBgImage} alt="a man in a special suit" />
    </Section>
  );
};

export default Welcome;

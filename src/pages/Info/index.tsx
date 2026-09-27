import Section from "@components/layout/Section";
import Text from "@components/ui/Text";
import Phone from "@components/ui/Phone";

import ContentImage from "@/assets/images/info/content.jpg";

import styles from "./styles/info.module.scss";

const Info = () => {
  return (
    <Section classNameSection={styles.info} classNameInner={styles.info__inner}>
      <div className={styles.info__content}>
        <Text className={styles.info__title} componentType="h3">
          Получить консультацию мастера
        </Text>
        <Text className={styles.info__text} componentType="text4">
          Хотите обсудить ваш проект или проблему с электрикой? По любым
          вопросам вы можете обратиться по телефону:
        </Text>
        <Phone />
      </div>
      <div className={styles.info__image}>
        <img src={ContentImage} alt="content" />
      </div>
    </Section>
  );
};

export default Info;

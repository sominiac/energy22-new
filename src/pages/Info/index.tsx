import Section from "@components/layout/Section";
import Text from "@components/ui/Text";

import PhoneIcon from "@/assets/images/phone.png";
import CopyIcon from "@/assets/images/info/copy.svg";
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
        <div className={styles.info__phone}>
          <img src={PhoneIcon} alt="phone icon" />
          <Text className={styles.info__phoneText} componentType="text1">
            8 996 705-70-21
          </Text>
          <img src={CopyIcon} alt="copy icon" />
        </div>
      </div>
      <div className={styles.info__image}>
        <img src={ContentImage} alt="content" />
      </div>
    </Section>
  );
};

export default Info;

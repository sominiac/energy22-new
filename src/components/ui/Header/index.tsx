import clsx from "clsx";
import Text from "@components/ui/Text";
import Tabs, { type TTabComponentProps } from "@components/ui/Tabs";
import { WORK_TIME } from "@/constants/info.ts";
import LogoImage from "@assets/images/logo.png";
import type { ITab } from "@/interfaces/Tabs/tabs.ts";
import styles from "./styles/header.module.scss";

const NAV_LIST: ITab[] = [
  { id: "1", text: "Обо мне" },
  { id: "2", text: "Проекты" },
  { id: "3", text: "Услуги" },
  { id: "4", text: "Преимущества" },
  { id: "5", text: "Этапы работы" },
  { id: "6", text: "Контакты" },
  { id: "7", text: "Вопрос-ответ" },
];

const NavItem = ({ className, text }: TTabComponentProps) => {
  return (
    <Text
      className={clsx(styles.header__navItem, className)}
      componentType="text2"
    >
      {text}
    </Text>
  );
};

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.header__logo}
        src={LogoImage}
        alt="Energy 22 logo"
      />
      <Tabs
        tabsList={NAV_LIST}
        wrapperComputedStyle={styles.header__nav}
        TabComponent={NavItem}
      />
      <Text componentType="text4">{WORK_TIME}</Text>
    </header>
  );
};

export default Header;

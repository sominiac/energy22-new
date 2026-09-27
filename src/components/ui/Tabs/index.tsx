import clsx from "clsx";
import TabItem from "@components/ui/Tabs/components/TabItem";

import type { ElementType } from "react";
import type { ITab } from "@/interfaces/Tabs/tabs.ts";

import styles from "./styles/tabs.module.scss";

export type TTabComponentProps = Omit<ITab, "id"> & {
  className?: string;
};

type TTabsProps = {
  tabsList: ITab[];
  wrapperComputedStyle?: string;
  wrapperItemStyle?: string;
  TabComponent?: ElementType<TTabComponentProps>;
};

const Tabs = ({
  tabsList,
  wrapperComputedStyle,
  wrapperItemStyle,
  TabComponent = TabItem,
}: TTabsProps) => {
  return (
    <nav className={clsx(styles.tabs, wrapperComputedStyle)}>
      {tabsList.map(({ id, text, isActive }) => (
        <TabComponent
          className={clsx(styles.tabs__item, wrapperItemStyle)}
          key={id}
          text={text}
          isActive={isActive}
        />
      ))}
    </nav>
  );
};

export default Tabs;

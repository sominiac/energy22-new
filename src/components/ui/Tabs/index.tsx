import clsx from "clsx";
import type { ElementType } from "react";
import type { ITab } from "@/interfaces/Tabs/tabs.ts";
import styles from "./styles/tabs.module.scss";

export type TTabComponentProps = Omit<ITab, "id">;

type TTabsProps = {
  tabsList: ITab[];
  wrapperComputedStyle?: string;
  TabComponent: ElementType<TTabComponentProps>;
};

const Tabs = ({ tabsList, wrapperComputedStyle, TabComponent }: TTabsProps) => {
  return (
    <nav className={clsx(styles.tabs, wrapperComputedStyle)}>
      {tabsList.map(({ id, text, isActive }) => (
        <TabComponent key={id} text={text} isActive={isActive} />
      ))}
    </nav>
  );
};

export default Tabs;

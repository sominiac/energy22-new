import Text from "@components/ui/Text";
import clsx from "clsx";

import type { TTabComponentProps } from "@components/ui/Tabs";

import styles from "./styles/tabItem.module.scss";

const TabItem = ({ className, text }: TTabComponentProps) => {
  return (
    <Text className={clsx(styles.tabItem, className)} componentType="text2">
      {text}
    </Text>
  );
};

export default TabItem;

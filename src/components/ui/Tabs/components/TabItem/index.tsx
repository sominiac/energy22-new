import clsx from "clsx";
import { NavHashLink } from "react-router-hash-link";
import Text from "@components/ui/Text";

import type { TTabComponentProps } from "@components/ui/Tabs";

import styles from "./styles/tabItem.module.scss";

interface ITextComponentProps extends Partial<TTabComponentProps> {
  className?: string;
  text?: string;
}

const TextComponent = ({ className, text }: ITextComponentProps) => {
  return (
    <Text className={clsx(styles.tabItem, className)} componentType="text2">
      {text}
    </Text>
  );
};

const TabItem = ({
  className,
  text,
  sectionId,
  isNavItem,
}: TTabComponentProps) => {
  if (isNavItem) {
    return (
      <NavHashLink to={`#${sectionId}`} smooth>
        <TextComponent className={className} text={text} />
      </NavHashLink>
    );
  }

  return <TextComponent className={className} text={text} />;
};

export default TabItem;

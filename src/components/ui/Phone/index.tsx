import clsx from "clsx";
import Text from "@components/ui/Text";
import PhoneIcon from "@assets/images/phone.png";
import CopyIcon from "@assets/images/info/copy.svg";

import type { IPhoneProps } from "@/interfaces/Phone/phone.ts";

import styles from "./styles/phone.module.scss";

const Phone = ({ wrappedPhoneTextClass, hasCopy = true }: IPhoneProps) => {
  return (
    <div className={styles.phone}>
      <img src={PhoneIcon} alt="phone icon" />
      <Text
        className={clsx(styles.phone__text, wrappedPhoneTextClass)}
        componentType="text1"
      >
        8 996 705-70-21
      </Text>
      {hasCopy && <img src={CopyIcon} alt="copy icon" />}
    </div>
  );
};

export default Phone;

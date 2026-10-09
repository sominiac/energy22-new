import clsx from "clsx";
import { useContext } from "react";

import Text from "@components/ui/Text";
import PhoneIcon from "@assets/images/phone.png";
import CopyIcon from "@assets/images/info/copy.svg";

import { ERROR_COPY_TEXT, PHONE, SUCCESS_COPY_TEXT } from "@/constants/info.ts";
import { NotificationContext } from "@/stores/contexts/notifications";
import type { IPhoneProps } from "@/interfaces/Phone/phone.ts";

import styles from "./styles/phone.module.scss";

const Phone = ({ wrappedPhoneTextClass, hasCopy = true }: IPhoneProps) => {
  const {
    onOpenNotification,
    setCopyNotificationText,
    setIsNotificationSuccess,
  } = useContext(NotificationContext);

  const onCopyClick = () => {
    navigator.clipboard
      .writeText(PHONE)
      .then(
        () => {
          setIsNotificationSuccess(true);
          setCopyNotificationText(SUCCESS_COPY_TEXT);
          onOpenNotification();
        },
        () => {
          setIsNotificationSuccess(false);
          setCopyNotificationText(ERROR_COPY_TEXT);
        },
      )
      .finally(onOpenNotification);
  };

  return (
    <div className={styles.phone}>
      <img src={PhoneIcon} alt="phone icon" />
      <Text
        className={clsx(styles.phone__text, wrappedPhoneTextClass)}
        componentType="text1"
      >
        {PHONE}
      </Text>
      {hasCopy && (
        <button className={styles.phone__copy} onClick={onCopyClick}>
          <img src={CopyIcon} alt="copy icon" />
        </button>
      )}
    </div>
  );
};

export default Phone;

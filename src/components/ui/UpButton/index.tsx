import clsx from "clsx";
import ArrowUpIcon from "@assets/images/arrow-up.png";
import styles from "./styles/upButton.module.scss";

type TUpButtonProps = {
  className?: string;
};

const UpButton = ({ className }: TUpButtonProps) => {
  return (
    <button className={clsx(styles.upButton, className)}>
      <img src={ArrowUpIcon} alt="arrow up" />
    </button>
  );
};

export default UpButton;

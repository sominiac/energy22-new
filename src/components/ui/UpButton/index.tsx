import clsx from "clsx";
import ArrowUpIcon from "@assets/images/arrow-up.png";
import styles from "./styles/upButton.module.scss";

type TUpButtonProps = {
  className?: string;
};

const UpButton = ({ className }: TUpButtonProps) => {
  const onScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={clsx(styles.upButton, className)}
      onClick={onScrollToTop}
    >
      <img src={ArrowUpIcon} alt="arrow up" />
    </button>
  );
};

export default UpButton;

import SupFooterImage from "@assets/images/sup-footer-image.png";

import styles from "./styles/supFooter.module.scss";

const SupFooter = () => {
  return (
    <section className={styles.supFooter}>
      <img
        className={styles.supFooter__image}
        src={SupFooterImage}
        alt="energy22"
      />
    </section>
  );
};

export default SupFooter;

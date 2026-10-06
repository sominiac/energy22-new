import clsx from "clsx";
import { type MouseEvent, useEffect, useRef } from "react";

import CloseIcon from "@assets/images/close-icon.svg?react";

import type { IModalProps } from "@/interfaces/Modal/modal.ts";

import styles from "./styles/modal.module.scss";

const Modal = ({
  isOpen,
  onClose,
  isVerticalView = false,
  children,
}: IModalProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef?.current;

    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
      closeDialog();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    const handleClose = () => {
      dialog.close();
      closeDialog();
    };

    dialog.addEventListener("close", handleClose);
    return () => {
      dialog.removeEventListener("close", handleClose);
    };
  }, []);

  const handleDialogClick = (event: MouseEvent<HTMLElement>) => {
    if (event.target === dialogRef.current) {
      closeDialog();
    }
  };

  const closeDialog = () => {
    onClose();
    document.body.style.overflow = "";
  };

  return (
    <dialog
      className={clsx(
        styles.modal,
        isVerticalView && styles.modal__verticalView,
      )}
      ref={dialogRef}
      onClick={handleDialogClick}
    >
      <button className={styles.modal__close} onClick={closeDialog}>
        <CloseIcon />
      </button>
      {children}
    </dialog>
  );
};

export default Modal;

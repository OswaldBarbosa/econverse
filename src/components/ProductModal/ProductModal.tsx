"use client";

import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import styles from "./ProductModal.module.scss";

type ProductModalProps = {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
};

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal} role="dialog" aria-modal="true" aria-label={product.title}>
      <button type="button" aria-label="Fechar modal" className={styles.modal__overlay} onClick={onClose} />

      <div className={styles.modal__content}>
        <button type="button" className={styles.modal__close} onClick={onClose} aria-label="Fechar">
          ×
        </button>

        <div className={styles.modal__imageWrap}>
          <Image src={product.image} alt={product.title} width={270} height={270} className={styles.modal__image} />
        </div>

        <div className={styles.modal__details}>
          <h2 className={styles.modal__title}>{product.title}</h2>
          <p className={styles.modal__price}>R$ {product.price.toFixed(2)}</p>
          <p className={styles.modal__description}>{product.description}</p>

          <div className={styles.modal__actions}>
            <div className={styles.modal__counter}>
              <button type="button" aria-label="Diminuir quantidade">-</button>
              <span>01</span>
              <button type="button" aria-label="Aumentar quantidade">+</button>
            </div>
            <button type="button" className={styles.modal__buyButton}>COMPRAR</button>
          </div>

          <Link href="/" className={styles.modal__link}>
            Veja mais detalhes do produto &gt;
          </Link>
        </div>
      </div>
    </div>
  );
}
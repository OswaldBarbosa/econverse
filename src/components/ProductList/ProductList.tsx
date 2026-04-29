"use client";

import { PRODUCT_TABS } from "@/constants";
import { Product } from "@/types/product";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ProductCard } from "../ProductCard/ProductCard";
import styles from "./ProductList.module.scss";

type ProductListProps = {
  products: Product[];
};

const ProductModal = dynamic(
  () => import("../ProductModal/ProductModal").then((module) => module.ProductModal),
  { ssr: false },
);

export function ProductList({ products }: ProductListProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  if (!products.length) {
    return <p className={styles.feedback}>Nenhum produto encontrado.</p>;
  }

  const handleCarouselScroll = (direction: "left" | "right") => {
    if (!carouselRef.current) {
      return;
    }

    const scrollAmount = carouselRef.current.clientWidth * 0.85;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className={styles.section} aria-labelledby="produtos-relacionados">
        <h2 id="produtos-relacionados" className={styles.section__title}>
          Produtos relacionados
        </h2>

        <div className={styles.section__tabs}>
          {PRODUCT_TABS.map((tab, index) => (
            <button
              key={tab}
              type="button"
              className={`${styles.section__tab} ${index === 0 ? styles.section__tabActive : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.section__carousel}>
          <button
            type="button"
            className={`${styles.section__arrow} ${styles["section__arrow--left"]}`}
            aria-label="Produtos anteriores"
            onClick={() => handleCarouselScroll("left")}
          >
            <FiChevronLeft />
          </button>

          <div ref={carouselRef} className={styles.section__track}>
            {products.map((product) => (
              <div key={`produto-${product.id}`} className={styles.section__item}>
                <ProductCard product={product} onClick={setSelectedProduct} />
              </div>
            ))}
          </div>

          <button
            type="button"
            className={`${styles.section__arrow} ${styles["section__arrow--right"]}`}
            aria-label="Próximos produtos"
            onClick={() => handleCarouselScroll("right")}
          >
            <FiChevronRight />
          </button>
        </div>
      </section>

      {selectedProduct ? (
        <ProductModal
          product={selectedProduct}
          isOpen={Boolean(selectedProduct)}
          onClose={() => setSelectedProduct(null)}
        />
      ) : null}
    </>
  );
}
import { Product } from "@/types/product";
import Image from "next/image";
import styles from "./ProductCard.module.scss";

type ProductCardProps = {
  product: Product;
  onClick: (product: Product) => void;
};

export function ProductCard({ product, onClick }: ProductCardProps) {
  const oldPrice = product.price * 1.18;
  const formatCurrency = (value: number) =>
    value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.card__button}
        onClick={() => onClick(product)}
        aria-label={`Abrir detalhes de ${product.title}`}
      >
        <div className={styles.card__imageWrap}>
          <Image
            src={product.image}
            alt={product.title}
            width={175}
            height={175}
            loading="lazy"
            sizes="(max-width: 600px) 60vw, (max-width: 1024px) 33vw, 175px"
            className={styles.card__image}
          />
        </div>

        <p className={styles.card__name}>{product.title}</p>
        <p className={styles.card__oldPrice}>R$ {formatCurrency(oldPrice)}</p>
        <p className={styles.card__price}>R$ {formatCurrency(product.price)}</p>
        <p className={styles.card__installments}>ou 2x de R$ {formatCurrency(product.price / 2)} sem juros</p>
        <p className={styles.card__shipping}>Frete grátis</p>
        <span className={styles.card__cta}>COMPRAR</span>
      </button>
    </article>
  );
}
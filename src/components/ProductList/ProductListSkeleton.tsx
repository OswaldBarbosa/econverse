import styles from "./ProductListSkeleton.module.scss";

const SKELETON_ITEMS = 4;

export function ProductListSkeleton() {
  return (
    <section className={styles.section} aria-label="Carregando produtos" aria-busy="true">
      <div className={styles.section__title} />

      <div className={styles.section__tabs}>
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index} className={styles.section__tab} />
        ))}
      </div>

      <div className={styles.section__grid}>
        {Array.from({ length: SKELETON_ITEMS }).map((_, index) => (
          <article key={index} className={styles.card}>
            <div className={styles.card__image} />
            <div className={styles.card__lineLg} />
            <div className={styles.card__lineMd} />
            <div className={styles.card__lineSm} />
            <div className={styles.card__button} />
          </article>
        ))}
      </div>
    </section>
  );
}
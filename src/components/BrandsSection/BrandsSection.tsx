import Image from "next/image";
import styles from "./BrandsSection.module.scss";

const BRANDS = Array.from({ length: 5 }, (_, index) => `Marca ${index + 1}`);

export function BrandsSection() {
  return (
    <section className={styles.brands} aria-labelledby="brands-title">
      <h2 id="brands-title" className={styles.brands__title}>
        Navegue por marcas
      </h2>

      <div className={styles.brands__grid}>
        {BRANDS.map((brand) => (
          <article key={brand} className={styles.brands__item}>
            <Image src="/logo.svg" alt={`Logo ${brand}`} width={98} height={28} className={styles.brands__logo} />
          </article>
        ))}
      </div>
    </section>
  );
}
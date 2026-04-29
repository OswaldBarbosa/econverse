import Image from "next/image";
import styles from "./PartnerBanners.module.scss";

type PartnerBannersProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  quantity?: number;
};

export function PartnerBanners({
  title = "Parceiros",
  description = "Lorem ipsum dolor sit amet, consectetur",
  buttonText = "CONFIRA",
  quantity = 2,
}: PartnerBannersProps) {
  const banners = Array.from({ length: quantity }, (_, index) => index + 1);

  return (
    <section className={styles.partner} aria-label="Parceiros">
      {banners.map((item) => (
        <article key={`partner-banner-${item}`} className={styles.partner__card}>
          <Image
            src="/banner-parceiros.svg"
            alt="Banner parceiros"
            width={1200}
            height={220}
            loading="lazy"
            sizes="(max-width: 900px) 100vw, 1200px"
            className={styles.partner__image}
          />

          <div className={styles.partner__content}>
            <h3>{title}</h3>
            <p>{description}</p>
            <button type="button">{buttonText}</button>
          </div>
        </article>
      ))}
    </section>
  );
}
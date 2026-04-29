"use client";

import { DepartmentsSection } from "@/components/DepartmentsSection/DepartmentsSection";
import { Header } from "@/components/Header/Header";
import { ProductList } from "@/components/ProductList/ProductList";
import { ProductListSkeleton } from "@/components/ProductList/ProductListSkeleton";
import { useProducts } from "@/hooks/useProducts";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./page.module.scss";

const BrandsSection = dynamic(
  () => import("@/components/BrandsSection/BrandsSection").then((module) => module.BrandsSection),
  { ssr: false },
);
const PartnerBannersSection = dynamic(
  () => import("@/components/PartnerBanners/PartnerBanners").then((module) => module.PartnerBanners),
  { ssr: false },
);
const NewsletterSection = dynamic(
  () => import("@/components/Newsletter/Newsletter").then((module) => module.Newsletter),
  { ssr: false },
);
const FooterSection = dynamic(
  () => import("@/components/Footer/Footer").then((module) => module.Footer),
  { ssr: false },
);

export default function HomePage() {
  const { products, loading, error } = useProducts();

  return (
    <>
      <Header />

      <main>
        <section className={styles.hero}>
          <Image
            src="/banner-promocao.svg"
            alt="Venha conhecer nossas promoções"
            width={1600}
            height={500}
            priority
            className={styles.hero__image}
          />
          <div className={styles.hero__content}>
            <h1 className={styles.hero__title}>Venha conhecer nossas promoções</h1>
            <p className={styles.hero__subtitle}>
              <strong>50% Off</strong> nos produtos
            </p>
            <button type="button" className={styles.hero__button}>
              Ver produto
            </button>
          </div>
        </section>

        <div className={styles.content}>
          <DepartmentsSection />

          {loading ? <ProductListSkeleton /> : null}
          {error ? <p>Erro ao carregar produtos.</p> : null}
          {!loading && !error ? <ProductList products={products} /> : null}

          <PartnerBannersSection />

          <BrandsSection />

          <NewsletterSection />
        </div>
      </main>

      <FooterSection />
    </>
  );
}
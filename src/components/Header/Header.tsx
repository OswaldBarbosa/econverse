"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiBox,
  FiCreditCard,
  FiHeart,
  FiSearch,
  FiShield,
  FiShoppingCart,
  FiTruck,
  FiUser,
} from "react-icons/fi";
import { PiCrownSimple } from "react-icons/pi";

import { useHeaderCategories } from "@/hooks/useHeaderCategories";

import styles from "./Header.module.scss";

export function Header() {
  const { categories, activeCategory, setActiveCategory } = useHeaderCategories();

  return (
    <header className={styles.header}>
      <div className={styles.header__topInfo}>
        <p>
          <FiShield aria-hidden="true" /> Compra <strong>100% segura</strong>
        </p>
        <p>
          <FiTruck aria-hidden="true" /> <strong>Frete grátis</strong> acima de R$ 200
        </p>
        <p>
          <FiCreditCard aria-hidden="true" /> <strong>Parcele</strong> suas compras
        </p>
      </div>

      <div className={styles.header__main}>
        <Link href="/" className={styles.header__logoLink} aria-label="Ir para página inicial">
          <Image src="/logo.svg" alt="Econverse" width={139} height={41} priority />
        </Link>

        <div className={styles.header__searchArea}>
          <input
            type="search"
            placeholder="O que você está buscando?"
            aria-label="Buscar produtos"
            className={styles.header__searchInput}
          />
          <FiSearch className={styles.header__searchIcon} aria-hidden="true" />
        </div>

        <div className={styles.header__actions}>
          <button type="button" aria-label="Pedidos" className={styles.header__actionButton}>
            <FiBox />
          </button>
          <button type="button" aria-label="Favoritos" className={styles.header__actionButton}>
            <FiHeart />
          </button>
          <button type="button" aria-label="Perfil" className={styles.header__actionButton}>
            <FiUser />
          </button>
          <button type="button" aria-label="Carrinho" className={styles.header__actionButton}>
            <FiShoppingCart />
          </button>
        </div>
      </div>

      <nav className={styles.header__categories} aria-label="Categorias principais">
        {categories.map((category) => {
          const isActive = activeCategory === category.label;
          const className = category.isCrown
            ? `${styles.header__categoryItemCrown} ${isActive ? styles.header__categoryItemActive : ""}`
            : isActive
              ? styles.header__categoryItemActive
              : styles.header__categoryItem;

          return (
            <Link
              key={category.label}
              href="/"
              className={className}
              onClick={(event) => {
                event.preventDefault();
                setActiveCategory(category.label);
              }}
            >
              {category.isCrown ? <PiCrownSimple aria-hidden="true" /> : null}
              {category.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
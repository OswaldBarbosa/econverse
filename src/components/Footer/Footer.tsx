import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

import { FOOTER_LINKS } from "@/constants";

import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <section className={styles.footer__brand}>
          <Image src="/logo.svg" alt="Econverse" width={177} height={52} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className={styles.footer__social}>
            <Link href="https://www.instagram.com/econverse.ag/" target="_blank" aria-label="Instagram">
              <FiInstagram />
            </Link>
            <Link href="https://www.facebook.com/agenciaeconverse/?locale=pt_BR" target="_blank" aria-label="Facebook">
              <FiFacebook />
            </Link>
            <Link href="https://br.linkedin.com/company/econverse" target="_blank" aria-label="LinkedIn">
              <FiLinkedin />
            </Link>
          </div>
        </section>

        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <nav key={title} className={styles.footer__column} aria-label={title}>
            <h3>{title}</h3>
            {links.map((link) => (
              <Link key={link} href="/">
                {link}
              </Link>
            ))}
          </nav>
        ))}
      </div>

      <div className={styles.footer__bottom}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
}
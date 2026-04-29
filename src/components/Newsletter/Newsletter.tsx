import styles from "./Newsletter.module.scss";

export function Newsletter() {
  return (
    <section className={styles.newsletter} aria-labelledby="newsletter-title">
      <div className={styles.newsletter__container}>
        <div className={styles.newsletter__content}>
          <h2 id="newsletter-title">Inscreva-se na nossa newsletter</h2>
          <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </div>

        <form className={styles.newsletter__form}>
          <div className={styles.newsletter__inputs}>
            <input type="text" placeholder="Digite seu nome" aria-label="Nome" />
            <input type="email" placeholder="Digite seu e-mail" aria-label="E-mail" />
            <button type="submit">INSCREVER</button>
          </div>

          <label className={styles.newsletter__checkbox}>
            <input type="checkbox" />
            Aceito os termos e condições
          </label>
        </form>
      </div>
    </section>
  );
}
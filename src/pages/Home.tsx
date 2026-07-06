import styles from "./Home.module.css";

export function Home() {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Zachary Hill</h1>
        <p className={styles.subtitle}>Software Engineer | Data Scientist</p>
      </div>

      <section className={styles.about}>
        <img
          src="/headshot.jpeg"
          alt="Zachary Hill"
          className={styles.headshot}
        />
        <h2 className={styles.sectionTitle}>Background</h2>
        <ul className={styles.list}>
          <li>Master's in CS from UPenn</li>
          <li>Bachelor's in Math from Towson</li>
          <li>
            Five YOE developing financial models, doing data analysis, and
            assesing risk at KKR and Transamerica
          </li>
        </ul>
        <p className={styles.bio}>
          Currently a teaching assistant at UPenn for machine learning and
          object-oriented programming, and a course development assistant for
          web development.
        </p>
        <p className={styles.bio}>
          This site is a place to present my work and write about what I learn
          along the way.
        </p>
      </section>
    </>
  );
}

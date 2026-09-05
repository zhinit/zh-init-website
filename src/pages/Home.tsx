import styles from "./Home.module.css";

export function Home() {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Zachary Hill</h1>
        <p className={styles.subtitle}>
          Full-Stack TypeScript Developer | Building AI-Powered Applications
        </p>
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
            assessing risk at KKR and Transamerica
          </li>
        </ul>
        <p className={styles.bio}>
          Currently a course development assistant at UPenn for web development
          and a teaching assistant for algorithms, and OOP.
        </p>
        <p className={styles.bio}>
          This site is a place to present my work and write about what I learn
          along the way.
        </p>
      </section>
    </>
  );
}

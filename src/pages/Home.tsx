import { Link } from 'react-router'
import styles from './Home.module.css'

export function Home() {
  return (
    <>
      <section className={styles.hero}>
        <p className={styles.greeting}>Welcome</p>
        <h1 className={styles.title}>
          Building things,
          <br />
          writing about <span className={styles.titleAccent}>what I learn</span>.
        </h1>
        <p className={styles.subtitle}>
          A space for projects, technical write-ups, and the kind of notes you
          wish you had when you started.
        </p>
      </section>

      <div className={styles.divider} />

      <div className={styles.sections}>
        <Link to="/projects" className={styles.section}>
          <p className={styles.sectionLabel}>Explore</p>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <p className={styles.sectionDesc}>
            Things I've built, with source code, live demos, and the reasoning
            behind the decisions.
          </p>
          <span className={styles.sectionLink}>
            View projects <span className={styles.arrow}>&rarr;</span>
          </span>
        </Link>

        <Link to="/blog" className={styles.section}>
          <p className={styles.sectionLabel}>Read</p>
          <h2 className={styles.sectionTitle}>Blog</h2>
          <p className={styles.sectionDesc}>
            Technical write-ups on things worth understanding deeply. No fluff,
            no filler.
          </p>
          <span className={styles.sectionLink}>
            Read posts <span className={styles.arrow}>&rarr;</span>
          </span>
        </Link>
      </div>
    </>
  )
}

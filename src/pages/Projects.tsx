import styles from './Projects.module.css'

export function Projects() {
  return (
    <>
      <div className={styles.header}>
        <p className={styles.label}>Projects</p>
        <h1 className={styles.title}>What I've built</h1>
        <p className={styles.description}>
          Each project includes source code, context on the decisions made, and
          what I learned along the way.
        </p>
      </div>

      <div className={styles.empty}>
        <p className={styles.emptyText}>Projects coming soon.</p>
      </div>
    </>
  )
}

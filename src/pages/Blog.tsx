import styles from './Blog.module.css'

export function Blog() {
  return (
    <>
      <div className={styles.header}>
        <p className={styles.label}>Blog</p>
        <h1 className={styles.title}>Writing</h1>
        <p className={styles.description}>
          Technical write-ups on things worth understanding deeply.
        </p>
      </div>

      <div className={styles.empty}>
        <p className={styles.emptyText}>Posts coming soon.</p>
      </div>
    </>
  )
}

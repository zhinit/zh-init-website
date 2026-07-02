import { Link } from 'react-router'
import { formatDate, posts } from '../utils/posts'
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

      {posts.length === 0 ? (
        <div className={styles.empty}>
          <p className={styles.emptyText}>Posts coming soon.</p>
        </div>
      ) : (
        <ul className={styles.list}>
          {posts.map((post) => (
            <li key={post.slug} className={styles.item}>
              <p className={styles.date}>{formatDate(post.date)}</p>
              <h2 className={styles.postTitle}>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className={styles.postDescription}>{post.description}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

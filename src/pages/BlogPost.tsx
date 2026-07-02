import { Link, useParams } from 'react-router'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { formatDate, getPost } from '../utils/posts'
import styles from './BlogPost.module.css'

export function BlogPost() {
  const { slug } = useParams()
  const post = slug ? getPost(slug) : undefined

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h1 className={styles.title}>Post not found</h1>
        <p>
          <Link to="/blog">Back to all posts</Link>
        </p>
      </div>
    )
  }

  return (
    <article>
      <header className={styles.header}>
        <p className={styles.date}>{formatDate(post.date)}</p>
        <h1 className={styles.title}>{post.title}</h1>
      </header>
      <div className={styles.content}>
        <Markdown remarkPlugins={[remarkGfm]}>{post.body}</Markdown>
      </div>
      <footer className={styles.footer}>
        <Link to="/blog">&larr; All posts</Link>
      </footer>
    </article>
  )
}

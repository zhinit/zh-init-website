import { Link, useParams } from 'react-router'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { HNMark } from '../components/HNMark'
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
        {post.hn && (
          <a
            className={styles.hnLink}
            href={`https://news.ycombinator.com/item?id=${post.hn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <HNMark className={styles.hnMark} />
            Read the discussion which made it to the front page of Hacker News
          </a>
        )}
      </header>
      <div className={styles.content}>
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            a: ({ href, children, ...props }) => {
              const isExternal =
                href && (href.startsWith('http://') || href.startsWith('https://'))
              if (isExternal) {
                return (
                  <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                    {children}
                  </a>
                )
              }
              if (href?.startsWith('/')) {
                return <Link to={href}>{children}</Link>
              }
              return (
                <a href={href} {...props}>
                  {children}
                </a>
              )
            },
          }}
        >
          {post.body}
        </Markdown>
      </div>
      <footer className={styles.footer}>
        <Link to="/blog">&larr; All posts</Link>
      </footer>
    </article>
  )
}

import { NavLink, Outlet } from 'react-router'
import styles from './Layout.module.css'

export function Layout() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink to="/" className={styles.logo}>
            zh_init
          </NavLink>
          <div className={styles.links}>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </div>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href="https://github.com/zhinit" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://x.com/zhinit_x" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://www.linkedin.com/zh_init" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}

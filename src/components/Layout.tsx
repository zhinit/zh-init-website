import { NavLink, Outlet } from 'react-router'
import styles from './Layout.module.css'

export function Layout() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink to="/" className={styles.logo}>
            Home
          </NavLink>
          <NavLink to="/projects" className={styles.navLink}>Projects</NavLink>
          <NavLink to="/blog" className={styles.navLink}>Blog</NavLink>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href="https://github.com/zhinit" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/zhinit" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}

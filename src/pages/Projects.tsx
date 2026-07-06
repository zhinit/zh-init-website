import { Link } from 'react-router'
import styles from './Projects.module.css'

export const projects = [
  {
    title: 'Prediction Markets Analysis',
    slug: 'prediction-markets-analysis',
    description:
      'Are prediction markets priced accurately? This project pulls 25 million trades from Kalshi and every MLB game from the MLB Stats API into a local DuckDB database, then tests whether game winner market prices reflect actual win probabilities.',
    github: 'https://github.com/zhinit/prediction-market-analysis',
    posts: [
      {
        title: 'Pulling every MLB trade from Kalshi',
        slug: 'pulling-every-mlb-trade-from-kalshi',
      },
      {
        title: 'Do Kalshi MLB game winner prices reflect accurate probabilities?',
        slug: 'kalshi-mlb-game-winner-calibration',
      },
    ],
  },
  {
    title: 'Kick With Reverb',
    slug: 'kick-with-reverb',
    description:
      'A browser-based DAW for techno producers. Kick, noise, and reverb layers run through a C++ JUCE audio engine compiled to WebAssembly. Includes user presets, full keyboard shortcuts, and AI kick generation using a PyTorch diffusion model on serverless GPUs.',
    github: 'https://github.com/zhinit/KickWithReverb',
    app: 'https://kick-with-reverb.vercel.app',
    posts: [],
  },
]

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  )
}

export function Projects() {
  return (
    <>
      <div className={styles.header}>
        <p className={styles.label}>Projects</p>
      </div>

      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project.title} className={styles.item}>
            <div className={styles.titleRow}>
              <h2 className={styles.projectTitle}>
                <Link to={`/projects/${project.slug}`}>{project.title}</Link>
              </h2>
              <div className={styles.icons}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconLink}
                  title="GitHub"
                >
                  <GitHubIcon />
                </a>
                {project.app && (
                  <a
                    href={project.app}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconLink}
                    title="Live app"
                  >
                    <GlobeIcon />
                  </a>
                )}
              </div>
            </div>
            <p className={styles.projectDescription}>{project.description}</p>
            {project.posts.length > 0 && (
              <>
                <h3 className={styles.postsHeading}>Blog posts</h3>
                <ul className={styles.posts}>
                  {project.posts.map((post) => (
                    <li key={post.slug}>
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Blog } from './pages/Blog'

const BlogPost = lazy(() =>
  import('./pages/BlogPost').then((m) => ({ default: m.BlogPost })),
)

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
          <Route
            path="blog/:slug"
            element={
              <Suspense fallback={null}>
                <BlogPost />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

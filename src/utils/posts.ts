interface PostFrontmatter {
  title: string
  date: string
  description: string
  hn?: string
}

export interface Post extends PostFrontmatter {
  slug: string
  body: string
}

const files = import.meta.glob<string>('../../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function parseFrontmatter(raw: string): { frontmatter: PostFrontmatter; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n/)
  if (!match) {
    throw new Error('Post is missing frontmatter')
  }

  const fields: Record<string, string> = {}
  for (const line of match[1].split('\n')) {
    const colon = line.indexOf(':')
    if (colon === -1) continue
    fields[line.slice(0, colon).trim()] = line.slice(colon + 1).trim()
  }

  const { title, date, description, hn } = fields
  if (!title || !date || !description) {
    throw new Error('Post frontmatter must include title, date, and description')
  }

  return {
    frontmatter: { title, date, description, hn },
    body: raw.slice(match[0].length),
  }
}

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.replace(/^.*\//, '').replace(/\.md$/, '')
    const { frontmatter, body } = parseFrontmatter(raw)
    return { slug, body, ...frontmatter }
  })
  .sort((a, b) => b.date.localeCompare(a.date))

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

export function formatDate(date: string): string {
  const [year, month, day] = date.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

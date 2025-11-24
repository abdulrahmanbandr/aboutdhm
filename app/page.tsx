import Link from 'next/link';
import { posts } from '@/lib/posts';

export default function Home() {
  return (
    <main>
      <header style={{ marginBottom: '2rem' }}>
        <nav className="home-nav">
          <Link href="/about">About</Link>
          <a href="https://www.linkedin.com/in/abdulrahman-aldahhas-22b37a274/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:ARbandr@outlook.sa">Email</a>
          <a href="https://x.com/chairmandhm?s=21" target="_blank" rel="noopener noreferrer">
            X
          </a>
          <a href="https://github.com/abdulrahmanbandr" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </nav>
      </header>

      <section>
        <h2 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Essays:
        </h2>
        <ul className="essays-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

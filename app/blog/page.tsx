// app/blog/page.tsx
import Link from 'next/link';
import { posts } from '@/lib/posts';

export default function BlogPage() {
  const sorted = [...posts].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date),
  );

  return (
    <section className="container">
      <h1>Essays</h1>
      <p>I write when I have something sharp to say, not to fill a schedule.</p>

      <ul className="posts-list">
        {sorted.map((post) => (
          <li key={post.slug} className="post-item">
            <Link href={`/blog/${post.slug}`} className="post-title">
              {post.title}
            </Link>
            <p className="post-summary">{post.summary}</p>
            <span className="post-date">
              {new Date(post.date).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
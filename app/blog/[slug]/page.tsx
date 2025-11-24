import { posts } from '@/lib/posts';
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="container">
            <header>
                <h1>{post.title}</h1>
                <p className="post-date">{new Date(post.date).toLocaleDateString()}</p>
            </header>
            <div className="post-content">
                <p>{post.content}</p>
            </div>
        </article>
    );
}

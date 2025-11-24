export interface Post {
    slug: string;
    title: string;
    date: string;
    summary: string;
    content?: string; // Simple content for now, maybe markdown later
}

export const posts: Post[] = [
    {
        slug: 'senior-year',
        title: 'Senior year',
        date: '2025-01-12',
        summary: 'This is my first blog post.',
        content: 'Welcome to my new blog! This is a sample post to test the system.',
    },
    {
        slug: 'minimalism',
        title: 'On Minimalism',
        date: '2023-10-27',
        summary: 'Why I chose a minimal design.',
        content: 'Minimalism focuses on the content. That is why this blog looks the way it does.',
    },
];

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
        content: 'stay tuned ! ',
    },
    {
        slug: 'Littile-thoughts-matter',
        title: 'Little thoughts matter',
        date: '2025-01-12',
        summary: 'Why I chose a minimal design.',
        content: 'stay tuned !',
    },
];

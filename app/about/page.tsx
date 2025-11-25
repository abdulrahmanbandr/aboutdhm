import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About - aboutDHM",
    description: "About Abdulrahman (DHM)",
};

export default function AboutPage() {
    return (
        <section className="container">
            <div className="hero">
                <h1>About Me</h1>
                <p>
                    Hi! I'm Abdulrahman. The strongest thing that drives me in life is fear—not the kind that makes you weak, but the kind that wakes you up, pushes you forward, and reminds you that success doesn't come to someone who's comfortable. I'm afraid of wasting time, and I'm afraid of passing by opportunities without grabbing them. Maybe that's why I'm attached to ideas—not because they're ideas, but because they're possibilities and open doors for ambition.
                </p>
                <p>
                    I've always been the kind of person who needs things to make sense. I feel at ease when the full picture becomes clear. And even though I'm calm, I'm social and I enjoy people, and I believe no one can live alone. Life feels simpler to me when I break down complicated things, and I always find that understanding is there once you remove the extra layers.
                </p>
                <p>
                    I learn by observing first, then jumping in, messing up, and trying again until it clicks. I like working in a way that keeps me aware and present, whether I'm on my own or with people who think on the same frequency. Technology to me isn't just a field—it's a way of thinking, a mindset that builds, connects, and creates experiences you can feel. And maybe the most important thing to me is that a person stays balanced—being human means having strong days and ordinary ones, winning and stumbling, rising and resting, without losing yourself.
                </p>
            </div>
        </section>
    );
}

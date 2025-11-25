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
                    Hi! I'm Abdulrahman, and I’ve always seen myself as someone who moves through life with awareness rather than rush. Fear plays a part in that—not the kind that limits you, but the kind that reminds you time matters, chances don’t repeat themselves, and comfort rarely leads anywhere worth reaching. That’s probably why ideas stay with me, not because they’re ideas, but because they carry potential and a sense of possibility.
                </p>
                <p>
                    I've always been the kind of person who needs things to make sense. I feel at ease when the full picture becomes clear. And even though I'm calm, I'm social and I enjoy people, and I believe no one can live alone. Life feels simpler to me when I break down complicated things, and I always find that understanding is there once you remove the extra layers.
                </p>
                <p>
                    I learn by observing first, then jumping in, messing up, and trying again until it clicks. I like working in a way that keeps me aware and present, whether I'm on my own or with people who think on the same frequency. Technology to me isn't just a field—it's a way of thinking, a mindset that builds, connects, and creates experiences you can feel. And maybe the most important thing to me is that a person stays balanced—being human means having strong days and ordinary ones, winning and stumbling, rising and resting, without losing yourself، Small steps are fine sometimes.
                </p>
            </div>
        </section>
    );
}

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
                    Hi, I'm Abdulrahman aldahhas . I'm a software engineer passionate about building clean, efficient, and user-centric applications.
                </p>
                <p>
                    I believe in the power of minimalism—stripping away the unnecessary to focus on what truly matters. This philosophy reflects in my code, my designs, and my lifestyle.
                </p>
            </div>

            <div className="journey">
                <h2>My Journey</h2>
                <p>
                    My journey into tech started with a curiosity about how things work. Over the years, I've honed my skills in full-stack development, exploring various technologies and frameworks.
                </p>
                <p>
                    Currently, I'm focused on Next.js and the React ecosystem, constantly learning and experimenting with new ideas.
                </p>
            </div>
        </section>
    );
}

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
                    Hi Manal, I'm Abdulrahman aldahhas, a cloud engineer and much more! .
                </p>
                <p>

                </p>
            </div>

            <div className="journey">
                <h2>My Journey</h2>
                <p>
                    stay tuned !
                </p>
                <p>
                    stay tuned ! .
                </p>
            </div>
        </section>
    );
}

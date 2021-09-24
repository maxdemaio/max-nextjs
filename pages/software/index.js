import Container from '@/components/Container';
import Link from 'next/link';

export default function Software() {
    
    return (
        <Container title="Software – Max DeMaio">
        <div className="text-lg flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
            <section>
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 text-black dark:text-white">Software</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    During this workshop, you'll learn how to integrate Prisma with Next.js and build a statically-generated site that displays a list of your favorite songs. We'll use Chakra UI for styling and deploy our site with Vercel.
                </p>
            </section>
            <section>
                    <h2 className="font-bold text-3xl tracking-tight mb-8 mt-8 text-black dark:text-white">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="dark:hover:text-white hover:text-black text-gray-600 dark:text-gray-400">
                                <a href="https://github.com/maxwelldemaio/langlab" className="my-link">LangLab</a> is a free and open source language learning website that allows users to practice the conjugations of the 25 most common verbs in English. Helpful resources have also been provided to help learners on their path.
                            </p>
                        </div>
                        <div>
                            <p className="dark:hover:text-white hover:text-black text-gray-600 dark:text-gray-400">
                                <a href="https://github.com/maxwelldemaio/thelangbot" className="my-link">The Language Bot</a> is a Twitter bot to help individuals learn foreign languages. It is naturally building a community through tweets by retweeting #100DaysOfLanguage and #langtwt.
                            </p>
                        </div>
                        <div>
                            <p className="dark:hover:text-white hover:text-black text-gray-600 dark:text-gray-400">
                                <a href="https://github.com/maxwelldemaio/finance" className="my-link">Finance</a> is a business application via which you can manage portfolios of stocks, check stock prices, and buy/sell stocks utlizing IEX's API. Also, with Chart.js investors can view a pie chart of their portfolio distribution.
                            </p>
                        </div>
                        <div>
                            <p className="dark:hover:text-white hover:text-black text-gray-600 dark:text-gray-400">
                                <a href="https://github.com/maxwelldemaio/house_party" className="my-link">House Party</a>, a Spotify collaborative music playing system built with React and Django REST. With Spotify authentication, listeners can create listening parties others can join. One can pause/play and skip tracks from the host's music queue.
                            </p>
                        </div>
                    </div>
            </section>
            <section className="mb-8">
                <h2 className="font-bold text-3xl tracking-tight mb-8 mt-8 text-black dark:text-white">Tech Stack</h2>
                <ul>
                    <li className="mb-4 text-gray-600 dark:text-gray-400"><strong>Languages:</strong> Java, Python, JavaScript, HTML, CSS, and SQL.</li>
                    <li className="mb-4 text-gray-600 dark:text-gray-400"><strong>Tools:</strong> Git, Postman, Redis, Markdown, Visual Studio Code, and Eclipse.</li>
                </ul>
            </section>
            <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mt-4">
                <Link href="/">
                    <a className="underline text-blue-400 hover:text-blue-600">← Back</a>
                </Link>
                <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mt-8 mb-8" />
                <p className="mb-8">
                    <span><a className="underline text-blue-400 hover:text-blue-600" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a><span className="text-gray-600 dark:text-gray-400"> {(new Date().getFullYear())} © Maxwell DeMaio</span></span>
                </p>
            </footer>
        </div>
        </Container>
    );
}
import Head from 'next/head';
import { getSortedPostsData } from '../../lib/posts';
import Date from '@/components/Date';
import Container from '@/components/Container';
import Link from 'next/link'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

// Pass our blogs as a prop to the Home component
export default function PostHome({ allPostsData }) {
    const blogTitle = "max overflow";

    return (
        <Container title="Posts | Blog – Max DeMaio">
        <div className="text-lg flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 text-black dark:text-white">
                Blog{' '}
                <Link href="/videos" >
                    <a className="text-gray-800 dark:text-gray-100 opacity-20 hover:opacity-50">
                        Videos
                    </a>
                </Link>
            </h1>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
                <strong>{blogTitle}</strong> is a blog about business, language, and computer science.
                Sometimes my thoughts overflow and end up here for safekeeping.
            </p>
            
            <section>
                <ul>
                    {allPostsData.map(({ id, date, title }) => (
                        <Link key={id} href={`/posts/${id}`}>
                            <a>
                                <li key={id} className="mb-4 opacity-60 hover:opacity-100">
                                    <div className="text-black dark:text-white">{title}</div>
                                    <div>
                                        <span className="text-gray-500 dark:text-gray-500">
                                            <Date dateString={date} />
                                        </span>
                                        <span className="text-gray-400 dark:text-gray-600"> · (X)min</span>
                                    </div>
                                </li>
                            </a>
                        </Link>
                    ))}
                </ul>
            </section>

            <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mt-4">
                <Link href="/">
                    <a className="underline text-blue-400 hover:text-blue-600">← Back</a>
                </Link>
                <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mt-8 mb-8" />
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    <span><a className="underline text-blue-400 hover:text-blue-600" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> 2021 © Maxwell DeMaio</span>
                </p>
            </footer>
        </div>
        </Container>
    );
}
import Head from 'next/head';
import { getSortedPostsData } from '../../lib/posts'
import Date from '@/components/Date'
import NestedFooter from '@/components/NestedFooter'
import Container from '@/components/Container'

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
        <>
        <Container title="About – Max DeMaio">
            {/*Blog post header */}
            <header>
                <h1 className="select-none font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    Blog{' '}
                    <a href="/talks" className="text-gray-800 dark:text-gray-100 opacity-20 hover:opacity-50">
                        Videos/Talks
                    </a>
                </h1>

                <p><strong>{blogTitle}</strong> is a blog about business, language, and computer science.
                    Sometimes my thoughts overflow and end up here for safekeeping.
                </p>
            </header>

            <div className="mt-8 mb-8 mx-auto p-4 prose prose-lg">
                {/* Add this <section> tag below the existing <section> tag */}
                <main>
                    <ul>
                        {allPostsData.map(({ id, date, title }) => (
                            <li className="opacity-60 hover:opacity-100" key={id}>
                                <div className="text-black">{title}</div>
                                <div>
                                    <Date className="text-gray-400" dateString={date} />
                                    <span className="text-gray-300"> · (X)min</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </main>
                <NestedFooter></NestedFooter>
            </div>
        </Container>
        </>
    )
}
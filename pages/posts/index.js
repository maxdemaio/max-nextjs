import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { getSortedPostsData } from '../../lib/posts';
import Link from 'next/link'
import Date from '../../components/date'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    console.log(allPostsData[0]);
    return {
        props: {
            allPostsData
        }
    }
}

const blogTitle = "max overflow";

// Pass our blogs as a prop to the Home component
export default function PostHome({ allPostsData }) {
    return (
        <>
            {/* PostHome head */}
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Post content here"
                />
                <title>Posts Home | Max DeMaio</title>
            </Head>

    
            {/* Tailwind CSS Typography prose */}
            <div className="mt-8 mb-8 mx-auto p-4 prose prose-lg">
                {/*Blog post header */}
                <header className="select-none">
                    <h1 className="mb-0"> Blog <a href="/talks" className="opacity-20 hover:opacity-50">Videos/Talks</a></h1>
                </header>

                {/* Add this <section> tag below the existing <section> tag */}
                <main>
                    <ul>
                        {allPostsData.map(({ id, date, title }) => (
                            <li className="opacity-60 hover:opacity-100" key={id}>
                                <div className="text-black">{title}</div>
                                <div className="text-gray-600">
                                    <Date dateString={date} />
                                    <span className="text-gray-400"> · (X)min</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </main>

                {/* PostHome footer */}
                <footer>
                    <Link href="/">
                        <a>← Back</a>
                    </Link>
                    <hr></hr>
                </footer>
            </div>
        </>
    )
}
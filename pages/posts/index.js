import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { getSortedPostsData } from '../../lib/posts';
import Link from 'next/link'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
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
                    <h1 class="mb-0"> Blog <a href="/talks" class="opacity-20 hover:opacity-50 !border-none !font-400">Videos/Talks</a></h1>
                </header>

                {/* Add this <section> tag below the existing <section> tag */}
                <main>
                    <ul>
                        {allPostsData.map(({ id, date, title }) => (
                            <li key={id}>
                                {title}
                                <br />
                                {id}
                                <br />
                                {date}
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
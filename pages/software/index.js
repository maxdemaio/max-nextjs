import Head from 'next/head'
import NestedFooter from '../../components/NestedFooter'

// export async function getStaticProps() {
//     // TODO
//     // const allSoftware = getSoftware()
//     // return {
//     //     props: {
//     //         allRepos
//     //     }
//     // }
//     return;
// }


export default function Software() {
    return (
        <>
        {/* Software head */}
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="Post content here"
            />
            <title>Software | Max DeMaio</title>
        </Head>

            <div className="mt-8 mb-8 mx-auto p-4 prose prose-lg">
            <main>
                <header>
                    <h1 className="select-none">Software</h1>
                </header>

                {/* Add this <section> tag below the existing <section> tag */}
                <h2>Featured projects</h2>
                <div>
                    <a href="https://nextjs.org/docs">
                        <h3>Documentation &rarr;</h3>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn">
                        <h3>Learn &rarr;</h3>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/master/examples"
                    >
                        <h3>Examples &rarr;</h3>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    >
                        <h3>Deploy &rarr;</h3>
                        <p>
                            Instantly deploy your Next.js site to a public URL with Vercel.
                        </p>
                    </a>
                </div>

                <h2>Software repos</h2>
                <table id="myTable">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Language</th>
                            <th scope="col">Created at</th>
                            <th scope="col">Forks</th>
                            <th scope="col">Open issues</th>
                            <th scope="col">Size (kb)</th>
                            <th scope="col">Stars</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="#" className="">repo name</a></td>
                            <td>description</td>
                            <td>language</td>
                            <td>creations</td>
                            <td>forks</td>
                            <td>issues</td>
                            <td>size kb</td>
                            <td>stars</td>
                        </tr>
                    </tbody>
                </table>
            </main>

            <NestedFooter></NestedFooter>
        </div>
        </>
    )
}
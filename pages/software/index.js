import Head from 'next/head'
import Link from 'next/link'

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


            {/* Tailwind CSS Typography prose */}
            <div className="mt-8 mb-8 mx-auto p-4 prose prose-lg">
                {/*Blog post header */}
                <header className="select-none">
                    <h1 class="mb-0">Software</h1>
                </header>

                {/* Add this <section> tag below the existing <section> tag */}
                <main>
                    <div>Software repos</div>
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

                {/* Software footer */}
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
import Head from 'next/head'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const blogName = 'max overflow'
export const siteTitle = 'Next.js Sample Website'

// Layout for my blog posts
export default function PostLayout({ children }) {
    return (
        <>
        {/* Blog post head */}
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="Post content here"
            />
            <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
            <title></title>
        </Head>

        {/*Blog post header */}
        <header>
            {/* Will show at top of blog post */}
            <h1 className={utilStyles.heading2Xl}>{blogName}</h1>
        </header>

        {/* Blog post content */}
        <div className="blogPost mt-8 mb-8 mx-auto prose prose-lg prose-blue">
            <main>{children}</main>
            <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>
        </div>
        </>
    );
}
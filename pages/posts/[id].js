import { getAllPostIds, getPostData } from '@/lib/posts';
import DateComp from '@/components/DateComp';
import Container from '@/components/Container';
import Link from 'next/link';
import CcName from '@/components/CcName';

export async function getStaticProps({ params }) {
    // We added the async keyword to getPostData in lib/posts.js
    // We need to use await for remark
    // Async/await allows us to fetch data asynchronously.
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({ postData }) {
    const blogTitle = "max overflow";
    
    const moveToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <Container title={postData.title}>
        <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
            <div>
                <h1 className="select-none font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    {postData.title}
                </h1>
                <div className="text-gray-500">
                    <DateComp dateString={postData.date} />
                </div>
                <div className="sr-only">{postData.id}</div>
            </div>

            <div className="prose dark:prose-dark max-w-none w-full">
                {/* Blog post content */}
                <div className={'blog-content'}
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </div>

            {/* Blog post footer */}
            <footer>
                <Link href="/posts">
                    <a className="underline text-blue-400 hover:text-blue-600">← Back</a>
                </Link>
                {/* To top button */}
                <button className="cursor-pointer float-right" onClick={moveToTop}>
                    <a className="underline text-blue-400 hover:text-blue-600">↑ Top</a>
                </button>
                <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mt-8 mb-8" />
                <p className="my-para">
                    <strong>{blogTitle}</strong> is a blog about business, language, and computer science.
                    Sometimes my thoughts overflow and end up here for safekeeping.
                </p>
                <p className="my-para">
                    For corrections (typos, factual inaccuracies), please file a <a href="https://github.com/maxwelldemaio/max-nextjs/issues" className="underline text-blue-400 hover:text-blue-600">GitHub issue</a>.
                </p>
                <CcName></CcName>
            </footer>
        </article>
        </Container>
    );
}

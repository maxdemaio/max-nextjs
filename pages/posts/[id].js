import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '@/components/Date';
import Container from '@/components/Container';
import Link from 'next/link';

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
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
            <div>
                <h1 className="select-none font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    {postData.title}
                </h1>
                <div className="text-gray-500">
                    <Date dateString={postData.date} />
                </div>
                <div className="sr-only">{postData.id}</div>
            </div>

            <article className="prose dark:prose-dark prose-lg">
                {/* Blog post content */}
                <div className={'blog-content'}
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

                {/* Blog post footer */}
                <footer>
                    <Link href="/posts">
                        <a>← Back</a>
                    </Link>
                    {/* To top button */}
                    <button className="w-20 cursor-pointer float-right" onClick={moveToTop}>
                        <a>↑ Top</a>
                    </button>
                    <hr></hr>
                    <p>
                        <strong>{blogTitle}</strong> is a blog about business, language, and computer science.
                        Sometimes my thoughts overflow and end up here for safekeeping.
                    </p>
                </footer>
            </article>
        </div>
        </Container>
    );
}
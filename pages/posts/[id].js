import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react';


export async function getStaticProps({ params }) {
    // We added the async keyword to getPostData in lib/posts.js
    // We need to use await for remark
    // async/await allows us to fetch data asynchronously.
    const postData = await getPostData(params.id)
    console.log(postData);
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
    
    // State of the moveToTop button
    const [isActive, setActive] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;

        console.log(position)
        if(position > 1000) 
            setActive(!isActive); // Update the visibility of the moveToTop button
        console.log(isActive);
    };

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function moveToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <>
        {/* Blog post head */}
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="Post content here"
            />
            <title>{postData.title} | {blogTitle}</title>
        </Head>

            {/* Tailwind CSS Typography prose */}
            <div className="blogPost m-auto p-4 prose prose-lg">
            {/*Blog post header */}
            <header>
                {/* Will show at top of blog post */}
                <h1>{postData.title}</h1>
                <div className="text-gray-500">
                    <Date dateString={postData.date} />
                </div>
                <div className="sr-only">{postData.id}</div>
            </header>

            {/* Blog post content */}
            <main className={'blog-content'} 
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
                    <strong>{blogTitle}</strong>, a blog about business, language, and computer science. 
                    Sometimes my thoughts overflow and end up here for safekeeping.
                </p>
            </footer>
            
        </div>
        </>
    )
}
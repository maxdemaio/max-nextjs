import PostLayout from '../../components/postLayout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
    // We added the async keyword to getPostData in lib/posts.js
    // We need to use await for remark
    // async/await allows us to fetch data asynchronously.
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
    return (
        <PostLayout>
            <h1>{postData.title}</h1>
            <div>{postData.date}</div>
            <div className="sr-only">{postData.id}</div>
            <br />
            <div className={'blog-content'} 
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </PostLayout>
    )
}
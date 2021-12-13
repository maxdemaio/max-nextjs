import {getAllPostIds, getPostData} from '@/lib/posts';
import DateComp from '@/components/DateComp';
import Container from '@/components/Container';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import CcName from '@/components/CcName';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {tomorrow} from 'react-syntax-highlighter/dist/cjs/styles/prism';

export async function getStaticProps({params}) {
  // We added the async keyword to getPostData in lib/posts.js
  // We need to use await for remark
  // Async/await allows us to fetch data asynchronously.
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({postData}) {
  const blogTitle = 'max overflow';

  const moveToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Container title={postData.title}>
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <div className="mb-8">
          <h1 className="my-h1">{postData.title}</h1>
          <div className="text-gray-500">
            <DateComp dateString={postData.date} />
          </div>
          <div className="sr-only">{postData.id}</div>
        </div>

        <div className="prose prose-lg dark:prose-dark max-w-none w-full">
          {/* Blog post content */}
          <ReactMarkdown
            children={postData.html}
            components={{
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={tomorrow}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          ></ReactMarkdown>
        </div>

        {/* Blog post footer */}
        <footer className="mt-8">
          <Link href="/posts">
            <a className="underline text-blue-400 hover:text-blue-600">
              ← Back
            </a>
          </Link>
          {/* To top button */}
          <button className="cursor-pointer float-right" onClick={moveToTop}>
            <a className="underline text-blue-400 hover:text-blue-600">↑ Top</a>
          </button>
          <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mt-8 mb-8" />
          <p className="my-para">
            <strong>{blogTitle}</strong> is a blog about business, language, and
            computer science. Sometimes my thoughts overflow and end up here for
            safekeeping.
          </p>
          <p className="my-para">
            For corrections (typos, factual inaccuracies), please file a{' '}
            <a
              href="https://github.com/maxdemaio/max-nextjs/issues"
              className="underline text-blue-400 hover:text-blue-600"
            >
              GitHub issue
            </a>
            .
          </p>
          <CcName></CcName>
        </footer>
      </article>
    </Container>
  );
}

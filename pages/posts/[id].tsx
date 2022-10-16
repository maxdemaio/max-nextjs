import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { getAllPostIds, getPostData } from "../../lib/posts";
import DateComp from "../../components/DateComp";
import Container from "../../components/Container";
import BlogFooter from "../../components/BlogFooter";

export default function Post({ id, html, meta }) {
  return (
    <Container
      title={meta.title}
      image="https://maxdemaio.com/static/images/spirited-blog.jpg"
      description={meta.description}
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="my-h1">{meta.title}</h1>
          <div className="text-gray-400">
            <DateComp dateString={meta.date} />
          </div>
          <div className="sr-only">{id}</div>
        </div>

        <div className="prose prose-lg dark:prose-dark max-w-none w-full">
          {/* Blog post content */}
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            children={html}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    language={match[1]}
                    style={nord}
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

        <BlogFooter />
      </article>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  // We added the async keyword to getPostData in lib/posts.js
  // We need to use await for remark
  // Async/await allows us to fetch data asynchronously.
  const postData = await getPostData(params.id);
  return {
    props: {
      id: postData.id,
      html: postData.html,
      meta: postData.meta,
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

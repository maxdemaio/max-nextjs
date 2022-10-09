import DateComp from "../components/DateComp";
import Container from "../components/Container";
import Link from "next/link";
import Image from "next/image";

import { shimmer, toBase64 } from "../lib/imageManip";
import { getSortedPostsData } from "../lib/posts";
import SubpageFooter from "../components/SubpageFooter";
import PostsHeader from "components/PostsHeader";

// Pass our blogs as a prop to the Home component
export default function PostHome(props: IPostHomeProps) {
  const blogTitle = "max overflow";

  return (
    <Container
      title="Posts | Blog – Max DeMaio"
      image="https://maxdemaio.com/static/images/spirited-blog.jpg"
      description="All my blog posts in one place."
    >
      <PostsHeader blogTitle={blogTitle} allPostsData={props.allPostsData} />

      <section className="mb-8">
        <ul className="space-y-4">
          {props.allPostsData.map(({ id, date, title }) => (
            <li key={id} className="opacity-80 hover:opacity-100">
              <Link href={`/posts/${id}`}>
                <a>
                  <div className="text-black dark:text-white">{title}</div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-500">
                      <DateComp dateString={date} />
                    </span>
                    {/* <span className="text-gray-400 dark:text-gray-600"> · (X)min</span> */}
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Image
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(1920, 1038)
        )}`}
        src="/static/images/spirited-blog.jpg"
        className="rounded"
        height={1038}
        width={1920}
        alt="Spirited Away - Blog Picture"
      />

      <SubpageFooter />
    </Container>
  );
}

export async function getStaticProps() {
  // Get external data from the file system
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export interface IPostHomeProps {
  allPostsData: any;
}

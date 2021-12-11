import {getSortedPostsData} from '../../lib/posts';
import DateComp from '@/components/DateComp';
import Container from '@/components/Container';
import Link from 'next/link';
import Image from 'next/image';
import {shimmer, toBase64} from '@/lib/imageManip';
import CcName from '@/components/CcName';

// Pass our blogs as a prop to the Home component
export default function PostHome({allPostsData}) {
  const blogTitle = 'max overflow';

  return (
    <Container title="Posts | Blog – Max DeMaio">
      <h1 className="my-h1">
        Blog{' '}
        <Link href="/videos">
          <a className="text-gray-800 dark:text-gray-100 opacity-20 hover:opacity-50">
            Videos
          </a>
        </Link>
      </h1>

      <p className="my-para">
        <strong>{blogTitle}</strong> is a blog about business, language, and
        computer science. Sometimes my thoughts overflow and end up here for
        safekeeping.
      </p>

      <section className="mb-8">
        <ul className="space-y-4">
          {allPostsData.map(({id, date, title}) => (
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
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        src="/static/images/spirited-blog.jpg"
        className="rounded"
        height={1038}
        width={1920}
        alt="Spirited Away - Blog Picture"
      />

      <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mt-8">
        <Link href="/">
          <a className="underline text-blue-400 hover:text-blue-600">← Back</a>
        </Link>
        <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mt-8 mb-8" />
        <CcName></CcName>
      </footer>
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

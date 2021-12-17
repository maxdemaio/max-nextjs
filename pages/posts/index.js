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
        Blog
        <svg
          className="my-svg-header"
          width="1em"
          height="1em"
          viewBox="0 0 32 32"
        >
          <path
            d="M25.7 9.3L18.7 2.3C18.5 2.1 18.3 2 18 2H8C6.9 2 6 2.9 6 4V28C6 29.1 6.9 30 8 30H24C25.1 30 26 29.1 26 28V10C26 9.7 25.9 9.5 25.7 9.3ZM18 4.4L23.6 10H18V4.4ZM24 28H8V4H16V10C16 11.1 16.9 12 18 12H24V28Z"
            fill="currentColor"
          />
          <path d="M10 22H22V24H10V22Z" fill="currentColor" />
          <path d="M10 16H22V18H10V16Z" fill="currentColor" />
        </svg>
        <Link href="/videos">
          <a className="text-gray-800 dark:text-gray-100 opacity-20 hover:opacity-50">
            Videos
            <svg
              className="my-svg-header"
              width="1em"
              height="1em"
              viewBox="0 0 32 32"
            >
              <path
                d="M30 19L26 22.2V20C25.9995 19.4697 25.7886 18.9613 25.4136 18.5864C25.0387 18.2114 24.5303 18.0005 24 18H16C15.4697 18.0005 14.9613 18.2114 14.5864 18.5864C14.2114 18.9613 14.0005 19.4697 14 20V26C14.0005 26.5303 14.2114 27.0387 14.5864 27.4136C14.9613 27.7886 15.4697 27.9995 16 28H24C24.5303 27.9995 25.0387 27.7886 25.4136 27.4136C25.7886 27.0387 25.9995 26.5303 26 26V23.8L30 27V19ZM16 26V20H24L24.002 26H16Z"
                fill="currentColor"
              />
              <path
                d="M12 28H8V4H16V10C16.0016 10.53 16.2128 11.0377 16.5875 11.4125C16.9623 11.7872 17.4701 11.9984 18 12H24V15H26V10C26.0035 9.86858 25.9785 9.73795 25.9268 9.61711C25.875 9.49627 25.7976 9.38809 25.7 9.3L18.7 2.3C18.612 2.20235 18.5038 2.12495 18.3829 2.07316C18.2621 2.02137 18.1314 1.99641 18 2H8C7.47005 2.00159 6.96227 2.21281 6.58753 2.58754C6.2128 2.96227 6.00158 3.47006 6 4V28C6.00158 28.53 6.2128 29.0377 6.58753 29.4125C6.96227 29.7872 7.47005 29.9984 8 30H12V28ZM18 4.4L23.6 10H18V4.4Z"
                fill="currentColor"
              />
            </svg>
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

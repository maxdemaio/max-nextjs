import Container from '@/components/Container';
import YoutubeStats from '@/components/YoutubeStats';
import VidDisplayListItem from '@/components/VidDisplayListItem';
import Link from 'next/link';
import Image from 'next/image';
import {shimmer, toBase64} from '@/lib/imageManip';
import {fetchData} from '@/lib/utils';
import {useState} from 'react';
import CcName from '@/components/CcName';

export default function Videos({stats, videos}) {
  const [searchValue, setSearchValue] = useState('');
  const sortedVids = videos
    .sort((a, b) =>
      Number(
        new Date(b.snippet.publishedAt) -
          Number(new Date(a.snippet.publishedAt))
      )
    )
    .filter((vid) =>
      vid.snippet.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Container title="Posts | Videos – Max DeMaio">
      <h1 className="my-h1">
        <Link href="/posts">
          <a className="text-gray-800 dark:text-gray-100 opacity-20 hover:opacity-50">
            Blog
            <svg
              className="my-svg-header"
              width="1em"
              height="1em"
              viewBox="0 0 20 28"
            >
              <path
                d="M19.7 7.3L12.7 0.3C12.5 0.0999999 12.3 0 12 0H2C0.9 0 0 0.9 0 2V26C0 27.1 0.9 28 2 28H18C19.1 28 20 27.1 20 26V8C20 7.7 19.9 7.5 19.7 7.3ZM12 2.4L17.6 8H12V2.4ZM18 26H2V2H10V8C10 9.1 10.9 10 12 10H18V26Z"
                fill="currentColor"
              />
              <path d="M4 20H16V22H4V20Z" fill="currentColor" />
              <path d="M4 14H16V16H4V14Z" fill="currentColor" />
            </svg>
          </a>
        </Link>
        Videos
        <svg
          className="my-svg-header"
          width="1em"
          height="1em"
          viewBox="0 0 24 28"
        >
          <g clip-path="url(#clip0_1501_40)">
            <path
              d="M24 17L20 20.2V18C19.9995 17.4697 19.7886 16.9613 19.4136 16.5864C19.0387 16.2114 18.5303 16.0005 18 16H10C9.46973 16.0005 8.96133 16.2114 8.58637 16.5864C8.21141 16.9613 8.00053 17.4697 8 18V24C8.00053 24.5303 8.21141 25.0387 8.58637 25.4136C8.96133 25.7886 9.46973 25.9995 10 26H18C18.5303 25.9995 19.0387 25.7886 19.4136 25.4136C19.7886 25.0387 19.9995 24.5303 20 24V21.8L24 25V17ZM10 24V18H18L18.002 24H10Z"
              fill="currentColor"
            />
            <path
              d="M6 26H2V2H10V8C10.0016 8.52995 10.2128 9.03774 10.5875 9.41247C10.9623 9.7872 11.4701 9.99842 12 10H18V13H20V8C20.0035 7.86858 19.9785 7.73795 19.9268 7.61711C19.875 7.49627 19.7976 7.38809 19.7 7.3L12.7 0.300004C12.612 0.202349 12.5038 0.124955 12.3829 0.0731614C12.2621 0.0213681 12.1314 -0.00359152 12 4.34698e-06H2C1.47005 0.00158707 0.962265 0.212809 0.587535 0.587539C0.212805 0.962269 0.00158273 1.47006 0 2V26C0.00158273 26.53 0.212805 27.0377 0.587535 27.4125C0.962265 27.7872 1.47005 27.9984 2 28H6V26ZM12 2.4L17.6 8H12V2.4Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_1501_40">
              <rect
                width="24"
                height="28.0003"
                fill="currentColor"
                transform="translate(0 -0.000335693)"
              />
            </clipPath>
          </defs>
        </svg>
      </h1>

      <section className="mb-8">
        <YoutubeStats stats={stats} />
        <div className="relative w-full mt-4">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            aria-label="Search videos"
            placeholder="Search videos"
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </section>

      <section className="mb-8 grid gap-y-4">
        {sortedVids &&
          sortedVids.map((vid) => (
            <VidDisplayListItem key={vid.id.videoId} vid={vid} />
          ))}
      </section>

      <Image
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        src="/static/images/howl-videos.jpg"
        className="rounded"
        height={1038}
        width={1920}
        alt="Howl's Moving Castle - Videos Picture"
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
  // Get API keys from env
  const {YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID} = process.env;
  const statisticsURL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`;
  const uploadsURL = `https://youtube.googleapis.com/youtube/v3/search?part=id%2Csnippet&channelId=${YOUTUBE_CHANNEL_ID}&type=video&maxResults=100&key=${YOUTUBE_API_KEY}`;

  // Make two calls to the Google YouTube API
  // Fetch stats and video upload data
  async function getData() {
    const statsData = fetchData(statisticsURL);
    const uploadsData = fetchData(uploadsURL);

    return {
      stats: await statsData,
      videos: await uploadsData,
    };
  }

  const {stats, videos} = await getData();

  return {
    // Refreshes every 24 hours
    revalidate: 86400,
    props: {
      stats: stats.items[0].statistics,
      videos: videos.items,
    },
  };
}

import Container from '@/components/Container';
import YoutubeStats from '@/components/YoutubeStats';
import VidDisplayListItem from '@/components/VidDisplayListItem';
import Link from 'next/link';
import Image from 'next/image';
import {shimmer, toBase64} from '@/lib/imageManip';
import { fetchData } from "@/lib/utils";
import { useState } from 'react';
import CcName from '@/components/CcName';

export default function Videos({ stats, videos }) {
    const [searchValue, setSearchValue] = useState("");
    const sortedVids = videos
        .sort((a, b) =>
            Number(new Date(b.snippet.publishedAt) - Number(new Date(a.snippet.publishedAt))),
        )
        .filter((vid) => vid.snippet.title.toLowerCase().includes(searchValue.toLowerCase()));

    return (
        <Container title="Posts | Videos – Max DeMaio">
            <h1 className="my-h1">
                <Link href="/posts" >
                    <a className="text-gray-800 dark:text-gray-100 opacity-20 hover:opacity-50">
                        Blog{' '}
                    </a>
                </Link>
                Videos
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
                {sortedVids && sortedVids.map((vid) => 
                    <VidDisplayListItem key={vid.id.videoId} vid={vid} />)}
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
    const { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } = process.env;
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

    const { stats, videos } = await getData();

    return {
        // Refreshes every 24 hours
        revalidate: 86400,
        props: {
            stats: stats.items[0].statistics,
            videos: videos.items
        }
    }
}
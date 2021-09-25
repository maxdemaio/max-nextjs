import Container from '@/components/Container';
import YoutubeStats from '@/components/YoutubeStats';
import VidDisplayListItem from '@/components/VidDisplayListItem';
import Link from 'next/link';
import Image from 'next/image';
import {shimmer, toBase64} from '@/lib/imageManip';
import { fetchData } from "@/lib/utils";
import { useState } from 'react';

export default function Videos({ stats, videos }) {
    console.log(videos);
    const [searchValue, setSearchValue] = useState("");
    const sortedVids = videos
        .sort((a, b) =>
            Number(new Date(b.snippet.publishedAt) - Number(new Date(a.snippet.publishedAt))),
        )
        .filter((vid) => vid.snippet.title.toLowerCase().includes(searchValue.toLowerCase()));

    return (
        <Container title="Posts | Videos – Max DeMaio">
            <div className="text-lg flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="my-h1">
                    <Link href="/posts" >
                        <a className="text-gray-800 dark:text-gray-100 opacity-20 hover:opacity-50">
                            Blog{' '}
                        </a>
                    </Link>
                    Videos
                </h1>

                <p className="my-para">
                    This page is a work in progress! Eventually it will make an API call to YouTube and fetch all my videos. The data will be 
                    represented as an unordered list (HTML element) where each item in the list will be one of my YouTube videos.
                </p>

                <YoutubeStats stats={stats} />
                <input
                    type="text"
                    placeholder="Search here...."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="mt-3 text-gray-200 tracking-wider bg-gray-800 h-10 px-3 shadow-sm focus:ring-indigo-500 focus:outline-none focus:border-gray-400 block w-full border-gray-700 rounded-md"
                />


                <section className="mb-8">
                    {sortedVids && sortedVids.map((vid) => <VidDisplayListItem key={vid.id.videoId} vid={vid} />)}
                </section>

                <Image
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                    src="/static/images/howl-videos.jpg"
                    className="rounded"
                    height={1038}
                    width={1920}
                    alt="Howl's Moving Castle - Blog Picture"
                />

                <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mt-4">
                    <Link href="/">
                        <a className="underline text-blue-400 hover:text-blue-600">← Back</a>
                    </Link>
                    <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mt-8 mb-8" />
                    <p className="mb-8">
                        <span><a className="underline text-blue-400 hover:text-blue-600" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a><span className="text-gray-600 dark:text-gray-400"> {(new Date().getFullYear())} © Maxwell DeMaio</span></span>
                    </p>
                </footer>
            </div>
        </Container>
    );
}

export async function getStaticProps() {
    // Get API keys from env
    const { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } = process.env;
    const statisticsURL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`;
    const uploadsURL = `https://youtube.googleapis.com/youtube/v3/search?part=id%2Csnippet&channelId=${YOUTUBE_CHANNEL_ID}&type=video&maxResults=100&key=${YOUTUBE_API_KEY}`;

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
        revalidate: 86400,
        props: {
            stats: stats.items[0].statistics,
            videos: videos.items
        }
    }
}
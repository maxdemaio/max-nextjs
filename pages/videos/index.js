import { getSortedPostsData } from '../../lib/posts';
import Container from '@/components/Container';
import Link from 'next/link';
import Image from 'next/image';
import {shimmer, toBase64} from '@/lib/imageManip';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

// Pass our blogs as a prop to the Home component
export default function Videos({ allPostsData }) {
    const blogTitle = "max overflow";

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

                <section>
                    <ul>
                        <li className="mb-4 opacity-60 hover:opacity-100">example video 1</li>
                        <li className="mb-4 opacity-60 hover:opacity-100">example video 2</li>
                        <li className="mb-4 opacity-60 hover:opacity-100">example video 3</li>
                    </ul>
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
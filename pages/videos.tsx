import Link from "next/link";
import Image from "next/image";

import Container from "../components/Container";
import YoutubeStats from "../components/YoutubeStats";
import VidDisplayListItem from "../components/VidDisplayListItem";
import { shimmer, toBase64 } from "../lib/imageManip";
import SubpageFooter from "../components/SubpageFooter";
import { EYouTube, EYoutubeVideo } from "lib/types";
import fetcher from "lib/fetcher";
import useSWR from "swr";
import LoadingSpinner from "components/LoadingSpinner";
import YoutubeStatsLoading from "components/YoutubeStatsLoading";

export default function Videos() {
  // asynch call to youtube api done on backend
  const { data } = useSWR<EYouTube>("/api/youtube", fetcher);

  const subscriberCount: number = data?.subscriberCount;
  const viewCount: number = data?.viewCount;
  const videoCount: number = data?.videoCount;
  const videos: EYoutubeVideo[] = data?.videos;

  return (
    <Container
      title="Posts | Videos – Max DeMaio"
      image="https://maxdemaio.com/static/images/howl-videos.jpg"
      description="All my YouTube videos in one place."
    >
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
          <g clipPath="url(#clip0_1512_7)">
            <path
              d="M24 17.0003L20 20.2003V18.0003C19.9995 17.4701 19.7886 16.9617 19.4136 16.5867C19.0387 16.2117 18.5303 16.0009 18 16.0003H10C9.46973 16.0009 8.96133 16.2117 8.58637 16.5867C8.21141 16.9617 8.00053 17.4701 8 18.0003V24.0003C8.00053 24.5306 8.21141 25.039 8.58637 25.414C8.96133 25.7889 9.46973 25.9998 10 26.0003H18C18.5303 25.9998 19.0387 25.7889 19.4136 25.414C19.7886 25.039 19.9995 24.5306 20 24.0003V21.8003L24 25.0003V17.0003ZM10 24.0003V18.0003H18L18.002 24.0003H10Z"
              fill="currentColor"
            />
            <path
              d="M6 26.0003H2V2.00034H10V8.00034C10.0016 8.53029 10.2128 9.03808 10.5875 9.41281C10.9623 9.78754 11.4701 9.99876 12 10.0003H18V13.0003H20V8.00034C20.0035 7.86892 19.9785 7.73829 19.9268 7.61745C19.875 7.49661 19.7976 7.38842 19.7 7.30034L12.7 0.30034C12.612 0.202685 12.5038 0.12529 12.3829 0.0734971C12.2621 0.0217038 12.1314 -0.00325583 12 0.00034004H2C1.47005 0.00192277 0.962265 0.213145 0.587535 0.587875C0.212805 0.962605 0.00158273 1.47039 0 2.00034V26.0003C0.00158273 26.5303 0.212805 27.0381 0.587535 27.4128C0.962265 27.7875 1.47005 27.9988 2 28.0003H6V26.0003ZM12 2.40034L17.6 8.00034H12V2.40034Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_1512_7">
              <rect width="24" height="28.0003" fill="currentColor" />
            </clipPath>
          </defs>
        </svg>
      </h1>
      <p className="my-para">
        All VODs are located on{" "}
        <a
          className="my-link-red"
          href="https://www.youtube.com/channel/UCXzTmvY30ODYPrpVImJEVBQ"
        >
          my YouTube channel
        </a>
        . Also, I occasionally live-stream on{" "}
        <a className="my-link-purple" href="https://www.twitch.tv/MaxMayo">
          Twitch
        </a>
        .
      </p>

      <section className="mb-8">
        {data ? (
          <YoutubeStats
            subscriberCount={subscriberCount}
            viewCount={viewCount}
            videoCount={videoCount}
          />
        ) : (
          <YoutubeStatsLoading />
        )}
      </section>

      <section className="mb-8 grid gap-y-4">
        {data ? (
          videos.map((vid) => <VidDisplayListItem key={vid.id} vid={vid} />)
        ) : (
          <LoadingSpinner />
        )}
      </section>

      <Image
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(1920, 1038)
        )}`}
        src="/static/images/howl-videos.jpg"
        className="rounded"
        height={1038}
        width={1920}
        alt="Howl's Moving Castle - Videos Picture"
      />

      <SubpageFooter />
    </Container>
  );
}

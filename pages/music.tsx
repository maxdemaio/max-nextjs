import Container from "../components/Container";
import Image from "next/image";

import { shimmer, toBase64 } from "../lib/imageManip";
import SubpageFooter from "../components/SubpageFooter";
import TopTracks from "../components/TopTracks";
import { getTopTracks } from "../lib/spotify";
import { ETracks } from "lib/types";

export default function Music(props: ETracks) {
  return (
    <Container
      title="Music – Max DeMaio"
      image="https://maxdemaio.com/static/images/naus-music.jpg"
      description="A place for all things music related in my life."
    >
      <section>
        <h1 className="my-h1">
          Music
          <svg
            className="my-svg-header"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M25 4H10a2.002 2.002 0 0 0-2 2v14.556A3.955 3.955 0 0 0 6 20a4 4 0 1 0 4 4V12h15v8.556A3.954 3.954 0 0 0 23 20a4 4 0 1 0 4 4V6a2.002 2.002 0 0 0-2-2ZM6 26a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2Zm17 0a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2ZM10 6h15v4H10Z"
            ></path>
          </svg>
        </h1>
        <p className="my-para">
          A place for all things music related in my life.
        </p>
      </section>

      <h2 className="my-h2">Top Spotify Tracks</h2>
      <p className="my-para">
        My most played tracks on Spotify over the last 4 weeks, updated daily.
      </p>

      <TopTracks tracks={props.tracks} />

      <Image
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(1920, 1038)
        )}`}
        src="/static/images/naus-music.jpg"
        className="rounded"
        height={1038}
        width={1920}
        alt="Nausicaä of the Valley of the Wind - Music Picture"
      />

      <SubpageFooter />
    </Container>
  );
}

export async function getStaticProps() {
  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items.slice(0, 10).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(", "),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  return {
    // Refreshes every 24 hours
    revalidate: 86400,
    props: {
      tracks: tracks,
    },
  };
}

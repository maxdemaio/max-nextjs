import Container from '@/components/Container';
import Image from 'next/image';

import { shimmer, toBase64 } from '@/lib/imageManip';
import SubpageFooter from '@/components/SubpageFooter';

export default function Music() {
  return (
    <Container title="Music – Max DeMaio">
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
        <p className="my-para">Here you'll find my music stuff.</p>
      </section>
      <section>
        <h2 className="my-h2">Top Tracks</h2>
      </section>

      <Image
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(1920, 1038)
        )}`}
        src="/static/images/mimi-music.jpg"
        className="rounded"
        height={1038}
        width={1920}
        alt="Whisper of the Heart - Music Picture"
      />

      <SubpageFooter />
    </Container>
  );
}

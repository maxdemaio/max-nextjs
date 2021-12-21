import Link from 'next/link';
import Image from 'next/image';
import prisma from 'lib/prisma';

import Container from '@/components/Container';
import { shimmer, toBase64 } from '@/lib/imageManip';
import CcName from '@/components/CcName';
import Guestbook from '@/components/Guestbook';

export default function GuestbookPage({ fallbackData }) {
  return (
    <Container title="Guestbook – Max DeMaio">
      <h1 className="my-h1">
        Guestbook
        <svg
          className="my-svg-header"
          width="1em"
          height="1em"
          viewBox="0 0 28 28"
        >
          <path
            d="M27.707 3.293L24.707 0.293C24.5195 0.105529 24.2652 0.000213623 24 0.000213623C23.7349 0.000213623 23.4806 0.105529 23.293 0.293L17.586 6H15.095C12.8147 6.00164 10.5911 6.71115 8.73127 8.03058C6.87142 9.35001 5.46705 11.2143 4.71205 13.366L0.0560471 26.67C-0.00618216 26.8478 -0.0169525 27.0395 0.0249762 27.2231C0.0669048 27.4067 0.159828 27.5747 0.293049 27.7078C0.42627 27.8409 0.594373 27.9337 0.778008 27.9755C0.961643 28.0173 1.15335 28.0064 1.33105 27.944L14.634 23.288C16.7858 22.533 18.65 21.1286 19.9695 19.2688C21.2889 17.4089 21.9984 15.1853 22 12.905V10.415L27.707 4.707C27.8945 4.51947 27.9998 4.26516 27.9998 4C27.9998 3.73484 27.8945 3.48053 27.707 3.293V3.293ZM20.293 9.293C20.1055 9.48049 20.0001 9.73481 20 10V12.905C19.9986 14.7707 19.418 16.59 18.3385 18.1117C17.2589 19.6333 15.7336 20.7823 13.973 21.4L4.80505 24.609L14 15.414L12.586 14L3.39005 23.195L6.60005 14.027C7.21775 12.2665 8.36673 10.7412 9.88839 9.66158C11.41 8.582 13.2293 8.00142 15.095 8H18C18.2652 7.99994 18.5196 7.89455 18.707 7.707L24 2.414L25.586 4L20.293 9.293Z"
            fill="currentColor"
          />
        </svg>
      </h1>

      <Guestbook fallbackData={fallbackData} />

      <Image
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        src="/static/images/mononoke-guestbook.jpg"
        className="rounded"
        height={1038}
        width={1920}
        alt="Princess Mononoke - Guestbook Picture"
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
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      updated_at: 'desc',
    },
  });

  const fallbackData = entries.map((entry) => ({
    id: entry.id.toString(),
    body: entry.body,
    created_by: entry.created_by.toString(),
    updated_at: entry.updated_at.toString(),
  }));

  return {
    props: {
      fallbackData,
    },
    revalidate: 60,
  };
}

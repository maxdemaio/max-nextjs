import Container from '@/components/Container';
import Link from 'next/link';
import Image from 'next/image';
import {shimmer, toBase64} from '@/lib/imageManip';
import CcName from '@/components/CcName';

export default function Software() {
  return (
    <Container title="Software – Max DeMaio">
      <section>
        <h1 className="my-h1">
          Software
          <svg
            className="my-svg-header"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
          >
            <path d="M28 12H20V4H28V12ZM22 10H26V6H22V10Z" fill="black" />
            <path
              d="M17 15V9H9V23H23V15H17ZM11 11H15V15H11V11ZM15 21H11V17H15V21ZM21 21H17V17H21V21Z"
              fill="black"
            />
            <path
              d="M26 28H6C5.46973 27.9995 4.96133 27.7886 4.58637 27.4136C4.21141 27.0387 4.00053 26.5303 4 26V6C4.00053 5.46973 4.21141 4.96133 4.58637 4.58637C4.96133 4.21141 5.46973 4.00053 6 4H16V6H6V26H26V16H28V26C27.9995 26.5303 27.7886 27.0387 27.4136 27.4136C27.0387 27.7886 26.5303 27.9995 26 28Z"
              fill="black"
            />
          </svg>
        </h1>

        <p className="my-para">
          Here you'll find my featured projects as well as the technology I use
          to build business and software architecture. The remainder of my open
          source work is located on{' '}
          <a
            className="underline text-blue-400 hover:text-blue-600"
            href="https://github.com/maxdemaio"
          >
            GitHub
          </a>
          .
        </p>
      </section>
      <section>
        <h2 className="my-h2">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="transform transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-900 rounded p-4">
            <p className="transform transition duration-300 ease-in-out dark:hover:text-white hover:text-black text-gray-700 dark:text-gray-400">
              <a
                href="https://github.com/maxdemaio/langlab"
                className="my-link"
              >
                LangLab
              </a>{' '}
              is a free and open source language learning website that allows
              users to practice the conjugations of the 25 most common verbs in
              English. Helpful resources have also been provided to help
              learners on their path.
            </p>
          </div>
          <div className="transform transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-900 rounded p-4">
            <p className="transform transition duration-300 ease-in-out dark:hover:text-white hover:text-black text-gray-700 dark:text-gray-400">
              <a
                href="https://github.com/maxdemaio/thelangbot"
                className="my-link"
              >
                The Language Bot
              </a>{' '}
              is a Twitter bot to help individuals learn foreign languages. It
              is naturally building a community through tweets by retweeting
              #100DaysOfLanguage and #langtwt.
            </p>
          </div>
          <div className="transform transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-900 rounded p-4">
            <p className="transform transition duration-300 ease-in-out dark:hover:text-white hover:text-black text-gray-700 dark:text-gray-400">
              <a
                href="https://github.com/maxdemaio/finance"
                className="my-link"
              >
                Finance
              </a>{' '}
              is a business application via which you can manage portfolios of
              stocks, check stock prices, and buy/sell stocks utlizing IEX's
              API. Also, with Chart.js investors can view a pie chart of their
              portfolio distribution.
            </p>
          </div>
          <div className="transform transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-900 rounded p-4">
            <p className="transform transition duration-300 ease-in-out dark:hover:text-white hover:text-black text-gray-700 dark:text-gray-400">
              <a
                href="https://github.com/maxdemaio/house_party"
                className="my-link"
              >
                House Party
              </a>
              , a Spotify collaborative music playing system built with React
              and Django REST. With Spotify authentication, listeners can create
              listening parties others can join. One can pause/play and skip
              tracks from the host's music queue.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="my-h2">Tech Stack</h2>
        <ul className="space-y-4 text-gray-700 dark:text-gray-400">
          <li>
            <strong>Languages:</strong> Java, Python, JavaScript, HTML, CSS, and
            SQL.
          </li>
          <li>
            <strong>Tools:</strong> Git, GitHub Actions, Docker, Postman, Figma,
            GIMP, Visual Studio Code, and Eclipse.
          </li>
        </ul>
      </section>

      <Image
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        src="/static/images/castle-software.jpg"
        className="rounded"
        height={1038}
        width={1920}
        alt="Castle in the Sky - Blog Picture"
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

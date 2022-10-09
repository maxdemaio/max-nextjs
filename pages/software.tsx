import Container from "../components/Container";
import Image from "next/image";

import { shimmer, toBase64 } from "../lib/imageManip";
import SubpageFooter from "../components/SubpageFooter";

export default function Software() {
  return (
    <Container
      title="Software – Max DeMaio"
      image="https://maxdemaio.com/static/images/castle-software.jpg"
      description="Featured projects as well as the technology I use
          to build business and software architecture."
    >
      <section>
        <h1 className="my-h1">
          Software
          <svg
            className="my-svg-header"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path d="M24 8H16V0H24V8ZM18 6H22V2H18V6Z" fill="currentColor" />
            <path
              d="M13 11V5H5V19H19V11H13ZM7 7H11V11H7V7ZM11 17H7V13H11V17ZM17 17H13V13H17V17Z"
              fill="currentColor"
            />
            <path
              d="M22 24H2C1.46973 23.9995 0.961329 23.7886 0.586371 23.4136C0.211413 23.0387 0.000529477 22.5303 0 22V2C0.000529477 1.46973 0.211413 0.961329 0.586371 0.586371C0.961329 0.211413 1.46973 0.000529477 2 0H12V2H2V22H22V12H24V22C23.9995 22.5303 23.7886 23.0387 23.4136 23.4136C23.0387 23.7886 22.5303 23.9995 22 24Z"
              fill="currentColor"
            />
          </svg>
        </h1>

        <p className="my-para">
          Here you'll find my featured projects as well as the technology I use
          to build business and software architecture. The remainder of my open
          source work is located on{" "}
          <a
            className="my-link-blue dark:my-link-blue-dark"
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
                href="https://github.com/maxdemaio/thelangbot"
                className="my-link-blue dark:my-link-blue-dark"
              >
                The Language Bot
              </a>{" "}
              is a Twitter bot to help individuals learn foreign languages. It
              is naturally building a community through tweets by retweeting
              #100DaysOfLanguage and #langtwt.
            </p>
          </div>
          <div className="transform transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-900 rounded p-4">
            <p className="transform transition duration-300 ease-in-out dark:hover:text-white hover:text-black text-gray-700 dark:text-gray-400">
              <a
                href="https://github.com/maxdemaio/hack-computer"
                className="my-link-blue dark:my-link-blue-dark"
              >
                Hack Computer
              </a>{" "}
              is a computer system built from the ground up as described in the
              book, "The Elements of Computing Systems". Made with hardware
              description language, assembly, and Java.
            </p>
          </div>
          <div className="transform transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-900 rounded p-4">
            <p className="transform transition duration-300 ease-in-out dark:hover:text-white hover:text-black text-gray-700 dark:text-gray-400">
              <a
                href="https://github.com/maxdemaio/langlab"
                className="my-link-blue dark:my-link-blue-dark"
              >
                LangLab
              </a>{" "}
              is a free and open source language learning website that allows
              users to practice the conjugations of the 25 most common verbs in
              English. Helpful resources have also been provided to help
              learners on their path.
            </p>
          </div>
          <div className="transform transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-900 rounded p-4">
            <p className="transform transition duration-300 ease-in-out dark:hover:text-white hover:text-black text-gray-700 dark:text-gray-400">
              <a
                href="https://github.com/maxdemaio/house_party"
                className="my-link-blue dark:my-link-blue-dark"
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
            Yarn/NPM, Prettier/ESLint, Visual Studio Code, IntelliJ, Jira, and
            Notion.
          </li>
        </ul>
      </section>

      <Image
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(1920, 1038)
        )}`}
        src="/static/images/castle-software.jpg"
        className="rounded"
        height={1038}
        width={1920}
        alt="Castle in the Sky - Blog Picture"
      />

      <SubpageFooter />
    </Container>
  );
}

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();

  // TODO, edit and add custom banner
  const meta = {
    title: 'Max DeMaio',
    description: `Passionate about business, language, and computer science.`,
    image: 'https://maxdemaio.com/static/images/me.jpg',
    type: 'website',
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://maxdemaio.com${router.asPath}`}
        />
        <link rel="canonical" href={`https://maxdemaio.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Max DeMaio" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@maxwelldemaio" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <nav className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-white sticky-nav md:my-8 dark:bg-black bg-opacity-60 dark:text-gray-100">
        <Link href="/">
          <a
            aria-label="Home link"
            className="text-blue-400 hover:text-blue-600"
          >
            Home
          </a>
        </Link>
        <Link href="/posts">
          <a
            aria-label="Posts link"
            className="nav-no-show text-blue-400 hover:text-blue-600"
          >
            Posts
          </a>
        </Link>
        <Link href="/posts">
          <a
            aria-label="Posts link"
            className="md:hidden w-10 h-10 p-3 bg-gray-200 hover:bg-gray-300 rounded dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <svg width="1em" height="1em" viewBox="0 0 28 28">
              <g clip-path="url(#clip0_1515_32)">
                <path
                  d="M27 17L23 20.2V18C22.9995 17.4697 22.7886 16.9613 22.4136 16.5864C22.0387 16.2114 21.5303 16.0005 21 16H13C12.4697 16.0005 11.9613 16.2114 11.5864 16.5864C11.2114 16.9613 11.0005 17.4697 11 18V24C11.0005 24.5303 11.2114 25.0387 11.5864 25.4136C11.9613 25.7886 12.4697 25.9995 13 26H21C21.5303 25.9995 22.0387 25.7886 22.4136 25.4136C22.7886 25.0387 22.9995 24.5303 23 24V21.8L27 25V17ZM13 24V18H21L21.002 24H13Z"
                  fill="currentColor"
                />
                <path
                  d="M9 26H5V2H13V8C13.0016 8.52995 13.2128 9.03774 13.5875 9.41247C13.9623 9.7872 14.4701 9.99842 15 10H21V13H23V8C23.0035 7.86858 22.9785 7.73795 22.9268 7.61711C22.875 7.49627 22.7976 7.38809 22.7 7.3L15.7 0.300004C15.612 0.202349 15.5038 0.124955 15.3829 0.0731614C15.2621 0.0213681 15.1314 -0.00359152 15 4.34698e-06H5C4.47005 0.00158707 3.96227 0.212809 3.58753 0.587539C3.2128 0.962269 3.00158 1.47006 3 2V26C3.00158 26.53 3.2128 27.0377 3.58753 27.4125C3.96227 27.7872 4.47005 27.9984 5 28H9V26ZM15 2.4L20.6 8H15V2.4Z"
                  fill="currentColor"
                />
                <path d="M7 20H13V22H7V20Z" fill="currentColor" />
                <path d="M7 14H19V16H7V14Z" fill="currentColor" />
              </g>
              <defs>
                <clipPath id="clip0_1515_32">
                  <rect width="28" height="28" fill="currentColor" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </Link>

        <Link href="/software">
          <a
            aria-label="Software link"
            className="nav-no-show text-blue-400 hover:text-blue-600"
          >
            Software
          </a>
        </Link>
        <Link href="/software">
          <a
            aria-label="Software link"
            className="md:hidden w-10 h-10 p-3 bg-gray-200 hover:bg-gray-300 rounded dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <svg width="1em" height="1em" viewBox="0 0 24 24">
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
          </a>
        </Link>

        <Link href="/guestbook">
          <a
            aria-label="Guestbook link"
            className="nav-no-show text-blue-400 hover:text-blue-600"
          >
            Guestbook
          </a>
        </Link>
        <Link href="/guestbook">
          <a
            aria-label="Guestbook Link"
            className="md:hidden w-10 h-10 p-3 bg-gray-200 hover:bg-gray-300 rounded dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <svg width="1em" height="1em" viewBox="0 0 28 28">
              <path
                d="M27.707 3.293L24.707 0.293C24.5195 0.105529 24.2652 0.000213623 24 0.000213623C23.7349 0.000213623 23.4806 0.105529 23.293 0.293L17.586 6H15.095C12.8147 6.00164 10.5911 6.71115 8.73127 8.03058C6.87142 9.35001 5.46705 11.2143 4.71205 13.366L0.0560471 26.67C-0.00618216 26.8478 -0.0169525 27.0395 0.0249762 27.2231C0.0669048 27.4067 0.159828 27.5747 0.293049 27.7078C0.42627 27.8409 0.594373 27.9337 0.778008 27.9755C0.961643 28.0173 1.15335 28.0064 1.33105 27.944L14.634 23.288C16.7858 22.533 18.65 21.1286 19.9695 19.2688C21.2889 17.4089 21.9984 15.1853 22 12.905V10.415L27.707 4.707C27.8945 4.51947 27.9998 4.26516 27.9998 4C27.9998 3.73484 27.8945 3.48053 27.707 3.293V3.293ZM20.293 9.293C20.1055 9.48049 20.0001 9.73481 20 10V12.905C19.9986 14.7707 19.418 16.59 18.3385 18.1117C17.2589 19.6333 15.7336 20.7823 13.973 21.4L4.80505 24.609L14 15.414L12.586 14L3.39005 23.195L6.60005 14.027C7.21775 12.2665 8.36673 10.7412 9.88839 9.66158C11.41 8.582 13.2293 8.00142 15.095 8H18C18.2652 7.99994 18.5196 7.89455 18.707 7.707L24 2.414L25.586 4L20.293 9.293Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </Link>

        <a
          href="https://twitter.com/maxwelldemaio"
          aria-label="Twitter link"
          className="w-10 h-10 p-3 bg-gray-200 hover:bg-gray-300 rounded dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53a4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </a>

        <a
          href="https://github.com/maxdemaio"
          aria-label="GitHub link"
          className="w-10 h-10 p-3 bg-gray-200 hover:bg-gray-300 rounded dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10.07 20.503a1 1 0 0 0-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.708 5.708 0 0 0-1.837-2.415a1.2 1.2 0 0 1-.167-.11a1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.004.815.81 1.338 1.141 1.514a4.44 4.44 0 0 1 .924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098l.004.268a1 1 0 0 0 2 0l-.005-.318c-.005-.19-.012-.464-.012-1.182zM20.737 5.377c.032-.125.063-.264.09-.42a6.278 6.278 0 0 0-.408-3.293a1.002 1.002 0 0 0-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.87 13.87 0 0 0-6.354 0C6.762.75 5.455.966 5.102 1.079a.997.997 0 0 0-.631.584a6.3 6.3 0 0 0-.404 3.357c.025.127.051.246.079.354a6.27 6.27 0 0 0-1.256 3.83a8.422 8.422 0 0 0 .043.921c.334 4.603 3.334 5.984 5.424 6.459a4.591 4.591 0 0 0-.118.4a1 1 0 0 0 1.942.479a1.678 1.678 0 0 1 .468-.878a1 1 0 0 0-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a6.61 6.61 0 0 1-.033-.738a4.258 4.258 0 0 1 .92-2.713a3.022 3.022 0 0 1 .195-.231a1 1 0 0 0 .188-1.025a3.388 3.388 0 0 1-.155-.555a4.094 4.094 0 0 1 .079-1.616a7.543 7.543 0 0 1 2.415 1.18a1.009 1.009 0 0 0 .827.133a11.777 11.777 0 0 1 6.173.001a1.005 1.005 0 0 0 .83-.138a7.572 7.572 0 0 1 2.406-1.19a4.04 4.04 0 0 1 .087 1.578a3.205 3.205 0 0 1-.169.607a1 1 0 0 0 .188 1.025c.078.087.155.18.224.268A4.122 4.122 0 0 1 20 9.203a7.039 7.039 0 0 1-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 0 0-.546 1.746a1.63 1.63 0 0 1 .466.908a3.06 3.06 0 0 1 .093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 1 0 2 0c0-.217 0-.692.01-1.34v-2.35a4.881 4.881 0 0 0-.155-1.311a4.256 4.256 0 0 0-.116-.416a6.513 6.513 0 0 0 5.445-6.424A8.697 8.697 0 0 0 22 9.203a6.13 6.13 0 0 0-1.263-3.826z"></path>
          </svg>
        </a>

        <button
          aria-label="Toggle Dark and Light Mode"
          type="button"
          className="w-10 h-10 p-3 bg-gray-200 hover:bg-gray-300 rounded dark:bg-gray-800 dark:hover:bg-gray-700"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="text-gray-800 dark:text-gray-200"
            >
              {resolvedTheme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
      </nav>
      <main className="text-lg flex flex-col justify-center items-start px-8 max-w-2xl mx-auto mb-16">
        {children}
      </main>
    </div>
  );
}

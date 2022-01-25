import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import VideoBlogIcon from '@/components/VideoBlogIcon';

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

      <nav className="mt-2 mb-8 flex items-center justify-between w-full max-w-4xl p-4 mx-auto text-gray-900 bg-white dark:bg-black bg-opacity-60 dark:text-gray-100">
        <Link href="/">
          <a
            id="home-nav"
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
            <VideoBlogIcon />
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

        <Link href="/products">
          <a
            aria-label="Products link"
            className="nav-no-show text-blue-400 hover:text-blue-600"
          >
            Products
          </a>
        </Link>
        <Link href="/products">
          <a
            aria-label="Product link"
            className="md:hidden w-10 h-10 p-3 bg-gray-200 hover:bg-gray-300 rounded dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <svg width="1em" height="1em" viewBox="0 0 32 32">
              <path
                d="M25 2a11.01 11.01 0 0 0-10.245 7.024A6.994 6.994 0 0 0 9 6H6v3a7.008 7.008 0 0 0 7 7h1v9.05a9.923 9.923 0 0 0-6.071 2.879l1.414 1.414a8 8 0 0 1 12.309 1.213l1.661-1.113A9.98 9.98 0 0 0 16 25.062V16h1A11.012 11.012 0 0 0 28 5V2zM13 14a5.006 5.006 0 0 1-5-5V8h1a5.005 5.005 0 0 1 5 5v1zm13-9a9.01 9.01 0 0 1-9 9h-1v-1a9.01 9.01 0 0 1 9-9h1z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </Link>

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
      <main className="my-fade text-lg flex flex-col justify-center items-start px-8 max-w-3xl mx-auto mb-16">
        {children}
      </main>
    </div>
  );
}

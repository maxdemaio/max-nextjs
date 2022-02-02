import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import VideoBlogIcon from '@/components/VideoBlogIcon';
import TwitterIcon from '@/components/TwitterIcon';
import GithubIcon from '@/components/GithubIcon';

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

      <nav className="p-8 mb-6 flex items-center justify-between max-w-4xl mx-auto text-gray-900 bg-white dark:bg-black dark:text-gray-100">
        <Link href="/">
          <a
            id="home-nav"
            aria-label="Home link"
            className="text-blue-400 hover:text-blue-600"
          >
            Home
          </a>
        </Link>

        <div className="nav-no-show"></div>
        <div className="nav-no-show"></div>

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

        <a
          aria-label="Twitter link"
          href="https://twitter.com/maxwelldemaio"
          className="w-10 h-10 p-3 bg-gray-200 hover:bg-gray-300 rounded dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <TwitterIcon />
        </a>

        <a
          aria-label="Github link"
          href="https://github.com/maxdemaio"
          className="w-10 h-10 p-3 bg-gray-200 hover:bg-gray-300 rounded dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <GithubIcon />
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
      <main className="my-fade text-lg flex flex-col justify-center items-start px-8 max-w-3xl mx-auto mb-16">
        {children}
      </main>
    </div>
  );
}

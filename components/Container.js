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
            <svg width="1em" height="1em" viewBox="0 0 32 32">
              <path
                d="M30 19L26 22.2V20C25.9995 19.4697 25.7886 18.9613 25.4136 18.5864C25.0387 18.2114 24.5303 18.0005 24 18H16C15.4697 18.0005 14.9613 18.2114 14.5864 18.5864C14.2114 18.9613 14.0005 19.4697 14 20V26C14.0005 26.5303 14.2114 27.0387 14.5864 27.4136C14.9613 27.7886 15.4697 27.9995 16 28H24C24.5303 27.9995 25.0387 27.7886 25.4136 27.4136C25.7886 27.0387 25.9995 26.5303 26 26V23.8L30 27V19ZM16 26V20H24L24.002 26H16Z"
                fill="currentColor"
              />
              <path
                d="M12 28H8V4H16V10C16.0016 10.53 16.2128 11.0377 16.5875 11.4125C16.9623 11.7872 17.4701 11.9984 18 12H24V15H26V10C26.0035 9.86858 25.9785 9.73795 25.9268 9.61711C25.875 9.49627 25.7976 9.38809 25.7 9.3L18.7 2.3C18.612 2.20235 18.5038 2.12495 18.3829 2.07316C18.2621 2.02137 18.1314 1.99641 18 2H8C7.47005 2.00159 6.96227 2.21281 6.58753 2.58754C6.2128 2.96227 6.00158 3.47006 6 4V28C6.00158 28.53 6.2128 29.0377 6.58753 29.4125C6.96227 29.7872 7.47005 29.9984 8 30H12V28ZM18 4.4L23.6 10H18V4.4Z"
                fill="currentColor"
              />
              <path d="M10 22H16V24H10V22Z" fill="currentColor" />
              <path d="M10 16H22V18H10V16Z" fill="currentColor" />
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
            <svg width="1em" height="1em" viewBox="0 0 32 32">
              <path
                d="M28 12H20V4H28V12ZM22 10H26V6H22V10Z"
                fill="currentColor"
              />
              <path
                d="M17 15V9H9V23H23V15H17ZM11 11H15V15H11V11ZM15 21H11V17H15V21ZM21 21H17V17H21V21Z"
                fill="currentColor"
              />
              <path
                d="M26 28H6C5.46973 27.9995 4.96133 27.7886 4.58637 27.4136C4.21141 27.0387 4.00053 26.5303 4 26V6C4.00053 5.46973 4.21141 4.96133 4.58637 4.58637C4.96133 4.21141 5.46973 4.00053 6 4H16V6H6V26H26V16H28V26C27.9995 26.5303 27.7886 27.0387 27.4136 27.4136C27.0387 27.7886 26.5303 27.9995 26 28Z"
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
            <svg width="1em" height="1em" viewBox="0 0 32 32">
              <path
                d="M29.707 5.293L26.707 2.293C26.5195 2.10553 26.2652 2.00021 26 2.00021C25.7349 2.00021 25.4806 2.10553 25.293 2.293L19.586 8H17.095C14.8147 8.00164 12.5911 8.71115 10.7313 10.0306C8.87142 11.35 7.46705 13.2143 6.71205 15.366L2.05605 28.67C1.99382 28.8478 1.98305 29.0395 2.02498 29.2231C2.0669 29.4067 2.15983 29.5747 2.29305 29.7078C2.42627 29.8409 2.59437 29.9337 2.77801 29.9755C2.96164 30.0173 3.15335 30.0064 3.33105 29.944L16.634 25.288C18.7858 24.533 20.65 23.1286 21.9695 21.2688C23.2889 19.4089 23.9984 17.1853 24 14.905V12.415L29.707 6.707C29.8945 6.51947 29.9998 6.26516 29.9998 6C29.9998 5.73484 29.8945 5.48053 29.707 5.293V5.293ZM22.293 11.293C22.1055 11.4805 22.0001 11.7348 22 12V14.905C21.9986 16.7707 21.418 18.59 20.3385 20.1117C19.2589 21.6333 17.7336 22.7823 15.973 23.4L6.80505 26.609L16 17.414L14.586 16L5.39005 25.195L8.60005 16.027C9.21775 14.2665 10.3667 12.7412 11.8884 11.6616C13.41 10.582 15.2293 10.0014 17.095 10H20C20.2652 9.99994 20.5196 9.89455 20.707 9.707L26 4.414L27.586 6L22.293 11.293Z"
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

import Container from '@/components/Container';
import Link from 'next/link';
import Image from 'next/image';
import { shimmer, toBase64 } from '@/lib/imageManip';
import CcName from '@/components/CcName';
import React, { useState, useEffect } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Guestbook() {
  // add ability to access the session (from _app.js)
  const { data: session, status } = useSession();
  const [form, setForm] = useState();

  const entries = [
    {
      id: 1,
      name: 'maxwelldemaio',
      content: 'great website!',
      timestamp: '2021-10-06',
    },
    {
      id: 4,
      name: 'TylerNickerson',
      content: 'great website again!',
      timestamp: '2021-11-06',
    },
  ];

  const listEntries = entries.map((entry) => (
    // TODO: abstract into a component
    <div key={entry.id} className="flex flex-col space-y-2">
      <div className="w-full">{entry.content}</div>
      <div className="flex items-center space-x-3">
        <p className="text-gray-500 dark:text-gray-500">
          <a href={'https://twitter.com/' + entry.name} className="my-link">
            {'@' + entry.name}
          </a>
        </p>
        <span className="text-sm text-gray-300 dark:text-gray-700">x</span>
        <p className="text-gray-500 dark:text-gray-500">{entry.timestamp}</p>
      </div>
    </div>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container title="Guestbook – Max DeMaio">
      <section className="w-full">
        <h1 className="my-h1">
          Guestbook
          <svg
            className="my-svg-header"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            preserveAspectRatio="xMidYMin"
          >
            <path
              d="M29.707 5.293L26.707 2.293C26.5195 2.10553 26.2652 2.00021 26 2.00021C25.7349 2.00021 25.4806 2.10553 25.293 2.293L19.586 8H17.095C14.8147 8.00164 12.5911 8.71115 10.7313 10.0306C8.87142 11.35 7.46705 13.2143 6.71205 15.366L2.05605 28.67C1.99382 28.8478 1.98305 29.0395 2.02498 29.2231C2.0669 29.4067 2.15983 29.5747 2.29305 29.7078C2.42627 29.8409 2.59437 29.9337 2.77801 29.9755C2.96164 30.0173 3.15335 30.0064 3.33105 29.944L16.634 25.288C18.7858 24.533 20.65 23.1286 21.9695 21.2688C23.2889 19.4089 23.9984 17.1853 24 14.905V12.415L29.707 6.707C29.8945 6.51947 29.9998 6.26516 29.9998 6C29.9998 5.73484 29.8945 5.48053 29.707 5.293V5.293ZM22.293 11.293C22.1055 11.4805 22.0001 11.7348 22 12V14.905C21.9986 16.7707 21.418 18.59 20.3385 20.1117C19.2589 21.6333 17.7336 22.7823 15.973 23.4L6.80505 26.609L16 17.414L14.586 16L5.39005 25.195L8.60005 16.027C9.21775 14.2665 10.3667 12.7412 11.8884 11.6616C13.41 10.582 15.2293 10.0014 17.095 10H20C20.2652 9.99994 20.5196 9.89455 20.707 9.707L26 4.414L27.586 6L22.293 11.293Z"
              fill="currentColor"
            />
          </svg>
        </h1>

        <p className="my-para">Example blahblahblah description</p>

        <div className="p-4 border border-gray-200 rounded w-full dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
          <h2 className="my-h2">Sign the Guestbook</h2>
          {!session && (
            <div>
              <p className="text-gray-700 dark:text-white mb-4">
                Not signed in, Here is your status: {status}
              </p>
              <div className="mb-4 flex flex-row justify-between items-center">
                <a
                  href={`/api/auth/signin`}
                  className="mb-2 bg-gray-600 hover:bg-gray-700 text-md text-white font-bold py-2 px-4 rounded-full"
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                >
                  Login
                </a>
              </div>
            </div>
          )}
          {session && (
            <div>
              <p className="text-gray-700 dark:text-white mb-4">
                Signed in as {session.user.name}, Here is your status: {status}
              </p>

              <div className="mb-4 flex flex-row flex-wrap justify-between items-center">
                <a
                  href={`/api/auth/signout`}
                  className="mb-2 bg-gray-600 hover:bg-gray-700 text-md text-white font-bold py-2 px-4 rounded-full"
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  Logout
                </a>
                <form className="mb-2 grow ml-2 mr-2 flex flex-row">
                  <input
                    placeholder="Your entry..."
                    className="w-full rounded p-2"
                  ></input>
                  <button className="ml-2 bg-gray-600 hover:bg-gray-700 text-md text-white font-bold py-2 px-4 rounded">
                    Sign
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="my-h2">Entries</h2>
        <div className="mt-4 space-y-8">{listEntries}</div>
      </section>

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

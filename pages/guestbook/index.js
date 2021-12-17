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

  // Similar to componentDidMount and componentDidUpdate:
  //  useEffect(() => {
  //    fetch('http://localhost:8080/', {
  //      method: 'get',
  //      redirect: 'follow',
  //      headers: {
  //        'Content-Type': 'application/json',
  //      },
  //    })
  //      .then((response) => {
  //        return response.json();
  //      })
  //      .then((data) => {
  //        console.log(data);
  //      })
  //      .catch(function (err) {
  //        console.info('error lol ' + err);
  //      });
  //  });

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
        <span className="text-sm text-gray-200 dark:text-gray-800">x</span>
        <p className="text-gray-500 dark:text-gray-500">{entry.timestamp}</p>
      </div>
    </div>
  ));

  return (
    <Container title="Guestbook – Max DeMaio">
      <section className="mb-8">
        <h1 className="my-h1">Guestbook</h1>
        <svg width="1em" height="1em" viewBox="0 0 24 24">
          <path
            d="M20.71 7.04c-.34.34-.67.67-.68 1c-.03.32.31.65.63.96c.48.5.95.95.93 1.44c-.02.49-.53 1-1.04 1.5l-4.13 4.14L15 14.66l4.25-4.24l-.96-.96l-1.42 1.41l-3.75-3.75l3.84-3.83c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41M3 17.25l9.56-9.57l3.75 3.75L6.75 21H3v-3.75z"
            fill="currentColor"
          ></path>
        </svg>
        <p className="my-para">
          Here you'll find my featured projects as well as the technology I use
          to build business and software architecture. The remainder of my open
          source work is located on GitHub.
        </p>
        <div>example sign-in modal</div>
        {!session && (
          <>
            <p>Not signed</p>
            <a
              href={`/api/auth/signin`}
              className="my-link"
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign in
            </a>
          </>
        )}
        {session && (
          <>
            <p>Signed in as {session.user.email}</p>
            <p>Here is your access token: {session.accessToken}</p>
            <p>Here is your status: {status}</p>
            <p>Super secret access provided</p>
            <a
              href={`/api/auth/signout`}
              className="my-link"
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign out
            </a>
          </>
        )}
      </section>

      <section className="mb-8">
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

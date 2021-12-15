import Container from '@/components/Container';
import Link from 'next/link';
import CcName from '@/components/CcName';
import React, { useState, useEffect } from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Guestbook() {
    // add ability to access the session (from _app.js)
    const [session, loading] = useSession();

    const entries = [
        {
            id: 1,
            name: 'example user',
            content: 'great website!',
            timestamp: '2021-10-06',
        },
        {
            id: 4,
            name: 'example2',
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
                <p className="text-gray-500 dark:text-gray-500">{entry.name}</p>
                <span className="text-gray-200 dark:text-gray-800">•</span>
                <p className="text-gray-500 dark:text-gray-500">
                    {entry.timestamp}
                </p>
            </div>
        </div>
    ));

    return (
        <Container title="Guestbook – Max DeMaio">
            <section>
                <h1 className="my-h1">Guestbook</h1>
                <p className="my-para">Hey here's an example description</p>
                <div>example sign-in modal</div>
            </section>

            <section className="mt-8">
                <div className="mt-4 space-y-8">{listEntries}</div>
            </section>

            <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mt-8">
                <Link href="/">
                    <a className="underline text-blue-400 hover:text-blue-600">
                        ← Back
                    </a>
                </Link>
                <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mt-8 mb-8" />
                <CcName></CcName>
            </footer>
        </Container>
    );
}

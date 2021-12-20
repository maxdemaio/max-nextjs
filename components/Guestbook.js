import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { format } from 'date-fns';
import useSWR, { useSWRConfig } from 'swr';

import LoadingSpinner from '@/components/LoadingSpinner';
import fetcher from 'lib/fetcher';

function GuestbookEntry({ entry, user }) {
  const { mutate } = useSWRConfig();
  const deleteEntry = async (e) => {
    e.preventDefault();

    await fetch(`/api/guestbook/${entry.id}`, {
      method: 'DELETE',
    });

    mutate('/api/guestbook');
  };

  return (
    <div key={entry.id}>
      <div className="mb-2">{entry.body}</div>
      <div className="flex items-center space-x-3">
        <p className="text-gray-500 dark:text-gray-500">{entry.created_by}</p>
        <span className="text-center text-sm text-gray-300 dark:text-gray-700">
          x
        </span>
        <p className="text-gray-500 dark:text-gray-500">
          {format(new Date(entry.updated_at), "d MMM yyyy 'at' h:mm bb")}
        </p>
        {user && entry.created_by === user.name && (
          <>
            <span className="text-center text-sm text-gray-300 dark:text-gray-700">
              x
            </span>
            <button
              className="text-red-600 dark:text-red-400"
              onClick={deleteEntry}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default function Guestbook({ fallbackData }) {
  const { data: session } = useSession();
  const [inputEl, setInputEl] = useState('');
  const [form, setForm] = useState({ state: 'Initial' });
  const { mutate } = useSWRConfig();
  const { data: entries } = useSWR('/api/guestbook', fetcher, {
    fallbackData,
  });

  const leaveEntry = async (e) => {
    e.preventDefault();
    setForm({ state: 'Loading' });

    const res = await fetch('/api/guestbook', {
      body: JSON.stringify({
        body: inputEl,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: 'Error',
        message: error,
      });
      return;
    }

    setInputEl('');
    mutate('/api/guestbook');
    setForm({
      state: 'Success',
      message: `Sweet! Thank you for signing my Guestbook 😁`,
    });
  };

  return (
    <>
      <div className="p-4 border border-gray-200 rounded w-full dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
        <h2 className="my-h2">Sign the Guestbook</h2>
        {!session && (
          <div>
            <p className="text-gray-700 dark:text-white mb-4">
              Feel free to leave an entry in the guestbook! It could be anything
              – appreciation, information, wisdom, or even humor. Surprise me!
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
                Log in
              </a>
            </div>
            <p className="text-gray-700 dark:text-white mb-4">
              Your information is only used to display your GitHub profile name,
              reply by email, and time posted.
            </p>
          </div>
        )}
        {session && (
          <div>
            <p className="text-gray-700 dark:text-white mb-4">
              Logged in as {session.user.name}. Feel free to leave an entry in
              the guestbook! It could be anything – appreciation, information,
              wisdom, or even humor. Surprise me!
            </p>

            <div className="mb-4 flex flex-row flex-wrap justify-between items-center">
              <a
                href={`/api/auth/signout`}
                className="mb-2 mr-2 bg-gray-600 hover:bg-gray-700 text-md text-white font-bold py-2 px-4 rounded-full"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Logout
              </a>
              <form
                onSubmit={leaveEntry}
                className="mb-2 grow mr-2 flex flex-row"
              >
                <input
                  value={inputEl}
                  onChange={(e) => setInputEl(e.target.value)}
                  type="text"
                  required
                  placeholder="Your entry..."
                  className="w-full rounded p-2"
                />
                <button
                  type="submit"
                  className="ml-2 bg-gray-600 hover:bg-gray-700 text-md text-white font-bold py-2 px-4 rounded"
                >
                  {/* Ternary if loading show spinner if not show 'Sign' */}
                  {form.state === 'Loading' ? <LoadingSpinner /> : 'Sign'}
                </button>
              </form>
            </div>
            {/* Based on form state, show message below input box */}
            {form.state === 'Error' ? (
              <p className="text-red-700 dark:text-red-400 mb-4">
                {form.message}
              </p>
            ) : form.state === 'Success' ? (
              <p className="text-green-700 dark:text-green-400 mb-4">
                {form.message}
              </p>
            ) : (
              <p className="text-gray-700 dark:text-white mb-4">
                Your information is only used to display your GitHub profile
                name, reply by email, and time posted.
              </p>
            )}
          </div>
        )}
      </div>

      <section className="mb-8 w-full">
        <h2 className="my-h2">Entries</h2>
        <div className="space-y-8">
          {entries?.map((entry) => (
            <GuestbookEntry key={entry.id} entry={entry} user={session?.user} />
          ))}
        </div>
      </section>
    </>
  );
}

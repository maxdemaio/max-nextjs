import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { format } from 'date-fns';
import useSWR, { useSWRConfig } from 'swr';

import LoadingSpinner from '/components/LoadingSpinner';
import fetcher from 'lib/fetcher';
import GithubIcon from './GithubIcon';

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
            <div className="mb-4 flex flex-row justify-between items-center">
              <a
                href={`/api/auth/signin`}
                className="mb-4 bg-blue-500 hover:bg-blue-700 text-md text-white font-bold py-2 px-4 rounded"
                onClick={(e) => {
                  e.preventDefault();
                  signIn('github', {
                    callbackUrl: 'https://maxdemaio.com/guestbook',
                  });
                }}
              >
                Log in with GitHub{' '}
                <svg
                  className="my-svg-side"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.07 20.503a1 1 0 0 0-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.708 5.708 0 0 0-1.837-2.415a1.2 1.2 0 0 1-.167-.11a1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.004.815.81 1.338 1.141 1.514a4.44 4.44 0 0 1 .924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098l.004.268a1 1 0 0 0 2 0l-.005-.318c-.005-.19-.012-.464-.012-1.182zM20.737 5.377c.032-.125.063-.264.09-.42a6.278 6.278 0 0 0-.408-3.293a1.002 1.002 0 0 0-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.87 13.87 0 0 0-6.354 0C6.762.75 5.455.966 5.102 1.079a.997.997 0 0 0-.631.584a6.3 6.3 0 0 0-.404 3.357c.025.127.051.246.079.354a6.27 6.27 0 0 0-1.256 3.83a8.422 8.422 0 0 0 .043.921c.334 4.603 3.334 5.984 5.424 6.459a4.591 4.591 0 0 0-.118.4a1 1 0 0 0 1.942.479a1.678 1.678 0 0 1 .468-.878a1 1 0 0 0-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a6.61 6.61 0 0 1-.033-.738a4.258 4.258 0 0 1 .92-2.713a3.022 3.022 0 0 1 .195-.231a1 1 0 0 0 .188-1.025a3.388 3.388 0 0 1-.155-.555a4.094 4.094 0 0 1 .079-1.616a7.543 7.543 0 0 1 2.415 1.18a1.009 1.009 0 0 0 .827.133a11.777 11.777 0 0 1 6.173.001a1.005 1.005 0 0 0 .83-.138a7.572 7.572 0 0 1 2.406-1.19a4.04 4.04 0 0 1 .087 1.578a3.205 3.205 0 0 1-.169.607a1 1 0 0 0 .188 1.025c.078.087.155.18.224.268A4.122 4.122 0 0 1 20 9.203a7.039 7.039 0 0 1-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 0 0-.546 1.746a1.63 1.63 0 0 1 .466.908a3.06 3.06 0 0 1 .093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 1 0 2 0c0-.217 0-.692.01-1.34v-2.35a4.881 4.881 0 0 0-.155-1.311a4.256 4.256 0 0 0-.116-.416a6.513 6.513 0 0 0 5.445-6.424A8.697 8.697 0 0 0 22 9.203a6.13 6.13 0 0 0-1.263-3.826z"></path>
                </svg>
              </a>
            </div>
            <p className="text-black dark:text-white mb-8">
              Your information is only used to display your GitHub profile name,
              reply by email, and time posted.
            </p>
          </div>
        )}
        {session && (
          <div>
            <div className="mb-4 flex flex-row flex-wrap justify-between items-center">
              <a
                href={`/api/auth/signout`}
                className="mb-4 mr-2 bg-gray-600 hover:bg-gray-700 text-md text-white font-bold py-2 px-4 rounded"
                onClick={(e) => {
                  e.preventDefault();
                  signOut('github', {
                    callbackUrl: 'https://maxdemaio.com/guestbook',
                  });
                }}
              >
                Log out
              </a>
              <form
                onSubmit={leaveEntry}
                className="mb-4 grow mr-2 flex flex-row"
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
                  className="ml-2 bg-blue-500 hover:bg-blue-700 text-md text-white font-bold py-2 px-4 rounded"
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
              <p className="text-black dark:text-white mb-8">
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

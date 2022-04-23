export default function MyTrack(track) {
  return (
    <div className="flex flex-row items-baseline border-b border-gray-200 dark:border-gray-800 w-full mb-8">
      <div className="flex flex-col pl-3">
        <a
          className="font-medium underline decoration-orange-300 decoration-2 text-gray-900 dark:text-gray-100 truncate w-60 sm:w-96 md:w-full"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </a>
        {track.original ? (
          <p
            className="text-gray-500 mb-4 truncate w-60 sm:w-96 md:w-full"
            color="gray.500"
          >
            &nbsp;
          </p>
        ) : (
          <p
            className="text-gray-500 mb-4 truncate w-60 sm:w-96 md:w-full"
            color="gray.500"
          >
            {track.artist}
          </p>
        )}
      </div>
    </div>
  );
}

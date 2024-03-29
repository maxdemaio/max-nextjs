import { ETrack } from "lib/types";

export default function Track(props: ETrack) {
  return (
    <div className="flex flex-row items-baseline border-b border-gray-200 dark:border-gray-800 w-full mb-8">
      <p className="text-sm font-bold text-gray-400 dark:text-gray-600">
        {props.ranking}
      </p>
      <div className="flex flex-col pl-3">
        <a
          className="font-medium underline decoration-green-300 decoration-2 text-gray-900 dark:text-gray-100 truncate w-60 sm:w-96 md:w-full"
          href={props.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.title}
        </a>
        <p
          className="text-gray-500 mb-4 truncate w-60 sm:w-96 md:w-full"
          color="gray.500"
        >
          {props.artist}
        </p>
      </div>
    </div>
  );
}

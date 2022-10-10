export default function YoutubeStats(props: IYoutubeStats) {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 w-full">
      <div className="transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-lg shadow-md outline outline-1 outline-gray-200 dark:outline-gray-800 rounded p-4 max-w-72 w-full">
        <h3 className="text-gray-900 dark:text-gray-100">Total Subscribers</h3>
        <p className="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white">
          {props.subscriberCount}
        </p>
      </div>

      <div className="transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-lg shadow-md outline outline-1 outline-gray-200 dark:outline-gray-800 rounded p-4 max-w-72 w-full">
        <h3 className="flex items-center text-gray-900 dark:text-gray-100">
          Total Views
        </h3>
        <p className="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white">
          {props.viewCount}
        </p>
      </div>

      <div className="transition duration-500 ease-in-out hover:-translate-y-2 hover:shadow-lg shadow-md outline outline-1 outline-gray-200 dark:outline-gray-800 rounded p-4 max-w-72 w-full">
        <h3 className="flex items-center text-gray-900 dark:text-gray-100">
          Videos Uploaded
        </h3>
        <p className="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white">
          {props.videoCount}
        </p>
      </div>
    </div>
  );
}

export interface IYoutubeStats {
  subscriberCount: string;
  viewCount: string;
  videoCount: string;
}

export default function YoutubeStats({ stats }) {
    return (
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 w-full">
            <div className="transition duration-500 ease-in-out hover:-translate-y-2 shadow-md border border-gray-200 dark:border-gray-800 rounded p-4 max-w-72 w-full">
                <h3 className="text-gray-900 dark:text-gray-100">Total Subscribers</h3>
                <p className="text-3xl font-bold spacing-sm text-black dark:text-white">{stats.subscriberCount}</p>
            </div>

            <div className="transition duration-500 ease-in-out hover:-translate-y-2 shadow-md border border-gray-200 dark:border-gray-800 rounded p-4 max-w-72 w-full">
                <h3 className="flex items-center text-gray-900 dark:text-gray-100">Total Views</h3>
                <p className="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white">{stats.viewCount}</p>
            </div>

            <div className="transition duration-500 ease-in-out hover:-translate-y-2 shadow-md border border-gray-200 dark:border-gray-800 rounded p-4 max-w-72 w-full">
                <h3 className="flex items-center text-gray-900 dark:text-gray-100">Videos Uploaded</h3>
                <p className="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white">{stats.videoCount}</p>
            </div>
        </div>
    );
}
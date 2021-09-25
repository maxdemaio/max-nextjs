export default function YoutubeStats({ stats }) {
    return (
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 w-full">
            <div className="border border-gray-200 dark:border-gray-800 rounded p-4 max-w-72 w-full">
                <div className="flex items-center text-gray-900 dark:text-gray-100">Total Subscribers</div>
                <p className="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white">{stats.subscriberCount}</p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded p-4 max-w-72 w-full">
                <div className="flex items-center text-gray-900 dark:text-gray-100">Total Views</div>
                <p className="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white">{stats.viewCount}</p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded p-4 max-w-72 w-full">
                <div className="flex items-center text-gray-900 dark:text-gray-100">Videos Uploaded</div>
                <p className="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white">{stats.videoCount}</p>
            </div>
        </div>
    );
}
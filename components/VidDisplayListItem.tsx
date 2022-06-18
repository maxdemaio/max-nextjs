import DateComp from './DateComp';

export default function VidDisplayListItem({vid}) {
  return (
    <div className="opacity-80 hover:opacity-100">
      <a href={'https://www.youtube.com/watch?v=' + vid.id.videoId}>
        <h2 className="text-black dark:text-white">{vid.snippet.title}</h2>
        <p className="text-gray-500 dark:text-gray-500">
          <DateComp dateString={vid.snippet.publishedAt} />
        </p>
      </a>
    </div>
  );
}

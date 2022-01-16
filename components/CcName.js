export default function CcName() {
  return (
    <div>
      <span>
        <a
          className="underline text-blue-400 hover:text-blue-600"
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        >
          CC BY-NC-SA 4.0
        </a>
        <span className="text-gray-700 dark:text-gray-400">
          {' '}
          {new Date().getFullYear()} © Maxwell DeMaio
        </span>
      </span>
    </div>
  );
}

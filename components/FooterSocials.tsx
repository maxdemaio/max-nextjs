import Link from "next/link";

export default function FooterSocials() {
  return (
    <div className=" grid grid-cols-3">
      <div className="flex flex-col space-y-4 mb-8">
        <Link href="/">
          <a className="my-nav-link dark:my-nav-link-dark">Home</a>
        </Link>

        <Link href="/posts">
          <a className="my-nav-link dark:my-nav-link-dark">Posts</a>
        </Link>

        <Link href="/software">
          <a className="my-nav-link dark:my-nav-link-dark">Software</a>
        </Link>
      </div>

      <div className="flex flex-col space-y-4 mb-8">
        <a
          className="my-nav-link dark:my-nav-link-dark"
          href="https://www.linkedin.com/in/maxdemaio/"
          aria-label="LinkedIn link"
        >
          LinkedIn
        </a>

        <a
          className="my-nav-link dark:my-nav-link-dark"
          href="https://twitter.com/maxwelldemaio"
          aria-label="Twitter link"
        >
          Twitter
        </a>

        <a
          className="my-nav-link dark:my-nav-link-dark"
          href="https://github.com/maxdemaio"
          aria-label="GitHub link"
        >
          GitHub
        </a>

        <a
          className="my-nav-link dark:my-nav-link-dark"
          href="https://www.youtube.com/channel/UCXzTmvY30ODYPrpVImJEVBQ"
          aria-label="YouTube link"
        >
          YouTube
        </a>
        <a
          className="my-nav-link dark:my-nav-link-dark"
          href="https://www.duolingo.com/profile/maxdemaio"
          aria-label="Duolingo link"
        >
          Duolingo
        </a>
      </div>

      <div className="flex flex-col space-y-4 mb-8">
        <Link href="/videos">
          <a className="my-nav-link dark:my-nav-link-dark">Videos</a>
        </Link>

        <Link href="/music">
          <a
            aria-label="Music link"
            className="my-nav-link dark:my-nav-link-dark"
          >
            Music
          </a>
        </Link>
      </div>
    </div>
  );
}

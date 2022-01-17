import Link from 'next/link';

function FooterSocials() {
  return (
    <div className="flex justify-between mb-8">
      <div>
        <div>
          <Link href="/">
            <a className="my-nav-link">Home</a>
          </Link>
        </div>
        <div>
          <Link href="/posts">
            <a className="my-nav-link">Posts</a>
          </Link>
        </div>
        <div>
          <Link href="/software">
            <a className="my-nav-link">Software</a>
          </Link>
        </div>
      </div>
      <div>
        <div>
          <a
            className="my-nav-link"
            href="https://twitter.com/maxwelldemaio"
            aria-label="Twitter link"
          >
            Twitter
          </a>
        </div>
        <div>
          <a
            className="my-nav-link"
            href="https://github.com/maxdemaio"
            aria-label="GitHub link"
          >
            GitHub
          </a>
        </div>
        <div>
          <a
            className="my-nav-link"
            href="https://www.youtube.com/channel/UCXzTmvY30ODYPrpVImJEVBQ"
            aria-label="YouTube link"
          >
            YouTube
          </a>
        </div>
      </div>

      <div>
        <div>
          <a
            className="my-nav-link"
            href="https://www.duolingo.com/profile/maxwelldemaio"
            aria-label="Duolingo link"
          >
            Duolingo
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterSocials;

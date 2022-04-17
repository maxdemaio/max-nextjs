import Link from 'next/link';

function FooterSocials() {
  return (
    <div className=" grid grid-cols-3">
      <div className="flex flex-col space-y-4 mb-8">
        <Link href="/">
          <a className="my-nav-link">Home</a>
        </Link>

        <Link href="/posts">
          <a className="my-nav-link">Posts</a>
        </Link>

        <Link href="/software">
          <a className="my-nav-link">Software</a>
        </Link>
      </div>

      <div className="flex flex-col space-y-4 mb-8">
        <a
          className="my-nav-link"
          href="https://twitter.com/maxwelldemaio"
          aria-label="Twitter link"
        >
          Twitter
        </a>

        <a
          className="my-nav-link"
          href="https://github.com/maxdemaio"
          aria-label="GitHub link"
        >
          GitHub
        </a>

        <a
          className="my-nav-link"
          href="https://www.youtube.com/channel/UCXzTmvY30ODYPrpVImJEVBQ"
          aria-label="YouTube link"
        >
          YouTube
        </a>
        <a
          className="my-nav-link"
          href="https://www.duolingo.com/profile/maxwelldemaio"
          aria-label="Duolingo link"
        >
          Duolingo
        </a>
      </div>

      <div className="flex flex-col space-y-4 mb-8">
        <Link href="/guestbook">
          <a aria-label="Guestbook link" className="my-nav-link">
            Guestbook
          </a>
        </Link>

        <Link href="/products">
          <a aria-label="Products link" className="my-nav-link">
            Products
          </a>
        </Link>

        <Link href="/music">
          <a aria-label="Music link" className="my-nav-link">
            Music
          </a>
        </Link>
      </div>
    </div>
  );
}

export default FooterSocials;

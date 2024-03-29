import Link from "next/link";
import FooterSocials from "./FooterSocials";
import CcName from "./CcName";

export default function BlogFooter() {
  const moveToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="mt-8">
      <Link href="/posts">
        <a className="my-link-blue dark:my-link-blue-dark">← Back</a>
      </Link>
      {/* To top button */}
      <button className="cursor-pointer float-right" onClick={moveToTop}>
        <a className="my-link-blue dark:my-link-blue-dark">↑ Top</a>
      </button>
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mt-8 mb-8" />
      <p className="my-para">
        <strong>max overflow</strong> is a blog about business, language, and
        computer science. Sometimes my thoughts overflow and end up here for
        safekeeping.
      </p>
      <p className="my-para">
        For corrections (typos, factual inaccuracies), please file a{" "}
        <a
          href="https://github.com/maxdemaio/max-nextjs/issues"
          className="my-link-blue dark:my-link-blue-dark"
        >
          GitHub issue
        </a>
        .
      </p>
      <FooterSocials />
      <CcName />
    </footer>
  );
}

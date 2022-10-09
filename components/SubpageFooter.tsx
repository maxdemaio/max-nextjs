import Link from "next/link";

import CcName from "./CcName";
import FooterSocials from "./FooterSocials";

export default function SubpageFooter() {
  return (
    <footer className="w-full mt-8">
      <Link href="/">
        <a className="my-link-blue">← Back</a>
      </Link>
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mt-8 mb-8" />
      <FooterSocials />
      <CcName></CcName>
    </footer>
  );
}

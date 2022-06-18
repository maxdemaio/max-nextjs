import Link from 'next/link';

import CcName from '/components/CcName';
import FooterSocials from '/components/FooterSocials';

function SubpageFooter() {
  return (
    <footer className="w-full mt-8">
      <Link href="/">
        <a className="underline text-blue-400 hover:text-blue-600">← Back</a>
      </Link>
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mt-8 mb-8" />
      <FooterSocials />
      <CcName></CcName>
    </footer>
  );
}

export default SubpageFooter;

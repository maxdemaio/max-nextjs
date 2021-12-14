import Container from '@/components/Container';
import Link from 'next/link';
import CcName from '@/components/CcName';

export default function Guestbook() {
  return (
    <Container title="Guestbook – Max DeMaio">
      <section>
        <h1 className="my-h1">Guestbook</h1>
        <p className="my-para">Hey here's an example description</p>
      </section>

      <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mt-8">
        <Link href="/">
          <a className="underline text-blue-400 hover:text-blue-600">← Back</a>
        </Link>
        <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mt-8 mb-8" />
        <CcName></CcName>
      </footer>
    </Container>
  );
}

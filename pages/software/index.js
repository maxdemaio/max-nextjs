import Container from '@/components/Container';
import NestedFooter from '@/components/NestedFooter';
import Link from 'next/link';

export default function Software() {
    return (
        <Container title="Software – Max DeMaio">
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
            <section>
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 text-black dark:text-white">Software</h1>
                <p class="text-gray-600 dark:text-gray-400 mb-8">
                    During this workshop, you'll learn how to integrate Prisma with Next.js and build a statically-generated site that displays a list of your favorite songs. We'll use Chakra UI for styling and deploy our site with Vercel.
                </p>
            </section>
            <section>
                    <h2 className="font-bold text-3xl tracking-tight mb-8 mt-8 text-black dark:text-white">Featured Projects</h2>
                    <div className="grid auto-cols-max grid-cols-2 gap-4">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </div>
            </section>

            <section>
                    <h2 className="font-bold text-3xl tracking-tight mb-8 mt-8 text-black dark:text-white">Software Repository</h2>
            </section>
            <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mt-4">
                <Link href="/">
                    <a className="underline text-blue-400 hover:text-blue-600">← Back</a>
                </Link>
                <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mt-8 mb-8" />
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    <span><a className="underline text-blue-400 hover:text-blue-600" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> 2021 © Maxwell DeMaio</span>
                </p>
            </footer>
        </div>
        </Container>
    );
}
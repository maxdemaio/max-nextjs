import Container from '@/components/Container';
import NestedFooter from '@/components/NestedFooter';


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
            <NestedFooter></NestedFooter>
        </div>
        </Container>
    );
}
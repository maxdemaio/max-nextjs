import Container from '@/components/Container';
import Image from 'next/image';

import { shimmer, toBase64 } from '@/lib/imageManip';
import SubpageFooter from '@/components/SubpageFooter';

function Products() {
  return (
    <Container title="Products – Max DeMaio">
      <section>
        <h1 className="my-h1">
          Products
          <svg
            className="my-svg-header"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
          >
            <path
              d="M25 2a11.01 11.01 0 0 0-10.245 7.024A6.994 6.994 0 0 0 9 6H6v3a7.008 7.008 0 0 0 7 7h1v9.05a9.923 9.923 0 0 0-6.071 2.879l1.414 1.414a8 8 0 0 1 12.309 1.213l1.661-1.113A9.98 9.98 0 0 0 16 25.062V16h1A11.012 11.012 0 0 0 28 5V2zM13 14a5.006 5.006 0 0 1-5-5V8h1a5.005 5.005 0 0 1 5 5v1zm13-9a9.01 9.01 0 0 1-9 9h-1v-1a9.01 9.01 0 0 1 9-9h1z"
              fill="currentColor"
            ></path>
          </svg>
        </h1>

        <p className="my-para">
          Home for the products I've created. If you'd like to support my open
          source work instead, feel free to visit my{' '}
          <a
            href="https://github.com/sponsors/maxdemaio"
            className="underline text-pink-400 hover:text-pink-600"
          >
            GitHub Sponsors page ♥
          </a>
          .
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 gap-6">
          <div className="transition ease-in-out delay-75 hover:-translate-y-1 hover:shadow-lg hover:scale-105 duration-500 rounded shadow-md outline outline-1 outline-gray-200 dark:outline-gray-800">
            <div>
              <Image
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(1920, 1074)
                )}`}
                src="/static/images/products/homeCloseView.png"
                className="rounded-t"
                height={1074}
                width={1920}
                alt="Notion Development & Content HQ Picture"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold">Development & Content HQ</h3>
              <p>Notion dashboard for projects, planning, content, & notes.</p>
              <p>
                <a
                  className="my-link"
                  href="https://maxdemaio.gumroad.com/l/notion-dev-content-hq"
                >
                  maxdemaio.gumroad.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <SubpageFooter />
    </Container>
  );
}

export default Products;

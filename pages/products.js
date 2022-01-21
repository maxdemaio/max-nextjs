import Container from '@/components/Container';
import Image from 'next/image';

import { shimmer, toBase64 } from '@/lib/imageManip';

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

        <p className="my-para">Here you'll find my products I've created.</p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="shadow rounded">
            <div>
              <Image
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475)
                )}`}
                src="/static/images/products/homeCloseView.png"
                className="rounded-t"
                height={224}
                width={400}
                alt="Notion Development & Content HQ Picture"
              />
            </div>
            <h3>card title with icon to the left</h3>
            <p>card description</p>
            <p>card link</p>
          </div>
          <div className="shadow rounded">
            <div>
              <Image
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475)
                )}`}
                src="/static/images/products/homeCloseView.png"
                className="rounded-t"
                height={224}
                width={400}
                alt="Notion Development & Content HQ Picture"
              />
            </div>
            <h3>card title with icon to the left</h3>
            <p>card description</p>
            <p>card link</p>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Products;

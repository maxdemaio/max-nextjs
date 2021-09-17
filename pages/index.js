import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image'
import Footer from '../components/footer';

export default function Home() {
  const siteTitle = "Max DeMaio";

  return (
      <>
      <div className="mt-8 mb-8 mx-auto p-4 prose prose-lg">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content="Max DeMaio" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <header className="select-none text-center">
          <h1>Max DeMaio</h1>
          <>
            <Image
              priority
              src="/images/me.jpg"
              className={utilStyles.borderCircle}
              height={400}
              width={400}
              alt="Max DeMaio"
            />
          </>
        </header>

        <main>
          <section>
            <p>
              Hi, I'm Max! I'm self-learning computer science, creating practical business solutions,
              and designing software architecture through research & development.
              Currently, I'm working as an Associate Software Developer at <a href="https://www.infosys.com/" class="myLink">Infosys</a>
              {' '}where I work on client facing applications in an agile environment.
              I'm working on
              growing my skills and gaining exposure to a variety of technology,
              whether that be through work or personal projects.
              When I'm not glued to my computer, I enjoy playing the guitar, chess, and learning languages.
            </p>
            <p>
              You can follow me on <a href="https://twitter.com/maxwelldemaio" class="myLink">Twitter</a>
              {' '}where I mostly post about language, technology, and business. Most of my work is open source
              and publicly available on <a href="https://github.com/maxwelldemaio" class="myLink">GitHub</a>.
              Feel free to reach out and contact me at any of the links on my website.
            </p>
          </section>
        </main>
        
        <Footer></Footer>
      </div>
    </>
  )
}
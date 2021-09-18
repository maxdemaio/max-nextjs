import Container from '@/components/Container';
import Image from 'next/image'
import Footer from '@/components/Footer';

export default function Home() {
  const siteTitle = "Max DeMaio";

  return (
      <>
      <Container>
        <header className="text-center">
          <h1 className="select-none font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Max DeMaio
          </h1>
          <>
            <Image
              priority
              src="/images/me.jpg"
              className="rounded-full"
              height={400}
              width={400}
              alt="Max DeMaio"
            />
          </>
        </header>

        <div className="mt-4 mb-4 mx-auto p-4 prose prose-lg">
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
        </div>
        <Footer></Footer>
      </Container>
    </>
  )
}
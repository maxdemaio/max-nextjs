import Container from '@/components/Container';
import Image from 'next/image';

export default function Home() {
  const siteTitle = "Max DeMaio";

  return (
      <Container>
        <div className="text-lg flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
          <div className="header-section flex items-center justify-center flex-wrap mb-6">
            <div className="header-frame p-2 lg:p-3">
              <h1 className="select-none font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white">
                  Max DeMaio
              </h1>
              <h2 className="font-bold text-3xl tracking-tight text-gray-600 dark:text-gray-400">
                Something cool here
              </h2>
            </div>

            <div className="image-frame p-2 lg:p-3">
              <Image
                priority
                src="/images/me.jpg"
                className="rounded-full"
                height={300}
                width={300}
                alt="Max DeMaio"
              />
            </div>
          </div>

        
          <section>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
                Hi, I'm Max! I'm self-learning computer science, creating practical business solutions,
                and designing software architecture through research & development.
                Currently, I'm working as an Associate Software Developer at <a href="https://www.infosys.com/">Infosys</a>
                {' '}where I work on client facing applications in an agile environment.
                I'm working on
                growing my skills and gaining exposure to a variety of technology,
                whether that be through work or personal projects.
                When I'm not glued to my computer, I enjoy playing the guitar, chess, and learning languages.
              </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
                You can follow me on <a href="https://twitter.com/maxwelldemaio">Twitter</a>
                {' '}where I mostly post about language, technology, and business. Most of my work is open source
                and publicly available on <a href="https://github.com/maxwelldemaio">GitHub</a>.
                Feel free to reach out and contact me at any of the links on my website.
            </p>
          </section>

          
        <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
          <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8"/>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            <span><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> 2021 © Maxwell DeMaio</span>
          </p>
        </footer>
      </div>
      </Container>
  )
}
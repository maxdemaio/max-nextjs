import Container from '@/components/Container';
import Image from 'next/image';

export default function Home() {
  return (
      <Container title="Home - Max DeMaio">
      <div className="text-lg flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
          <div className="header-section flex items-center justify-center flex-wrap mb-10">
            <div className="flex-1 header-frame pr-2 pb-4">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white">
                  Maxwell DeMaio
              </h1>
              <h2 className="font-bold text-3xl tracking-tight text-gray-600 dark:text-gray-400">
                Software Developer in Providence, RI
              </h2>
            </div>

            <div className="image-frame">
              <Image
                priority
                src="/static/images/me.jpg"
                className="rounded-full"
                height={260}
                width={260}
                alt="Max DeMaio"
              />
            </div>
          </div>

        
          <section>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
            Hi, I'm Max! I'm a software developer with a strong will to learn, research new technologies, and design software architecture. 
            I like creating practical business solutions and making development processes as efficient as possible.
            Currently, I'm working as an Associate Software Developer at <a className="underline text-blue-400 hover:text-blue-600" href="https://www.infosys.com/">Infosys</a>
                {' '}where I work on client facing applications in an agile environment.
                I'm working on
                growing my skills and gaining exposure to a variety of technology,
                whether that be through work or personal projects.
                When I'm not glued to my computer, I enjoy playing the guitar, chess, and learning languages.
              </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
            You can follow me on <a className="underline text-blue-400 hover:text-blue-600" href="https://twitter.com/maxwelldemaio">Twitter</a>
                {' '}where I mostly post about language, technology, and business. Most of my work is open source
            and publicly available on <a className="underline text-blue-400 hover:text-blue-600" href="https://github.com/maxwelldemaio">GitHub</a>.
                Feel free to reach out and contact me at any of the links on my website.
            </p>
          </section>

          
        <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full">
          <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mt-8 mb-8" />
          <p className="mb-8">
            <span><a className="underline text-blue-400 hover:text-blue-600" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a><span className="text-gray-600 dark:text-gray-400"> {(new Date().getFullYear())} © Maxwell DeMaio</span></span>
          </p>
        </footer>
      </div>
      </Container>
  )
}
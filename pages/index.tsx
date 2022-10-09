import Image from "next/image";

import CcName from "../components/CcName";
import Container from "../components/Container";
import FooterSocials from "../components/FooterSocials";
import pictureOfMe from "../public/static/images/me2.jpeg";

export default function Home() {
  return (
    <Container
      title="Home - Max DeMaio"
      description="Max DeMaio's personal website"
    >
      <div className="flex flex-col justify-center items-start mx-auto">
        <div className="header-section flex items-center justify-center flex-wrap mb-6">
          <div className="flex-1 header-frame pr-2 mb-6">
            <h1 className="font-bold text-5xl tracking-tight text-black dark:text-white">
              Maxwell DeMaio
            </h1>
            <h2 className="font-bold text-4xl tracking-tight text-gray-600 dark:text-gray-400">
              Software Developer in Providence, RI
            </h2>
          </div>

          <div id="image-frame">
            <Image
              placeholder="blur"
              src={pictureOfMe}
              className="rounded-3xl"
              height={260}
              width={260}
              alt="Max DeMaio"
            />
          </div>
        </div>

        <section>
          <p className="my-para">
            Hi, I'm Max! I'm a self-taught software developer with a strong will
            to learn, research new technologies, and design software
            architecture. I like creating practical business solutions and
            making development processes as efficient as possible. Currently,
            I'm working as an Associate Software Developer at{" "}
            <a className="my-link-blue" href="https://www.logicmanager.com">
              LogicManager
            </a>{" "}
            where I work with frontend and backend technologies in an agile
            environment.
          </p>
          <p className="my-para">
            I'm working on growing my skills and gaining exposure to a variety
            of technology, whether that be through work or personal projects.
            When I'm not glued to my computer, I enjoy playing the guitar,
            chess, and learning languages. Also, I believe in hard work,
            curiosity, and diversity.
          </p>
          <p className="text-gray-700 dark:text-gray-400">
            You can follow me on{" "}
            <a
              className="my-link-blue"
              href="https://twitter.com/maxwelldemaio"
            >
              Twitter
            </a>{" "}
            where I mostly post about software, language, and business. My open
            source projects are publicly available on{" "}
            <a className="my-link-blue" href="https://github.com/maxdemaio">
              GitHub
            </a>
            . Please feel free to reach out and contact me at{" "}
            <a className="my-link-blue" href="mailto:maxwell.demaio@gmail.com">
              maxwell.demaio@gmail.com
            </a>
            .
          </p>
        </section>

        <footer className="w-full">
          <hr className="border-1 border-gray-200 dark:border-gray-800 mt-8 mb-8" />
          <FooterSocials />
          <CcName></CcName>
        </footer>
      </div>
    </Container>
  );
}

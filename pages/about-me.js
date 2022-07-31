import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import profilePic from "../public/james-john-baines.jpg";
import PhoneIcon from "../public/phone.svg";
import EmailIcon from "../public/email.svg";
import thumb from "../public/thumb.png";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>James Baines - About me</title>
      </Head>

      <main>
        <Header />

        <div className="container mx-auto px-4 md:max-w-screen-lg lg:max-w-screen-xl">
          <div className="md:flex">
            <div className="md:pr-16">
              <Image
                src={profilePic}
                placeholder="blur"
                blurDataURL={thumb}
                alt="James standing in front of a bush, while holding a camera."
              />
            </div>
            <div className="flex items-center">
              <div>
                <p className="mb-8">
                  Hi! I&apos;m James, a freelance senior creative producer with
                  over ten years&apos; experience helping brands tell stories.
                </p>
                <p className="mb-8">
                  I specialise in video (branded content, TVC) and stills,
                  assisting throughout the entire storytelling process; from
                  forming the creative, strategy and art direction through to
                  production and execution. I&apos;ve been fortunate enough to
                  have worked with some amazing brands such as Nikon, BAFTA
                  (EE), Google (YouTube/Maps), Xbox, P&amp;G, Intel Gaming,
                  Dolby, Sonos and NET-A-PORTER to name a few.
                </p>
                <p className="mb-8">
                  Key skills and experience include organising, running and
                  directing domestic and international shoots, 3D animation,
                  senior client management/counsel, story development,
                  copywriting and photography.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:justify-between md:flex-row my-8">
            <Link href="tel:+447983981093">
              <a className="group">
                <div className="flex items-center mb-4">
                  <div className="bg-black group-hover:bg-violet-500 group-focus:bg-violet-500 rounded-full p-4 mr-2">
                    <PhoneIcon className="h-8 w-8 fill-white block" />
                  </div>
                  <div className="group-hover:text-violet-500 group-focus:text-violet-500">
                    <p className="uppercase">Call</p>
                    <p>+44 (0) 798 398 1093</p>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="mailto:jamesjohnbaines@gmail.com">
              <a className="group">
                <div className="flex items-center mb-4">
                  <div className="bg-black group-hover:bg-violet-500 group-focus:bg-violet-500 rounded-full p-4 mr-2">
                    <EmailIcon className="h-8 w-8 fill-white" />
                  </div>

                  <div className="group-hover:text-violet-500 group-focus:text-violet-500">
                    <p className="uppercase">Email</p>

                    <p>jamesjohnbaines@gmail.com</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

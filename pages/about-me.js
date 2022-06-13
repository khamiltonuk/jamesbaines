import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import profilePic from "../public/james-john-baines.jpg";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>James Baines - About me</title>
      </Head>

      <main>
        <Header />

        <div className="container mx-auto px-4 max-w-screen-md">
          <div className="flex flex-col md:flex-row">
            <div className="md:mr-8">
              <Image
                src={profilePic}
                placeholder="blur"
                blurDataURL={`/_next/image?url=${profilePic}&w=16&q=1`}
                alt="James standing in front of a bush, while holding a camera."
              />
            </div>
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
                have worked with some amazing brands such as Nikon, BAFTA (EE),
                Google (YouTube/Maps), Xbox, P&amp;G, Intel Gaming, Dolby, Sonos
                and NET-A-PORTER to name a few.
              </p>
              <p className="mb-8">
                Key skills and experience include organising, running and
                directing domestic and international shoots, 3D animation,
                senior client management/counsel, story development, copywriting
                and photography.
              </p>
              <p>
                <a href="tel:+447983981093">Call - +44 (0) 798 398 1093</a>
              </p>
              <p>
                Email –
                <Link href="mailto:jamesjohnbaines@gmail.com">
                  <a className="hover:text-violet-500 focus:text-violet-500">
                    jamesjohnbaines@gmail.com
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

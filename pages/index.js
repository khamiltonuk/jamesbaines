import Head from "next/head";
import Script from "next/script";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";

import gillette1 from "../public/gillette-1.png";
import gillette2 from "../public/gillette-2.png";
import microsoft1 from "../public/microsoft-1.png";
import microsoft2 from "../public/microsoft-2.png";
import microsoft3 from "../public/microsoft-3.png";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>James Baines - Producer</title>
      </Head>

      <main>
        <Header />

        <div className="container mx-auto px-4 max-w-screen-md">
          <h3 className="text-center subtitle-text mb-4 uppercase">Showreel</h3>
          <div
            style={{ padding: "56.25% 0 0 0" }}
            className="relative mb-8 bg-black"
          >
            <iframe
              src="https://player.vimeo.com/video/572182219?h=afa1c40c1d&autoplay=1"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <Script src="https://player.vimeo.com/api/player.js"></Script>

          <p className="text-center subtitle-text mb-4 uppercase">
            latest Work
          </p>
          <ul className="grid gap-0 grid-cols-1 grid-rows-1 md:gap-4 md:grid-cols-3 md:grid-rows-3">
            <li>
              <a
                href="https://vimeo.com/manage/videos/699393579"
                className="hover:text-violet-600 text:fill-violet-600 my-4 block"
              >
                <Image src={gillette1} alt="" />
                <h3 className="uppercase font-bold">GILLETTE</h3>
                <p>
                  Master Your Style w/ Fred Sirieix Xmas Short Creative Producer
                  / Co-Director | Online
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://vimeo.com/manage/videos/699397481"
                className="hover:text-violet-600 text:fill-violet-600 my-4 block"
              >
                <Image src={gillette2} alt="" />
                <h3 className="uppercase font-bold">GILLETTE</h3>
                <p>
                  Master Your Style w/ Fred Sirieix Valentine’s Day Short
                  Creative Producer / Co-Director | Online
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://vimeo.com/manage/videos/706235869"
                className="hover:text-violet-600 text:fill-violet-600 my-4 block"
              >
                <Image src={microsoft1} alt="" />
                <h3 className="uppercase font-bold">MICROSOFT TEAMS</h3>
                <p>
                  NICE Has You Covered | Still in Bed Short Creative Producer |
                  TVC
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://vimeo.com/manage/videos/698688434"
                className="hover:text-violet-600 text:fill-violet-600 my-4 block"
              >
                <Image src={microsoft2} alt="" />
                <h3 className="uppercase font-bold">MICROSOFT TEAMS</h3>
                <p>
                  NICE Has You Covered | The Delivery Short Creative Producer |
                  TVC
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://vimeo.com/manage/videos/706241133"
                className="hover:text-violet-600 text:fill-violet-600 my-4 block"
              >
                <Image src={microsoft3} alt="" />
                <h3 className="uppercase font-bold">MICROSOFT TEAMS</h3>
                <p>
                  NICE Has You Covered | Distracting Hubbie Short Creative
                  Producer | TVC
                </p>
              </a>
            </li>
          </ul>
        </div>

        <Footer />
      </main>
    </div>
  );
}

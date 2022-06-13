import Head from "next/head";
import Script from "next/script";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";

import gillette1 from "../public/gillette-1.jpg";
import gillette2 from "../public/gillette-2.jpg";
import microsoft1 from "../public/microsoft-1.jpg";
import microsoft2 from "../public/microsoft-2.jpg";
import microsoft3 from "../public/microsoft-3.jpg";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>James Baines - Producer</title>
      </Head>

      <main>
        <Header />

        <div className="container mx-auto px-4 max-w-screen-md">
          <h2 className="text-center subtitle-text mb-4 uppercase">Showreel</h2>
          <div
            style={{ padding: "56.25% 0 0 0" }}
            className="relative mb-8 bg-black"
          >
            <iframe
              src="https://player.vimeo.com/video/572182219?h=afa1c40c1d&autoplay=1&color=8a5cf6"
              title="showreel"
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

          <h2 className="text-center subtitle-text mb-4 uppercase">
            latest Work
          </h2>
          <ul className="latest-work grid gap-0 grid-cols-1 grid-rows-1 md:gap-4 md:grid-cols-3 md:grid-rows-3 ">
            <li>
              <a
                href="https://vimeo.com/manage/videos/699393579"
                className="hover:text-violet-500 text:fill-violet-500 mb-8 block"
              >
                <span className="bg-violet-500 block leading-none">
                  <Image src={gillette1} alt="" />
                </span>
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
                className="hover:text-violet-500 text:fill-violet-500 mb-8 block"
              >
                <span className="bg-violet-500 block leading-none">
                  <Image src={gillette2} alt="" className="hover:opacity-60" />
                </span>
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
                className="hover:text-violet-500 text:fill-violet-500 mb-8 block"
              >
                <span className="bg-violet-500 block leading-none">
                  <Image src={microsoft1} alt="" className="hover:opacity-60" />
                </span>
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
                className="hover:text-violet-500 text:fill-violet-500 mb-8 block"
              >
                <span className="bg-violet-500 block leading-none">
                  <Image src={microsoft2} alt="" className="hover:opacity-60" />
                </span>
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
                className="hover:text-violet-500 text:fill-violet-500 mb-8 block"
              >
                <span className="bg-violet-500 block leading-none">
                  <Image src={microsoft3} alt="" className="hover:opacity-60" />
                </span>
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

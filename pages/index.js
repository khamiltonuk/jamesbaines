import Head from "next/head";
import Script from "next/script";
import Image from "next/image";

import Header from "../components/header";
import gillette1 from "../public/gillette-1.png";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>James Baines - Producer</title>
      </Head>

      <main>
        <Header />

        <div className="container mx-auto px-4 max-w-screen-md">
          <h3 className="text-center">Showreel</h3>
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

          <p className="text-center">latest Work</p>
          <div className="grid gap-4 grid-cols-3 grid-rows-3">
            <a href="https://vimeo.com/manage/videos/699393579">
              <Image src={gillette1} alt="" />
              <h3 className="uppercase font-bold">GILLETTE</h3>
              <p>
                Master Your Style w/ Fred Sirieix Xmas Short Creative Producer /
                Co-Director | Online
              </p>
            </a>
            <a href="https://vimeo.com/manage/videos/699397481">
              <h3 className="uppercase font-bold">GILLETTE</h3>
              <p>
                Master Your Style w/ Fred Sirieix Valentine’s Day Short Creative
                Producer / Co-Director | Online
              </p>
            </a>
            <a href="https://vimeo.com/manage/videos/706235869">
              <h3 className="uppercase font-bold">MICROSOFT TEAMS</h3>
              <p>
                NICE Has You Covered | Still in Bed Short Creative Producer |
                TVC
              </p>
            </a>
            <a href="https://vimeo.com/manage/videos/698688434">
              <h3 className="uppercase font-bold">MICROSOFT TEAMS</h3>
              <p>
                NICE Has You Covered | The Delivery Short Creative Producer |
                TVC
              </p>
            </a>
            <a href="https://vimeo.com/manage/videos/706241133">
              <h3 className="uppercase font-bold">MICROSOFT TEAMS</h3>
              <p>
                NICE Has You Covered | Distracting Hubbie Short Creative
                Producer | TVC
              </p>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

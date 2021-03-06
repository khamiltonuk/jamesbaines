import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import { useState } from "react";

import Modal from "react-modal";

import Header from "../components/Header";
import Footer from "../components/Footer";

import gillette1 from "../public/gillette-1.jpg";
import gillette2 from "../public/gillette-2.jpg";
import microsoft1 from "../public/microsoft-1.jpg";
import microsoft2 from "../public/microsoft-2.jpg";
import microsoft3 from "../public/microsoft-3.jpg";

Modal.setAppElement("#__next");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const latestWork = [
  {
    title: "GILLETTE",
    vimeoId: "699393579",
    image: gillette1,
    subtext:
      "Master Your Style w/ Fred Sirieix Xmas Short Creative Producer / Co-Director | Online",
  },
  {
    title: "GILLETTE",
    vimeoId: "699397481",
    image: gillette2,
    subtext:
      "Master Your Style w/ Fred Sirieix Valentine’s Day Short Creative Producer / Co-Director | Online",
  },
  {
    title: "MICROSOFT TEAMS",
    vimeoId: "706235869",
    image: microsoft1,
    subtext:
      "NICE Has You Covered | Still in Bed Short Creative Producer | TVC",
  },
  {
    title: "MICROSOFT TEAMS",
    vimeoId: "698688434",
    image: microsoft2,
    subtext:
      "NICE Has You Covered | The Delivery Short Creative Producer | TVC",
  },
  {
    title: "MICROSOFT TEAMS",
    vimeoId: "706241133",
    image: microsoft3,
    subtext:
      "NICE Has You Covered | Distracting Hubbie Short Creative Producer | TVC",
  },
];

const CustomModal = ({ title, vimeoId, image, subtext }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="relative mb-8 bg-black" style={{ minHeight: "320px" }}>
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?h=afa1c40c1d&color=8a5cf6`}
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
        <h2 className="subtitle-text font-bold mb-2">{title}</h2>
        <p className="subtitle-text">{subtext}</p>
      </Modal>
      <button
        onClick={openModal}
        className="text-left hover:text-violet-500 text:fill-violet-500 mb-8 block"
      >
        <span className="block leading-none">
          <Image src={image} alt="" />
        </span>
        <h3 className="subtitle-text font-bold mb-1">{title}</h3>
        <p className="subtitle-text">{subtext}</p>
      </button>
    </>
  );
};

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>James Baines - Producer / Filmmaker</title>
      </Head>

      <main>
        <Header />

        <div className="container mx-auto px-4 md:max-w-screen-lg lg:max-w-screen-xl">
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
          <ul className="latest-work grid gap-0 grid-cols-1 grid-rows-1 md:gap-2 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-3">
            {latestWork.map((props, index) => {
              return (
                <li key={index}>
                  <CustomModal {...props} />
                </li>
              );
            })}
          </ul>
        </div>

        <Footer />
      </main>
    </div>
  );
}

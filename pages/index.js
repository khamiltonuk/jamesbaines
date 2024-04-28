import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import { useState, useEffect } from "react";

import Modal from "react-modal";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

Modal.setAppElement("#__next");

const customStyles = {
  content: {
    top: "50%",
    width: "75%",
    maxWidth: "700px",
    maxHeight: "75%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const videoQuery = `
{
  homepageCollection {
    items {
      heroVideo
      videosIds
    }
  }
}
`;

const CustomModal = ({ vimeoId }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [video, setVideo] = useState(null);

  useEffect(() => {
    window
      .fetch(
        `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}`,
        {
          method: "get",
          cache: "no-cache",
          mode: "cors",
        }
      )
      .then((response) => response.json())
      .then((data) => {
        setVideo(data);
      });
  }, [vimeoId]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  if (!video) {
    return null;
  }

  const {
    title,
    description,
    thumbnail_url,
    thumbnail_width,
    thumbnail_height,
  } = video;


  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="relative mb-4 md:mb-8 bg-black video-player">
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
        <h2 className="subtitle-text mb-2">{title}</h2>
        <span className="description-txt">{description}</span>
      </Modal>
      <button
        onClick={openModal}
        className="text-left hover:text-violet-500 text:fill-violet-500 mb-8 block"
      >
        <span className="block leading-none">
          <Image
            src={thumbnail_url.replace("_295x166", "_590x332")}
            alt=""
            width={thumbnail_width * 2}
            height={thumbnail_height * 2}
          />
        </span>
        <h3 className="subtitle-text">{title}</h3>
      </button>
    </>
  );
};

export default function Home() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authenticate the request
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
          },
          // send the GraphQL query
          body: JSON.stringify({ query: videoQuery }),
        }
      )
      .then((response) => response.json())
      .then((response) => {
        if (response.errors) {
          console.error(response.errors);
        }

        // rerender the entire component with new data
        setPage(response.data.homepageCollection.items[0]);
      });
  }, []);

  if (!page) {
    return <Loading />;
  }
  const { heroVideo, videosIds } = page;
  return (
    <div className="container">
      <main>
        <Header />

        <div className="container mx-auto px-4 md:max-w-screen-md lg:max-w-screen-lg">
          <div
            style={{ padding: "56.25% 0 0 0" }}
            className="relative mb-8 bg-black"
          >
            <iframe
              src={`https://player.vimeo.com/video/${heroVideo}?h=afa1c40c1d&autoplay=1&color=8a5cf6`}
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

          <h2 className="text-center header-text font-bold mb-4 uppercase">
            latest Work
          </h2>
          <ul className="latest-work grid gap-0 grid-cols-1 grid-rows-1 md:gap-2 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-3">
            {videosIds.map((vimeoId, index) => {
              return (
                <li key={index}>
                  <CustomModal vimeoId={vimeoId} />
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

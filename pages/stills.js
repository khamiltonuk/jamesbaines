import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Modal from "react-modal";
import Image from "next/image";
import { useState, useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Footer";
import Thumbnail from "../components/Thumbnail";
import VideoThumbnail from "../components/VideoThumbnail";
import Video from "../components/Video";

import EnterFullScreenIcon from "../public/full-screen-svgrepo-com.svg";
import ExitFullScreenIcon from "../public/full-screen-exit-svgrepo-com.svg";

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

const fullSizeStyles = {
  content: {},
};

const query = `
{
    photosCollection {
      items {
        title
        descriptionOfProject
        videoId
        photosCollection {
          items {
            url
            title
            width
            height
          }
        }
      }
    }
    
  }
`;

const CustomModal = ({ work }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isFullsize, setIsFullsize] = useState(false);

  const thumbnail = work.photosCollection.items[0];

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  if (thumbnail == null && !work.videoId) {
    return null;
  }

  let slides = work.photosCollection.items;
  if (work.videoId) {
    slides = [{ videoId: work.videoId }, ...work.photosCollection.items];
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={isFullsize ? fullSizeStyles : customStyles}
        contentLabel="Example Modal"
      >
        <div className="relative mb-4 md:mb-8">
          {work.photosCollection.items.length === 0 && work.videoId && (
            <div
              style={{ padding: "56.25% 0 0 0" }}
              className="relative mb-8 bg-black"
            >
              <Video videoId={work.videoId} />
            </div>
          )}
          {work.photosCollection.items.length > 0 && (
            <Carousel showThumbs={false} showIndicators>
              {slides.map((photo, i) => {
                if (photo.videoId) {
                  return (
                    <div
                      key={i}
                      style={{ padding: "56.25% 0 0 0" }}
                      className="relative mb-8 bg-black"
                    >
                      <Video videoId={photo.videoId} />
                    </div>
                  );
                }
                return (
                  <div key={i} className="w-full">
                    <Image
                      alt={photo.title}
                      width="853"
                      height="480"
                      src={`${photo.url}?fit=pad&w=853&h=480&bg=rgb:000000`}
                    />
                    <p className="legend">{photo.title}</p>
                  </div>
                );
              })}
            </Carousel>
          )}

          <div className="flex flex-row-reverse">
            <button
              onClick={() => setIsFullsize(!isFullsize)}
              className="h-8 hover:fill-violet-500 focus:fill-violet-500 flex items-center whitespace-nowrap bg-black rounded-md text-white px-8"
              title={isFullsize ? "Exit full screen" : "Enter full screen"}
            >
              {isFullsize ? (
                <ExitFullScreenIcon className="h-4 w-4" />
              ) : (
                <EnterFullScreenIcon className="h-4 w-4" />
              )}
              {isFullsize ? (
                <span className="ml-3">Exit full screen</span>
              ) : (
                <span className="ml-3">Enter full screen</span>
              )}
            </button>
          </div>
          <h3 className="subtitle-text my-2">{work.title}</h3>
          <p className="description-txt">{work.descriptionOfProject}</p>
        </div>
      </Modal>
      <button
        onClick={openModal}
        className="text-left hover:text-violet-500 text:fill-violet-500 mb-8 block"
      >
        {work.videoId && <VideoThumbnail work={work} />}
        {work.videoId == null && <Thumbnail thumbnail={thumbnail} />}
        <h3 className="subtitle-text  mb-2">{work.title}</h3>
      </button>
    </>
  );
};

export default function Stills() {
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
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setPage(data.photosCollection.items);
      });
  }, []);

  if (!page) {
    return <Loading />;
  }

  return (
    <div className="container">
      <main>
        <Header />
        <div className="container mx-auto px-4 md:max-w-screen-md lg:max-w-screen-lg">
          <ul className="latest-work grid gap-0 grid-cols-1 grid-rows-1 md:gap-2 md:grid-cols-2 md:grid-rows-2 justify-items-center">
            {page.map((work, i) => {
              return (
                <li key={i}>
                  <CustomModal work={work} />
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

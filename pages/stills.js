import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Modal from "react-modal";
import Image from "next/image";
import { useState, useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Footer";

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

const query = `
{
    photosCollection {
      items {
        title
        descriptionOfProject
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

const CustomModal = ({ photo }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const thumbnail = photo.photosCollection.items[0];

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
        <div className="relative mb-4 md:mb-8">
          <Carousel showThumbs={false} showIndicators>
            {photo.photosCollection.items.map((photo, i) => {
              return (
                <div key={i} className="w-full">
                  <Image
                    src={`${photo.url}?fit=pad&w=853&h=480&bg=rgb:000000`}
                    alt={photo.title}
                    width="853"
                    height="480"
                  />
                  <p className="legend">{photo.title}</p>
                </div>
              );
            })}
          </Carousel>
          <h3 className="subtitle-text my-2">{photo.title}</h3>
          <p className="description-txt">{photo.descriptionOfProject}</p>
        </div>
      </Modal>
      <button
        onClick={openModal}
        className="text-left hover:text-violet-500 text:fill-violet-500 mb-8 block"
      >
        <Image
          alt={thumbnail.title}
          src={`${thumbnail.url}?fit=fill&w=491&h=276`}
          width="491"
          height="276"
        />
        <h3 className="subtitle-text  mb-2">{photo.title}</h3>
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
            {page.map((photo, i) => {
              return (
                <li key={i}>
                  <CustomModal photo={photo} />
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

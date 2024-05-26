import Script from "next/script";
import { useState, useEffect } from "react";

import Header from "../components/Header";
import Video from "../components/Video";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import CustomModal from "../components/CustomModal";

const query = `
{
  homepageCollection {
    items {
      heroVideo
    }
  }
    photosCollection {
      items {
        title
        descriptionOfProject
        videoId
        workDate
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

const customStyles = {
  content: {
    top: "50%",
    width: "75%",
    maxWidth: "900px",
    maxHeight: "75%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Home() {
  const [works, setWorks] = useState(null);
  const [heroVideoId, setHeroVideoId] = useState(null);

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

        setHeroVideoId(data.homepageCollection.items[0].heroVideo);
        // rerender the entire component with new data

        const sortedWorks = data.photosCollection.items.sort((a, b) => {
          return new Date(b.workDate) - new Date(a.workDate);
        });

        setWorks(sortedWorks);
      });
  }, []);

  if (!works) {
    return <Loading />;
  }

  return (
    <div className="container">
      <main>
        <Header />

        <div className="container mx-auto px-4 md:max-w-screen-md lg:max-w-screen-lg">
          <div
            style={{ padding: "56.25% 0 0 0" }}
            className="relative mb-8 bg-black"
          >
            <Video videoId={heroVideoId} />
          </div>
          <Script src="https://player.vimeo.com/api/player.js"></Script>

          <h2 className="text-center header-text font-bold mb-4 uppercase">
            latest Work
          </h2>
          <ul className="latest-work grid gap-0 grid-cols-1 grid-rows-1 md:gap-2 md:grid-cols-2 md:grid-rows-2 justify-items-center">
            {works.map((work, index) => {
              return (
                <li key={index}>
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

import Script from "next/script";

import { fetchContentful } from "../lib/contentful";
import Header from "../components/Header";
import Video from "../components/Video";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import CustomModal from "../components/CustomModal";

const contentQuery = `
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

const websiteDataQuery = `
{
  websiteDataCollection {
    items {
      websiteTitle
      websiteSubtitle
      websiteMetaDecription
    }
  }
}
`;

export async function getStaticProps() {
  const [contentData, websiteData] = await Promise.all([
    fetchContentful(contentQuery),
    fetchContentful(websiteDataQuery),
  ]);

  const heroVideoId = contentData.homepageCollection.items[0]?.heroVideo || null;

  const works = contentData.photosCollection.items
    .slice()
    .sort((a, b) => new Date(b.workDate) - new Date(a.workDate));

  // Pre-fetch Vimeo thumbnails for video works at build time
  const vimeoThumbnails = {};
  const videoWorks = works.filter((w) => w.videoId);

  await Promise.all(
    videoWorks.map(async (work) => {
      try {
        const res = await fetch(
          `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${work.videoId}`
        );
        if (res.ok) {
          vimeoThumbnails[work.videoId] = await res.json();
        }
      } catch (err) {
        console.error(`Failed to fetch Vimeo data for ${work.videoId}:`, err);
      }
    })
  );

  const site = websiteData.websiteDataCollection.items[0] || {};

  return {
    props: {
      works,
      heroVideoId,
      vimeoThumbnails,
      websiteTitle: site.websiteTitle || null,
      websiteSubtitle: site.websiteSubtitle || null,
      websiteMetaDescription: site.websiteMetaDecription || null,
    },
    revalidate: 60,
  };
}

export default function Home({
  works,
  heroVideoId,
  vimeoThumbnails,
  websiteTitle,
  websiteSubtitle,
  websiteMetaDescription,
}) {
  return (
    <div className="container">
      <main>
        <Header
          websiteTitle={websiteTitle}
          websiteSubtitle={websiteSubtitle}
          websiteMetaDescription={websiteMetaDescription}
        />

        <div className="container mx-auto px-4 md:max-w-screen-md lg:max-w-screen-lg">
          <div
            style={{ padding: "56.25% 0 0 0" }}
            className="relative mb-8 bg-black"
          >
            {heroVideoId && <Video videoId={heroVideoId} />}
          </div>
          <Script src="https://player.vimeo.com/api/player.js"></Script>

          <h2 className="text-center header-text font-bold mb-4 uppercase">
            Latest Work
          </h2>
          <ul className="latest-work grid gap-0 grid-cols-1 grid-rows-1 md:gap-2 md:grid-cols-2 md:grid-rows-2 justify-items-center">
            {works.map((work, index) => {
              return (
                <li key={index}>
                  <CustomModal
                    work={work}
                    vimeoThumbnails={vimeoThumbnails}
                  />
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

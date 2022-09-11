import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import PhoneIcon from "../public/phone.svg";
import EmailIcon from "../public/email.svg";
import thumb from "../public/thumb.png";

import Header from "../components/Header";
import Footer from "../components/Footer";

const query = `
{
  aboutMeCollection {
    items {
      aboutMePhoto {
        url,
        description,
        width,
        height
      },
      aboutMeDescription {
        json,
      },
      phoneNumber,
      emailAddress
    }
  }
}
`;

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, next) =>
      `<p class="mb-8">${next(node.content)}</p>`,
  },
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
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        console.log(
          "data.aboutMeCollection.items[0]",
          data.aboutMeCollection.items[0]
        );

        // rerender the entire component with new data
        setPage(data.aboutMeCollection.items[0]);
      });
  }, []);

  if (!page) {
    return (
      <div className="h-full flex justify-center items-center min-h-screen">
        <span>Loading...</span>
      </div>
    );
  }

  const { url, description, width, height } = page.aboutMePhoto;
  const { json: document } = page.aboutMeDescription;

  return (
    <div className="container">
      <main>
        <Header />

        <div className="container mx-auto px-4 md:max-w-screen-md lg:max-w-screen-lg">
          <div className="md:flex">
            <div className="md:pr-16">
              <Image
                src={url}
                placeholder="blur"
                blurDataURL={thumb}
                width={width}
                height={height}
                alt={description}
              />
            </div>
            <div className="flex items-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: documentToHtmlString(document, options),
                }}
              />
            </div>
          </div>
          <div className="flex flex-col md:justify-between md:flex-row my-8">
            <Link href={`tel:{page.phoneNumber}`}>
              <a className="group">
                <div className="flex items-center mb-4">
                  <div className="bg-black group-hover:bg-violet-500 group-focus:bg-violet-500 rounded-full p-4 mr-2">
                    <PhoneIcon className="h-8 w-8 fill-white block" />
                  </div>
                  <div className="group-hover:text-violet-500 group-focus:text-violet-500">
                    <p className="uppercase">Call</p>
                    <p>{page.phoneNumber}</p>
                  </div>
                </div>
              </a>
            </Link>

            <Link href={`mailto:${page.emailAddress}`}>
              <a className="group">
                <div className="flex items-center mb-4">
                  <div className="bg-black group-hover:bg-violet-500 group-focus:bg-violet-500 rounded-full p-4 mr-2">
                    <EmailIcon className="h-8 w-8 fill-white" />
                  </div>

                  <div className="group-hover:text-violet-500 group-focus:text-violet-500">
                    <p className="uppercase">Email</p>

                    <p>{page.emailAddress}</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

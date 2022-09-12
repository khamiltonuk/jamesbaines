import Link from "next/link";
import Head from "next/head";

import { useState, useEffect } from "react";

import InstagramIcon from "../public/instagram.svg";
import LinkedinIcon from "../public/linkedin.svg";

const websiteDataQuery = `
{
  websiteDataCollection {
      items{
        websiteTitle,
        websiteSubtitle,
        websiteMetaDecription
      }
  }
}
`;

function Header() {
  const [websiteTitle, setWebsiteTitle] = useState("James Baines");
  const [websiteSubtitle, setWebsiteSubtitle] = useState(
    "Producer / Filmmaker"
  );
  const [websiteMetaDescription, setWebsiteMetaDescription] =
    useState(`Hi! I'm James, a freelance senior creative producer and filmmaker with
  over ten years experience helping brands tell stories.`);

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
          body: JSON.stringify({ query: websiteDataQuery }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setWebsiteTitle(data.websiteDataCollection.items[0].websiteTitle);
        setWebsiteSubtitle(data.websiteDataCollection.items[0].websiteSubtitle);
        setWebsiteMetaDescription(
          data.websiteDataCollection.items[0].websiteTitle
        );
      });
  }, []);
  return (
    <>
      <Head>
        <title>
          {websiteTitle} - {websiteSubtitle}
        </title>
        <meta name="description" content={websiteMetaDescription}></meta>
      </Head>
      <div>
        <h1 className="text-center text-8xl md:text-10xl font-bold uppercase header-text mt-8">
          <Link href="/">{websiteTitle}</Link>
        </h1>
        <p className="header-text text-center uppercase font-bold tracking-widest">
          {websiteSubtitle}
        </p>
      </div>

      <nav>
        <ul className="flex items-center justify-center uppercase">
          <li>
            <Link href="/">
              <a className="header-text px-8 py-8 block hover:text-violet-500 focus:text-violet-500">
                Work
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about-me">
              <a className="header-text px-8 py-8 block hover:text-violet-500 focus:text-violet-500">
                about
              </a>
            </Link>
          </li>
          <li className="hidden md:block">
            <Link href="https://www.instagram.com/akajamesbaines/">
              <a
                className="px-8 py-8 block"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="h-8 w-8 hover:fill-violet-500 focus:fill-violet-500" />
              </a>
            </Link>
          </li>
          <li className="hidden md:block">
            <Link href="https://www.linkedin.com/in/jbaines/">
              <a
                className="px-8 py-8 block"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">linkedin</span>
                <LinkedinIcon className="h-8 w-8 hover:fill-violet-500 focus:fill-violet-500" />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;

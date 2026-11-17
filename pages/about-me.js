import Image from "next/image";
import Link from "next/link";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import { fetchContentful } from "../lib/contentful";
import PhoneIcon from "../public/phone.svg";
import EmailIcon from "../public/email.svg";
import thumb from "../public/thumb.png";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const aboutMeQuery = `
{
  aboutMeCollection {
    items {
      aboutMePhoto {
        url
        description
        width
        height
      }
      aboutMeDescription {
        json
      }
      phoneNumber
      emailAddress
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

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, next) =>
      `<p class="mb-8">${next(node.content)}</p>`,
  },
};

export async function getStaticProps() {
  const [aboutData, websiteData] = await Promise.all([
    fetchContentful(aboutMeQuery),
    fetchContentful(websiteDataQuery),
  ]);

  const page = aboutData.aboutMeCollection.items[0] || null;
  const site = websiteData.websiteDataCollection.items[0] || {};

  return {
    props: {
      page,
      websiteTitle: site.websiteTitle || null,
      websiteSubtitle: site.websiteSubtitle || null,
      websiteMetaDescription: site.websiteMetaDecription || null,
    },
    revalidate: 60,
  };
}

export default function AboutMe({
  page,
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
          pageTitle={`About Me — ${websiteTitle || "James Baines"}`}
        />

        <div className="container mx-auto px-4 md:max-w-screen-md lg:max-w-screen-lg">
          {!page && <Loading />}
          {page && (
            <>
              <div className="md:flex">
                <div className="md:pr-16 flex-1">
                  <Image
                    src={`${page.aboutMePhoto.url}?w=952&h=1203&fm=jpg&fl=progressive`}
                    placeholder="blur"
                    blurDataURL={thumb.blurDataURL}
                    width="952"
                    height="1203"
                    alt={page.aboutMePhoto.description}
                  />
                </div>
                <div className="flex items-center flex-1">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: documentToHtmlString(
                        page.aboutMeDescription.json,
                        options
                      ),
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col md:justify-between md:flex-row my-8">
                <Link href={`tel:${page.phoneNumber}`} className="group">
                    <div className="flex items-center mb-4">
                      <div className="bg-black group-hover:bg-violet-500 group-focus:bg-violet-500 rounded-full p-4 mr-2">
                        <PhoneIcon className="h-8 w-8 fill-white block" />
                      </div>
                      <div className="group-hover:text-violet-500 group-focus:text-violet-500">
                        <p className="uppercase header-text">Call</p>
                        <p>{page.phoneNumber}</p>
                      </div>
                    </div>
                </Link>

                <Link href={`mailto:${page.emailAddress}`} className="group">
                    <div className="flex items-center mb-4">
                      <div className="bg-black group-hover:bg-violet-500 group-focus:bg-violet-500 rounded-full p-4 mr-2">
                        <EmailIcon className="h-8 w-8 fill-white" />
                      </div>

                      <div className="group-hover:text-violet-500 group-focus:text-violet-500">
                        <p className="uppercase header-text">Email</p>

                        <p>{page.emailAddress}</p>
                      </div>
                    </div>
                </Link>
              </div>
            </>
          )}

          <Footer />
        </div>
      </main>
    </div>
  );
}

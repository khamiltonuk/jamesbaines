import Link from "next/link";
import Head from "next/head";

import InstagramIcon from "../public/instagram.svg";
import LinkedinIcon from "../public/linkedin.svg";

const defaults = {
  title: "James Baines",
  subtitle: "Producer / Filmmaker",
  description:
    "Hi! I'm James, a freelance senior creative producer and filmmaker with over ten years experience helping brands tell stories.",
};

function Header({
  websiteTitle = defaults.title,
  websiteSubtitle = defaults.subtitle,
  websiteMetaDescription = defaults.description,
  pageTitle,
}) {
  const title = pageTitle || `${websiteTitle} - ${websiteSubtitle}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={websiteMetaDescription} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={websiteMetaDescription} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={websiteMetaDescription} />
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
            <Link
              href="/"
              className="header-text px-8 py-8 block hover:text-violet-500 focus:text-violet-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about-me"
              className="header-text px-8 py-8 block hover:text-violet-500 focus:text-violet-500"
            >
              about
            </Link>
          </li>
          <li className="hidden md:block">
            <Link
              href="https://www.instagram.com/akajamesbaines/"
              className="px-8 py-8 block"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Instagram</span>
              <InstagramIcon className="h-8 w-8 hover:fill-violet-500 focus:fill-violet-500" />
            </Link>
          </li>
          <li className="hidden md:block">
            <Link
              href="https://www.linkedin.com/in/jbaines/"
              className="px-8 py-8 block"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">linkedin</span>
              <LinkedinIcon className="h-8 w-8 hover:fill-violet-500 focus:fill-violet-500" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;

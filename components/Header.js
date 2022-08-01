import Link from "next/link";

import InstagramIcon from "../public/instagram.svg";
import LinkedinIcon from "../public/linkedin.svg";

function Header() {
  return (
    <>
      <div>
        <h1 className="text-center text-8xl md:text-10xl font-bold uppercase header-text mt-8">
          <Link href="/">James Baines</Link>
        </h1>
        <p className="subtitle-text text-center uppercase font-bold tracking-widest">
          Producer / Filmmaker
        </p>
      </div>

      <nav>
        <ul className="flex items-center justify-center uppercase">
          <li>
            <Link href="/">
              <a className="subtitle-text px-8 py-8 block hover:text-violet-500 focus:text-violet-500">
                Work
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about-me">
              <a className="subtitle-text px-8 py-8 block hover:text-violet-500 focus:text-violet-500">
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

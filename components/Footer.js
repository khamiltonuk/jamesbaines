import Link from "next/link";

import InstagramIcon from "../public/instagram.svg";
import LinkedinIcon from "../public/linkedin.svg";
import VimeoIcon from "../public/vimeo.svg";

function Footer() {
  return (
    <ul className="flex items-center justify-center md:hidden">
      <li>
        <Link href="https://www.instagram.com/akajamesbaines/">
          <a
            className="px-8 py-8 block"
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Instagram</span>
            <InstagramIcon className="h-8 w-8 hover:fill-violet-600 focus:fill-violet-600" />
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://www.linkedin.com/in/jbaines/">
          <a
            className="px-8 py-8 block"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">linkedin</span>
            <LinkedinIcon className="h-8 w-8 hover:fill-violet-600 focus:fill-violet-600" />
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://vimeo.com/user119715759">
          <a
            className="px-8 py-8 block"
            title="Vimeo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Vimeo</span>
            <VimeoIcon className="h-4 w-4 hover:fill-violet-600 focus:fill-violet-600" />
          </a>
        </Link>
      </li>
    </ul>
  );
}

export default Footer;

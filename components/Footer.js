import Link from "next/link";

import InstagramIcon from "../public/instagram.svg";
import LinkedinIcon from "../public/linkedin.svg";

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
            <InstagramIcon className="h-8 w-8 hover:fill-violet-500 focus:fill-violet-500" />
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
            <LinkedinIcon className="h-8 w-8 hover:fill-violet-500 focus:fill-violet-500" />
          </a>
        </Link>
      </li>
    </ul>
  );
}

export default Footer;

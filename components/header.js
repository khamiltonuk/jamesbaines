import Image from "next/image";
import Link from "next/link";

import instagramIcon from "../public/instagram.svg";
import linkedinIcon from "../public/linkedin.svg";
import vimeoIcon from "../public/vimeo.svg";

function Header() {
  return (
    <>
      <div>
        <h1 className="text-center text-5xl font-bold header-text mt-8">
          <Link href="/">James Baines</Link>
        </h1>
        <p className="subtitle-text text-center">Producer</p>
      </div>

      <nav>
        <ul className="flex items-center justify-center uppercase my-8">
          <li>
            <Link href="/">
              <a className="px-8 ">Work</a>
            </Link>
          </li>
          <li>
            <Link href="/about-me">
              <a className="px-8">about</a>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/akajamesbaines/">
              <a
                className="px-8"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <Image src={instagramIcon} alt="" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/jbaines/">
              <a
                className="px-8"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">linkedin</span>
                <Image src={linkedinIcon} alt="" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://vimeo.com/user119715759">
              <a
                className="px-8"
                title="Vimeo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Vimeo</span>
                <Image src={vimeoIcon} alt="" />
              </a>
            </Link>
          </li>
          {/* <li>
            <Link href="/contact">
              <a className="px-8">contact</a>
            </Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
}

export default Header;

import Head from "next/head";
import Link from "next/link";

import Header from "../components/header";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>James Baines - Producer</title>
      </Head>

      <main>
        <Header />

        <div className="grid">
          <p>Call - +44 (0) 798 398 1093 </p>
          <p>
            Email –
            <Link href="mailto:jamesjohnbaines@gmail.com">
              <a>jamesjohnbaines@gmail.com</a>
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

import styles from "../styles/Home.module.css";
import TypewriterC from "../components/TypewriterC";
import Image from "next/image";
import Link from "next/link";

// imagine each folder as a page
// a page has the HTML, head.tsx is the <head> part of the HTML. We can add keywords, icons here to improve SEO for this specific page
// in layout.tsx - we have the body of the html, the {children} = this page.tsx file.
//         here, we can add navbars and footers, they act as a global page template across all so we don't write duplicate code
// page.tsx - the unique UI design for this page.

// so now we can navigate

// head.tsx + layout.tsx are optional files. PAGE.tsx is mandatory as it act as the page

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <TypewriterC />
        <Link href="/about">To ABOUT PAGE</Link>
      </main>
    </div>
  );
}

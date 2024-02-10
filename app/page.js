// This is a regular React component but treated in a special way by NextJS.
// It is treated as a server component and executed on the server,
// and it's then the returned JSX code that's sent over the wire to the browser to be rendered
// as HTML, and that's why we can see what we see here, thanks to this component.

// IMPORTANT: The file name (page) matters because it tells NextJS that we want to have this as a page.

import Link from "next/link";
import Header from "@/components/header";
// We can use @ for import, it means from the root project outside of the app folder. 
// (Look inside JSconfig.json) for reference

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}

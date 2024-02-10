// The layout JS file defines the shell around one or more pages.
// It's the, as the name implies, layout, into which a page will be rendered.
// Every next project needs at least one root layout JS file.
// You can also have nested layout JS files. We could add one here in the about folder,
// then the layout defined would only apply to the pages in the about folder and any nested folders there.

import './globals.css'

// globals.css is the imported CSS file to make it available to every loaded page.

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

// The component name was not reserved, but METADATA is a reserved name.
// If you export a variable or constant with that name, it should contain an object
// where you can then set the TITLE of the page and the DESCRIPTION of the page,
// and also some other metadata fields, which will then applied to all pages that are covered by that layout.

export default function RootLayout({ children }) { // children would be the content of the page.js file active
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

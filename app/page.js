// This is a regular React component but treated in a special way by NextJS.
// It is treated as a server component and executed on the server,
// and it's then the returned JSX code that's sent over the wire to the browser to be rendered
// as HTML, and that's why we can see what we see here, thanks to this component.

// IMPORTANT: The file name (page) matters because it tells NextJS that we want to have this as a page.

export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
}

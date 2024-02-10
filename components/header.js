
// IMPORTANT: Header is treated as component and not as a page.
// If we go to /components route, it will throw an error.

const Header = () => {
  return (
    <>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
    </>
  );
};

export default Header;

// The square bracket thing simply tells NextJS that we want to have some path segment
// after blog in this case, but that we don't know the exact value of the segment yet.
// It's then this placeholder, this identifier SLUG that will give us access to the concrete value
// that we do get when that route is loaded. 
// NextJS actually passes a props object to all those page components.
// All these page components get one special prop, which you can pull out with help of destructuring,
// and that's a params prop, which is set by NextJS.

// IMPORTANT: Params will be an object where every placeholder you add in a dynamic route here
// will be a key. The value stored under that key will be the concrete value encoded in the URL.
// So post-1, for example.


const BlogPostPage = ({ params }) => {
    
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
    </main>
  );
};

export default BlogPostPage;

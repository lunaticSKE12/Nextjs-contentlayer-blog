import Link from 'next/link';

/**
 * The NotFound function returns a JSX element displaying a message indicating that the requested page
 * was not found, along with a link to the home page.
 * @returns The NotFound component is returning a JSX element.
 */
const NotFound = () => {
  return (
    <main className="text-center bg-accent dark:bg-accentDark text-light dark:text-dark text-base">
      <h2 className="text-3xl">There was a problem</h2>
      <br />
      <p>We could not find the page you were looking for.</p>
      <p>
        Go back to the{' '}
        <Link
          href="/"
          className="underline text-red-400 dark:text-red-200 font-extrabold text-2xl"
        >
          Home
        </Link>
      </p>
    </main>
  );
};

export default NotFound;

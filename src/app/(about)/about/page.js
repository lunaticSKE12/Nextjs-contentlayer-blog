import AboutCoverSection from '@/src/components/about/AboutCoverSection';
import Skills from '@/src/components/about/Skills';
import Link from 'next/link';

export const metadata = {
  title: 'About Me',
  description: `Here are some details about my self.`,
};

/**
 * The About function returns a JSX element that includes a cover section, a skills section, and a
 * message with a link to contact the developer for project inquiries.
 * @returns a JSX fragment that includes the components `<AboutCoverSection />`, `<Skills />`, and an
 * `<h2>` element. The `<h2>` element contains a text message and a link to the "/contact" page.
 */
export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
        Have a project in mind? Reach out to me 📞 from{' '}
        <Link href="/contact" className="!underline underline-offset-2">
          here
        </Link>{' '}
        and let's make it happen.
      </h2>
    </>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import LogoImg from '@/public/logo.png';
/**
 * The Logo component returns a link with an image and text, representing the logo of "Lunatic SKE12".
 * @returns The Logo component is returning a JSX element. The JSX element consists of a Link component
 * from the 'next/link' package, which wraps around a div and a span element. The div element contains
 * an Image component, and the span element contains the text "Lunatic SKE12".
 */

const Logo = () => {
  return (
    <Link href={'/'} className="flex items-center text-dark dark:text-light">
      <div className="w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-gray mr-2 md:mr-4">
        <Image
          src={LogoImg}
          alt="Codebucks"
          className="w-full h-auto rounded-full"
          sizes="33vw"
          priority
        />
      </div>
      <span className="font-bold dark:font-semibold text-lg md:text-xl">
        Lunatic SKE12
      </span>
    </Link>
  );
};

export default Logo;

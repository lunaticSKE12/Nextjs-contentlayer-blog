'use client';
import Link from 'next/link';
import Logo from './Logo';
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from '../Icons';
import siteMetadata from '@/src/utils/siteMetaData';
import { useThemeSwitch } from '../Hooks/useThemeSwitch';
import { useState } from 'react';
import { cx } from '@/src/utils';

/**
 * The `Header` component is a responsive header that includes a logo, a hamburger menu button,
 * navigation links, and social media icons, with the ability to toggle between light and dark themes.
 * @returns The `Header` component is returning a JSX element representing the header section of a
 * website. It includes a logo, a hamburger menu button, navigation links, a theme switcher button, and
 * social media icons. The appearance and behavior of the header can be controlled by the `mode` and
 * `click` state variables, as well as the `toggle` and `setMode` functions.
 */
const Header = () => {
  /* The code is using the `useThemeSwitch` custom hook to get the current theme mode and a function to
  update the theme mode. It also uses the `useState` hook to create a state variable `click` and a
  function `setClick` to toggle the value of `click`. The `toggle` function is called when the
  hamburger menu button is clicked, and it updates the value of `click` to its opposite value. */
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };

  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <Logo />

      <button
        className="inline-block sm:hidden z-50"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? 'rotate(-45deg) translateY(0)'
                  : 'rotate(0deg) translateY(6px)',
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? 'rotate(45deg) translateY(0)'
                  : 'rotate(0deg) translateY(-6px)',
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        className=" w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize items-center flex sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        "
        style={{
          top: click ? '1rem' : '-5rem',
        }}
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className={cx(
            'w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1',
            mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
          )}
          aria-label="theme-switcher"
        >
          {mode === 'light' ? (
            <MoonIcon className={'fill-dark'} />
          ) : (
            <SunIcon className={'fill-dark'} />
          )}
        </button>
      </nav>

      <nav
        className="w-max py-3 px-8 border border-solid border-dark rounded-full 
      font-medium capitalize hidden sm:flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50"
      >
        <Link href={'/'} className="mr-2">
          Home
        </Link>
        <Link href={'/categories/all'} className="mx-2">
          Categories
        </Link>
        <Link href={'/about'} className="mx-2">
          About
        </Link>
        <Link href={'/contact'} className="mx-2">
          Contact
        </Link>
        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className={cx(
            'w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1',
            mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
          )}
          aria-label="theme-switcher"
        >
          {mode === 'light' ? (
            <MoonIcon className={'fill-dark'} />
          ) : (
            <SunIcon className={'fill-dark'} />
          )}
        </button>
      </nav>
      <div className="hidden sm:flex items-center">
        <a
          href={siteMetadata.linkedin}
          target="_blank"
          className="w-6 h-6 mr-4 inline-block"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        {/* <a href={siteMetadata.twitter} className="w-6 h-6 mr-4 inline-block">
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a> */}
        <a
          href={siteMetadata.github}
          target="_blank"
          className="w-6 h-6 mr-4 inline-block"
        >
          <GithubIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        {/* <a href={siteMetadata.dribbble} className="w-6 h-6 mr-4 inline-block">
          <DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
        </a> */}
      </div>
    </header>
  );
};

export default Header;

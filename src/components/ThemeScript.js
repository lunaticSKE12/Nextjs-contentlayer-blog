'use client';

import Script from 'next/script';
import React from 'react';

/**
 * The ThemeScript function checks if the 'theme' value in localStorage is set to 'dark' or if the
 * user's preferred color scheme is dark, and adds or removes the 'dark' class from the document's root
 * element accordingly.
 * @returns The `ThemeScript` component is returning a `Script` component with an id of
 * "theme-switcher" and a strategy of "beforeInteractive". The content of the script is a conditional
 * statement that checks if the value of the 'theme' key in the localStorage is 'dark' or if the user's
 * preferred color scheme is dark. If either condition is true, it adds the class 'dark
 */
const ThemeScript = () => {
  return (
    <Script id="theme-switcher" strategy="beforeInteractive">
      {`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark')
} else {
document.documentElement.classList.remove('dark')
}`}
    </Script>
  );
};

export default ThemeScript;

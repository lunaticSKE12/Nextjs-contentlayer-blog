'use client';

import { useEffect, useState } from 'react';
/**
 * The `useThemeSwitch` function is a custom React hook that allows users to toggle between a dark and
 * light theme, based on their preference or device settings.
 * @returns The `useThemeSwitch` function returns an array with two elements: `mode` and `setMode`.
 */

export function useThemeSwitch() {
  const preferDarkQuery = '(prefers-color-schema:dark)';
  const storageKey = 'theme';

  /**
   * The function `toggleTheme` toggles between a dark and light theme by adding or removing the 'dark'
   * class from the document's root element and storing the selected theme in local storage.
   * @param theme - The `theme` parameter is a string that represents the current theme. It can be
   * either "dark" or any other value.
   */
  const toggleTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    window.localStorage.setItem(storageKey, theme);
  };

  /**
   * The function `getUserPreference` retrieves the user's preferred theme from local storage, or
   * returns 'dark' if the user's device prefers dark mode, and 'light' otherwise.
   * @returns The function `getUserPreference` returns either the user preference stored in the
   * `localStorage` or 'dark' if the `matchMedia` query for a dark preference matches, otherwise it
   * returns 'light'.
   */
  const getUserPreference = () => {
    const userPref = window.localStorage.getItem(storageKey);
    if (userPref) {
      return userPref;
    }
    return window.matchMedia(preferDarkQuery).matches ? 'dark' : 'light';
  };

  const [mode, setMode] = useState('dark');

  /* The `useEffect` hook in the provided code is responsible for setting up event listeners and
  handling changes to the user's preferred theme. */
  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = () => {
      const newMode = getUserPreference();
      setMode(newMode);
      toggleTheme(newMode);
    };

    handleChange();

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  /* The `useEffect` hook in the provided code is responsible for calling the `toggleTheme` function
  whenever the `mode` state variable changes. */
  useEffect(() => {
    toggleTheme(mode);
  }, [mode]);

  return [mode, setMode];
}

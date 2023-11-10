import { compareDesc, parseISO } from 'date-fns';

/**
 * The `cx` function is a utility function in JavaScript that concatenates multiple class names into a
 * single string, separated by spaces.
 * @param className - The `className` parameter is a rest parameter that allows you to pass in any
 * number of class names as arguments to the `cx` function.
 */
export const cx = (...className) => className.filter(Boolean).join(' ');

/**
 * The function `sortBlogs` sorts an array of blog objects in descending order based on their
 * `publishedAt` property.
 * @param blogs - An array of blog objects. Each blog object should have a "publishedAt" property,
 * which represents the date and time when the blog was published.
 * @returns The `sortBlogs` function is returning a new array of blogs that is sorted in descending
 * order based on the `publishedAt` property of each blog object.
 */
export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishhedAt), parseISO(b.publishhedAt))
    );
};

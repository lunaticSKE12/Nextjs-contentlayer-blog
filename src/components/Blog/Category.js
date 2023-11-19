import { cx } from '@/src/utils';
import Link from 'next/link';
import React from 'react';
/**
 * The Category function is a React component that renders a link with a name and applies different
 * styles based on whether it is active or not.
 * @returns The Category component is returning a Link component with a dynamically generated className
 * based on the props passed to it. The className is determined by the active prop, which determines
 * the background color, text color, and border color of the Link component. The name prop is displayed
 * as the text content of the Link component.
 */

const Category = ({ link = '#', name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        'inline-block py-1.5 md:py-2 px-6 md:px-10 rounded-full border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200 m-2',
        props.className,
        active
          ? 'bg-dark text-light dark:bg-light dark:text-dark'
          : 'bg-light text-dark dark:bg-dark dark:text-light'
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;

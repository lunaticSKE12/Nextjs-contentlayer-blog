import { slug } from 'github-slugger';
import React from 'react';
import Category from './Category';
/**
 * The Categories component renders a list of categories with links, highlighting the currently active
 * category.
 * @returns The Categories component is returning a div element with multiple Category components
 * inside it. The Category components are rendered based on the categories array passed as a prop. Each
 * Category component has a key, link, name, and active prop.
 */

const Categories = ({ categories, currentSlug }) => {
  return (
    <div
      className=" px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light 
    border-b-2 border-solid border-dark dark:border-light 
    py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10"
    >
      {categories.map((cat) => (
        <Category
          key={cat}
          link={`/categories/${cat}`}
          name={cat}
          active={currentSlug === slug(cat)}
        />
      ))}
    </div>
  );
};

export default Categories;

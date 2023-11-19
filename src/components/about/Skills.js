const SkillList = [
  'next.js',
  'tailwind css',
  'figma',
  'javaScript',
  'web design',
  'Gatsby.js',
  'strapi',
  'firebase',
  'generative AI',
  'wireframing',
  'SEO',
  'framer motion',
  'sanity',
];
/**
 * The Skills component in JavaScript returns a section with a list of skills displayed in a styled
 * format.
 * @returns The Skills component is returning a section element containing a heading and a list of
 * skills. The heading states "I'm comfortable in..." and the list contains items from the SkillList
 * array. Each item is rendered as a list item element with specific styling and hover effects.
 */

const Skills = () => {
  return (
    <section
      className="w-full flex flex-col p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20 border-b-2 border-solid border-dark dark:border-light
     text-dark dark:text-light"
    >
      <span className="font-semibold text-lg sm:text-3xl md:text-4xl text-accent dark:text-accentDark">
        I'm comfortable in...
      </span>
      <ul className="flex flex-wrap mt-8 justify-center xs:justify-start">
        {SkillList.map((item, index) => {
          return (
            <li
              key={index}
              className="font-semibold inline-block capitalize text-base xs:text-lg sm:text-xl  
              md:text-2xl py-2 xs:py-3 sm:py-4 lg:py-5 px-4 xs:px-6 sm:px-8 lg:px-12 border-2 border-solid 
              border-dark dark:border-light rounded mr-3 mb-3 xs:mr-4 xs:mb-4 
               md:mr-6 md:mb-6 hover:scale-105 transition-all ease duration-200 cursor-pointer dark:font-normal"
            >
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;

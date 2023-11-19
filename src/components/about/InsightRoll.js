import React from 'react';

/**
 * The InsightRoll component is a JavaScript function that renders a div element with a background
 * color, text color, and animation, and displays a list of insights as capitalized text separated by
 * vertical bars.
 * @returns The InsightRoll component is returning a div element with the class names "w-full bg-accent
 * dark:bg-accentDark text-light dark:text-dark whitespace-nowrap overflow-hidden". Inside this div,
 * there is another div with the class name "animate-roll w-full py-2 sm:py-3 flex items-center
 * justify-center capitalize font-semibold tracking-wider text-sm sm:text-base". Inside this div
 */
const InsightRoll = ({ insights }) => {
  return (
    <div className="w-full bg-accent dark:bg-accentDark text-light dark:text-dark whitespace-nowrap overflow-hidden">
      <div className="animate-roll  w-full py-2 sm:py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-sm sm:text-base">
        {insights.map((text) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            {text} <span className="px-4">|</span>{' '}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightRoll;

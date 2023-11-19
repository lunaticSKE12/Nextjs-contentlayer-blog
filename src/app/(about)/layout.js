import InsightRoll from '@/src/components/about/InsightRoll';

const insights = [
  '20+ Projects Completed',
  '3+ Years of Freelancing',
  '99% Client Satisfaction',
  '20K+ Subscribers',
  'Authored In-Depth Course on Educative',
  'Contributed as a Technical Course Reviewer 📝',
  'Recipient of the Hackernoon Noonies Award 🏆',
];

/**
 * The AboutLayout function returns a main element with a class name and renders the InsightRoll
 * component and any children components passed to it.
 * @returns a JSX element. It is a main element with the class name "w-full flex flex-col items-center
 * justify-between". Inside the main element, there is an InsightRoll component being rendered with the
 * insights prop passed to it. Finally, the function also renders the children prop, which represents
 * any child components or elements that are passed to the AboutLayout component.
 */
export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}

import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function HeroCard({ items }) {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedDesc, setDisplayedDesc] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index of the array

  useEffect(() => {
    // Reset displayed title and description at the beginning
    setDisplayedTitle("");
    setDisplayedDesc("");

    const currentItem = items[currentIndex]; // Get the current item from the array

    let titleIndex = 0;
    let descIndex = 0;

    // Typing the title
    const titleInterval = setInterval(() => {
      if (titleIndex < currentItem.title.length-1) {
        setDisplayedTitle((prev) => prev + currentItem.title[titleIndex]);
        titleIndex += 1;
      } else {
        clearInterval(titleInterval); // Title typing complete

        // Start typing the description after the title finishes
        const descInterval = setInterval(() => {
          if (descIndex < currentItem.desc.length-1) {
            setDisplayedDesc((prev) => prev + currentItem.desc[descIndex]);
            descIndex += 1;
          } else {
            clearInterval(descInterval); // Description typing complete

            // Wait before moving to the next item
            setTimeout(() => {
              // Move to the next item in the array, loop back to the start
              setCurrentIndex((prev) => (prev + 1) % items.length);
            }, 1000); // Delay before moving to the next item
          }
        }, 50); // Speed of description typing
      }
    }, 100); // Speed of title typing

    // Cleanup intervals when the component is unmounted or dependencies change
    return () => {
      clearInterval(titleInterval);
    };
  }, [items, currentIndex]); // Effect reruns when `currentIndex` changes

  return (
    <div className="w-full h-[100%] p-4 bg-primarOrange text-primaryBlack border-2 border-dashed flex flex-col gap-2 rounded-sm overflow-y-auto border-primaryBlack">
      <p className="font-montserrat text-2xl font-semibold mb-2 text-background">
        {displayedTitle}
      </p>
      <p className="font-nunito opacity-80 font-normal">{displayedDesc}</p>
    </div>
  );
}

HeroCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HeroCard;

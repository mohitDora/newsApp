import PropTypes from "prop-types";
import { useState } from "react";

function GnereCard({ title }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked((prevState) => !prevState); // Toggle the clicked state
  };

  return (
    <button
      className={`group relative w-[15rem] h-[100%] border-gray-500 p-4 bg-primaryOrange text-primaryBlack border-2 flex justify-center items-center gap-2 rounded-sm aspect-square cursor-pointer ${
        isClicked ? "bg-primaryOrange" : "bg-primaryWhite"
      }`}
      onClick={handleCardClick}
    >
      <span className="absolute inset-0 border-2 border-dashed border-black translate-x-2 translate-y-2 z-[-1] rounded-sm transition-colors duration-150 group-hover:bg-primaryBlack"></span>
      <p className="font-montserrat text-2xl font-semibold mb-2 text-background">
        {title}
      </p>
    </button>
  );
}

GnereCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default GnereCard;

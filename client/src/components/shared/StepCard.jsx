import PropTypes from "prop-types";

function StepCard({ index, title, desc }) {
  return (
    <div className="w-[100%] md:max-w-md">
      <div className="text-5xl font-montserrat border-b-2 border-gray-500 font-black text-primaryOrange p-2">
        {index}.{" "}
        <span className="font-montserrat text-2xl font-bold mb-2 text-primaryBlack">{title}</span>
      </div>

      <p className="font-nunito mt-2 opacity-80">{desc}</p>
    </div>
  );
}

StepCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default StepCard;

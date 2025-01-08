import PropTypes from 'prop-types';

function Card({ title, desc, icon }) {
  return (
    <div className="group relative w-full lg:max-w-lg border-primaryBlack p-4 bg-primaryOrange text-primaryBlack border-ashed border-2 flex flex-col gap-2 rounded-sm">
      <span className="absolute inset-0 border-2 border-dashed border-black translate-x-2 translate-y-2 z-[-1] rounded-sm transition-colors duration-150 group-hover:bg-primaryBlack"></span>
      <div className="icon">{icon}</div>
      <p className="font-montserrat text-2xl font-semibold mb-2 text-background">{title}</p>
      <p className="font-nunito opacity-80 font-normal">{desc}</p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Card;

import PropTypes from 'prop-types';

function Title({title}) {
  return (
    <div className="font-bold font-montserrat text-4xl mt-16 mb-8 text-primaryBlack">{title}</div>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title
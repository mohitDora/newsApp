import { forwardRef } from "react";
import PropTypes from 'prop-types';

const Title = forwardRef((props, ref) => {
  const { title } = props
  return (
    <div ref={ref} className="font-bold font-montserrat text-4xl mt-16 mb-8 text-primaryBlack">{title}</div>
  )
});

Title.displayName = 'Title';

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
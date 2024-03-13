import PropTypes from "prop-types";

const Subscribe = ({ title }) => {
  return (
    <button className="py-[17px] px-[29px] bg-[#FFA27C] rounded-lg font-poppins text-white font-bold text-base">
      {title}
    </button>
  );
};

Subscribe.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Subscribe;

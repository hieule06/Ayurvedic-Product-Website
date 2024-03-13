import PropTypes from "prop-types";

const Button = ({ title }) => {
  return (
    <button className="w-[140px] h-[50px] bg-[#FFA27C] rounded-md font-poppins text-white text-base font-medium">
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;

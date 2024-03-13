import PropTypes from "prop-types";

const BlockReview = ({ bgColor, name, jobOption, content }) => {
  return (
    <div
      className={`bg-[${
        bgColor ? bgColor : "503760"
      }] rounded-xl py-[52px] px-10	`}
    >
      <h4 className="text-2xl font-bold text-white">{name}</h4>
      <p className="text-[#7BA59D] text-base mt-2 mb-[38px]">{jobOption}</p>
      <p className="text-lg font-medium text-white">{content}</p>
      <div className="flex items-center pt-5">
        <img
          className="w[21px] h-[30px] pr-2.5"
          src="/image/starCmt.png"
          alt=""
        />
        <img
          className="w[21px] h-[30px] pr-2.5"
          src="/image/starCmt.png"
          alt=""
        />
        <img
          className="w[21px] h-[30px] pr-2.5"
          src="/image/starCmt.png"
          alt=""
        />
        <img
          className="w[21px] h-[30px] pr-2.5"
          src="/image/starCmt.png"
          alt=""
        />
        <img
          className="w[21px] h-[30px] pr-2.5"
          src="/image/starCmt.png"
          alt=""
        />
      </div>
    </div>
  );
};

BlockReview.propTypes = {
  bgColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  jobOption: PropTypes.string.isRequired,
};

export default BlockReview;

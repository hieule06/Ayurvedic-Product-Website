import PropTypes from "prop-types";

const CardProduct = ({ image, title, content, price, number }) => {
  return (
    <div className=" bg-gray-100 rounded-lg flex flex-col p-[22px] cursor-pointer">
      <img className="pb-[22px]" src={image} alt="" />
      <h3 className="pb-[22px] text-xl font-bold">{title}</h3>
      <p className="pb-[22px] text-sm text-[#5A5850]">{content}</p>
      <div className="flex justify-between items-center">
        <span className="inline-block text-2xl font-bold">{price}</span>
        <div className="flex items-center">
          <img
            className="w[22px] h-[22px] pr-[2px]"
            src="/image/Star 1.png"
            alt=""
          />
          <img
            className="w[22px] h-[22px] pr-[2px]"
            src="/image/Star 1.png"
            alt=""
          />
          <img
            className="w[22px] h-[22px] pr-[2px]"
            src="/image/Star 1.png"
            alt=""
          />
          <img
            className="w[22px] h-[22px] pr-[2px]"
            src="/image/Star 1.png"
            alt=""
          />
          <img className="w[22px] h-[22px]" src="/image/Star 5.png" alt="" />
          <span className="pl-[8px] text-sm leading-6">{number}</span>
        </div>
      </div>
    </div>
  );
};

CardProduct.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default CardProduct;

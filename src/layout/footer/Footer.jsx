import "./Footer.scss";

const Footer = () => {
  return (
    <div className="mt-[150px] px-[135px]">
      <div className="flex grid grid-cols-4 pb-12 border-b border-[rgba(230, 232, 236, 1)]">
        <div>
          <img className="cursor-pointer" src="/image/Rat.png" alt="" />
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6">COMPANY</h4>
          <div>
            <p className="text-base	font-normal text-[rgba(111, 121, 117, 1)] mb-4">
              Lotions
            </p>
            <p className="text-base	font-normal text-[rgba(111, 121, 117, 1)] mb-4">
              Facewash
            </p>
            <p className="text-base	font-normal text-[rgba(111, 121, 117, 1)] mb-4">
              Bodygel
            </p>
            <p className="text-base	font-normal text-[rgba(111, 121, 117, 1)] mb-4">
              Cosmatics
            </p>
            <p className="text-base	font-normal text-[rgba(111, 121, 117, 1)] mb-4">
              Nesti Product
            </p>
          </div>
        </div>
        <div className="max-w-[195px]">
          <h4 className="text-lg font-bold mb-6">CONTACT</h4>
          <div>
            <p className="text-base	font-normal text-[rgba(111, 121, 117, 1)] mb-4">
              103/2 Seddon Park, Auckland, New Zealand
            </p>
            <p className="text-base	font-normal text-[rgba(111, 121, 117, 1)] mb-4">
              (000) 123 456 789
            </p>
          </div>
        </div>
        <div className="max-w-[309px]">
          <h4 className="text-lg font-bold mb-6">NEWSLETTER</h4>
          <div className="text-base	font-normal text-[rgba(111, 121, 117, 1)] mb-4">
            Subscribe our newsletter to get more free design course and
            resource.
          </div>
          <div className="wrapper-send-email mt-4 flex justify-between items-center py-[9px] pl-4 pr-2 rounded-md">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-[80%] text-[rgba(90, 88, 80, 1)] text-base font-poppins font-normal"
            />
            <button className="w-[42px] h-[42px] flex justify-center items-center bg-[#FFA27C] rounded">
              <img
                className="w-[14px] h-[9px]"
                src="/image/vector (Stroke).png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center py-7">
        <span className="inline-block text-sm">
          Copyright © 2022 webdesign.gdn All rights reserved
        </span>
        <div className="flex">
          <img className="w-[20px] h-[20px]" src="/image/Facebook.png" alt="" />
          <img
            className="w-[20px] h-[20px] mx-6"
            src="/image/Twitter.png"
            alt=""
          />
          <img
            className="w-[20px] h-[20px]"
            src="/image/Instagram.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

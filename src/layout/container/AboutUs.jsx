const AboutUs = () => {
  return (
    <div className="mt-[170px] px-[135px] h-[667px] relative">
      <img className="h-[667px] w-full" src="/image/Rectangle 29.png" alt="" />
      <div className="wrapper-content-about flex items-center justify-between px-12 xl:w-[712px] sm:w-[55%] h-[249px] absolute top-[175px] bg-white rounded-lg">
        <div className="content-about pr-20">
          <h3 className="text-[64px] font-bold">About Us</h3>
          <span className="text-base text-[#6F7975]">
            Dui ut ornare lectus sit amet. Urna nunc id cursus metus aliquam
            eleifend mi in.
          </span>
        </div>
        <img
          className="w-[130px] h-[130px]"
          src="/image/video batton.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUs;

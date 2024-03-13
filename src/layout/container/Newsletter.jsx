import Subscribe from "../../component/Subscribe";

const Newsletter = () => {
  return (
    <div className="mt-[140px] h-[675px] relative">
      <img className="h-[675px] w-full" src="/image/image 49.png" alt="" />
      <div className="bg-black bg-opacity-60 absolute inset-0"></div>
      <div className="w-[623px] flex flex-col items-center justify-center text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-[46px] font-bold text-white leading-[56px]">
          Subscribe to our Newsletter
        </h2>
        <span className="inline-block text-white font-normal text-base mt-[18px]">
          Dui ut ornare lectus sit amet. Urna nunc id cursus metus aliquam{" "}
          <br></br> eleifend mi in.
        </span>
        <div className="w-[475px] mt-12  rounded-xl bg-white flex justify-between items-center py-1.5 pl-[29px] pr-1.5">
          <input
            type="text"
            placeholder="Type your email address"
            className="w-[50%] text-[rgba(90, 88, 80, 1)] text-base font-normal"
          />
          <Subscribe
            title="SUBSCRIBE"
            className="text-[rgba(90, 88, 80, 1)] text-base font-normal"
          ></Subscribe>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

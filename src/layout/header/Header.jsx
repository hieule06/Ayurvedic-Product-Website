import Button from "../../component/Button";
import "./Header.scss";

const Header = () => {
  return (
    <header className="wrapper-header">
      <nav className="wrapper-nav w-full h-[100px] fixed z-10 text-lg bg-white">
        <div className="px-[135px] h-[50px] mt-[50px] rounded-md flex justify-between items-center ">
          <img
            src="/image/Rat.png"
            className="logo w-[60px] h-[30px] cursor-pointer"
            alt="Vite logo"
          />
          <ul className="menu w-[348px] flex justify-between items-center font-normal">
            <li className="cursor-pointer text-[#376058]">Home</li>
            <li className="cursor-pointer text-[#909896]">About</li>
            <li className="cursor-pointer text-[#909896]">Blog</li>
            <li className="cursor-pointer text-[#909896]">Contact</li>
          </ul>
          <Button title="Get In Touch"></Button>
        </div>
      </nav>
      <div className="pt-[180px]">
        <div className="text-introduction px-[135px]">
          <h2 className="text-[70px] font-bold leading-[91.14px]">
            <span>World Best </span>
            <span className="text-white bg-[#376058] px-3">Ayurvedic</span>
            <br></br>
            <span className="mb-[19px]"> Product You Ever Think For!</span>
          </h2>
          <p className="text-xl pb-2.5 text-[#6F7975]">
            We build best ayurvedic product in the world. Our Product is 100%
            made of natural ingradients. All of the product made with great
            reserch and experiments.
          </p>
        </div>
        <div className="relative image-introduction px-[135px]">
          <div className="relative z-[2] flex gap-[40px] justify-between">
            <div className="flex flex-col justify-end items-center">
              <img
                src="/image/Play.png"
                className="Play w-[88px] h-[88px]"
                alt="Vite Play"
              />
              <img
                src="/image/Rectangle 458.png"
                className="Rectangle w-[277px] h-[311px] mt-[34px]"
                alt="Vite Rectangle 458"
              />
            </div>
            <div className="flex flex-col justify-end">
              <img
                src="/image/Rectangle 457.png"
                className="Rectangle w-[411px] h-[433px]"
                alt="Vite Rectangle 457"
              />
            </div>

            <div className="flex flex-col justify-end">
              <img
                src="/image/Rectangle 456.png"
                className="Rectangle w-[402px] h-[528px]"
                alt="Vite Rectangle 456"
              />
            </div>
          </div>
          <div className="absolute z-[1] bottom-[-85px] bg-image-introduction w-full h-[471px] bg-[#F9F9F9] mx-[-135px]"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;

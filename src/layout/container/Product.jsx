import { useState } from "react";
import CardProduct from "../../component/CardProduct";
import "./Product.scss";

const Product = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="wrapper-product mt-[150px] px-[135px]">
      <h2 className="text-[70px] font-bold leading-[74px]">Our Products</h2>
      <div className="flex justify-between items-center mt-[18px] mb-[49px]">
        <p className="inline-block w-[628px] text-base text-[#5A5850]">
          We build best ayurvedic product in the world. Our Product is 100% made
          of natural ingradients. All of the product made with great reserch and
          experiments.
        </p>
        <a className="underline inline-block text-lg font-bold" href="">
          View All Collections
        </a>
      </div>
      <nav className="pb-[64px]">
        <ul className="flex">
          {["BEST SELLER", "New Arrival", "Seasons", "Winter", "Popular"].map(
            (item, index) => (
              <li
                key={index}
                className={`mr-[38px] cursor-pointer text-lg ${
                  index === activeIndex
                    ? "item-nav font-bold bottom-line-item"
                    : "text-[#5A5850] font-normal"
                }`}
                onClick={() => handleClick(index)}
              >
                <p className="relative z-[3]">{item}</p>
              </li>
            )
          )}
        </ul>
      </nav>
      <div className="flex grid grid-cols-3 gap-[30px]">
        <CardProduct
          image="/image/image 43.png"
          title="Nesti Ayurvedic Facewash"
          content="Dui ut ornare lectus sit amet. Urna nunc id cursus metus eleifend mi in."
          price="$29.00"
          number="(91)"
        ></CardProduct>
        <CardProduct
          image="/image/image 42.png"
          title="Tanda Ayurvedic Bodygel"
          content="Dui ut ornare lectus sit amet. Urna nunc id cursus metus eleifend mi in."
          price="$27.00"
          number="(91)"
        ></CardProduct>
        <CardProduct
          image="/image/image 42 (2).png"
          title="Pata Ayurvedic Foundation"
          content="Dui ut ornare lectus sit amet. Urna nunc id cursus metus eleifend mi in."
          price="$30.00"
          number="(91)"
        ></CardProduct>
        <CardProduct
          image="/image/image 42 (2).png"
          title="Jakas Ayurvedic Lotion"
          content="Dui ut ornare lectus sit amet. Urna nunc id cursus metus eleifend mi in."
          price="$20.00"
          number="(91)"
        ></CardProduct>
        <CardProduct
          image="/image/image 42 (3).png"
          title="Tanda Ayurvedic Bodygel"
          content="Dui ut ornare lectus sit amet. Urna nunc id cursus metus eleifend mi in."
          price="$23.00"
          number="(91)"
        ></CardProduct>
        <CardProduct
          image="/image/image 42 (4).png"
          title="Pata Ayurvedic Foundation"
          content="Dui ut ornare lectus sit amet. Urna nunc id cursus metus eleifend mi in."
          price="$33.00"
          number="(91)"
        ></CardProduct>
      </div>
    </div>
  );
};

export default Product;

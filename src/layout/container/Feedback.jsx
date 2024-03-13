import BlockReview from "../../component/BlockReview";

const Feedback = () => {
  return (
    <div className="mt-[140px] px-[135px]">
      <h2 className="text-[70px] font-bold leading-[74px]">Our Products</h2>
      <div className="flex justify-between items-center mt-[18px] mb-[49px]">
        <p className="inline-block w-[711px] text-base text-[#5A5850]">
          We build best ayurvedic product in the world. Our Product is 100% made
          of natural ingradients. All of the product made with great reserch and
          experiments.
        </p>
        <a className="inline-block text-lg font-bold text-[#FFA27C]" href="">
          View All Collections
        </a>
      </div>
      <div className="flex grid grid-cols-2 gap-[30px] justify-between">
        <BlockReview
          bgColor="#376058"
          name="Callum Bolton"
          content="Nulla pulvinar felis ipsum. Nulla facilisi. Duis placerat erd urna Lorem ipsum dolor sit amet con adipiscing elit. Proin gravida orc pulvinar aliquet."
          jobOption="UI/UX Designer "
        ></BlockReview>
        <BlockReview
          bgColor="#503760"
          name="Ethan Brooks"
          content="Nulla pulvinar felis ipsum. Nulla facilisi. Duis placerat erd urna Lorem ipsum dolor sit amet con adipiscing elit. Proin gravida orc pulvinar aliquet."
          jobOption="UI/UX Designer "
        ></BlockReview>
      </div>
    </div>
  );
};

export default Feedback;

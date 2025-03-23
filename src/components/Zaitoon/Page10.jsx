import React from "react";

const Page10 = () => {
  return (
    <div className="flex flex-col items-start justify-center p-4 sm:p-6 md:p-10 pt-12 md:pt-20 gap-6 md:gap-12 max-w-full overflow-hidden">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold font-poppins">
          What's new
        </h1>
      </div>
      <div className="bg-[#D9D9D9] w-full h-[500px] flex justify-center items-center gap-20">
        <div className="w-1/3 flex flex-col gap-4">
          <img
            className="rounded-xl"
            src="/friedchickenwings.png"
            alt="friedchickenwings"
          />
        </div>
        <div className="flex flex-col w-1/2 space-y-10">
          <h3 className="text-5xl font-semibold font-inriaserif">
            Fried chicken wings
          </h3>
          <p className="font-inriasans text-xl italic">
            Fried chicken wings are a beloved dish, popular for their crispy
            exterior and juicy, tender meat. Typically seasoned with a flavorful
            blend of spices and coated in a light batter, these wings are
            deep-fried until golden brown, resulting in a satisfying crunch with
            every bite.{" "}
          </p>
        </div>
      </div>
      <div>
        <p className="font-poppins">
          Highlighting top dishes on a restaurant’s landing page is a great way
          to attract and engage customers.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-poppins">
        <strong> High-Quality Images:</strong>  Use professional photos of your top dishes to
          make them visually appealing. People often eat with their eyes first,
          so stunning images can entice them to try your food. 
        </p>
        <p className="font-poppins">
          <strong>Clear Descriptions:</strong> Provide brief but enticing descriptions of each dish.
          Highlight unique ingredients, cooking methods, or any special story
          behind the dish.
        </p>
      </div>
    </div>
  );
};

export default Page10;

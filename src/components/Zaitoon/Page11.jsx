import React from "react";

const Page11 = () => {
  return (
    <div className="flex flex-col items-start justify-center p-4 sm:p-6 md:p-10 pt-12 md:pt-20 gap-6 md:gap-12 max-w-full overflow-hidden">
      <div className="w-full h-[500px] flex justify-start items-center gap-20">
        <div className="w-1/3 flex flex-col gap-4">
          <img
            className="rounded-xl"
            src="/butterchicken.png"
            alt="butterchicken"
          />
        </div>
        <div className="flex flex-col w-1/2 space-y-10">
          <h3 className="text-4xl font-semibold font-poppins">
            Butter Chicken
          </h3>
          <p className="font-poppins text-xl italic">
          Butter Chicken, also known as Murgh Makhani, is a popular Indian dish known for its rich and creamy tomato-based sauce.{" "}
          </p>
        </div>
      </div>
      <div>
        <p className="font-poppins">
            Using these icons helps customers quickly identify dishes that meet their dietary preferences and restrictions, making the dining experience more enjoyable and inclusive.
        </p>
      </div>

    </div>
  );
};

export default Page11;

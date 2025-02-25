import React from "react";

const questions = [
  "How often do you see Bison in yellow stone park?",
  "What are your views in the conservation of bison?",
  "What do you think the effects of bison to the environment and ecosystem?",
  "What concerns do you have regarding decreasing population in plain bison?",
  "What measures are taken to save Bison in the park?",
  "What challenges do you face with bison?",
  "How friendly is bison?",
];
const BisonCaseStudy = () => {
  return (
    <div className="grid grid-cols-1 gap-10">
      {/* { first page } */}
      <div className="bg-[#97927C] min-h-screen flex flex-col md:flex-row items-center md:items-start justify-center p-6 md:p-0">
        <div className="w-full md:w-[50vw] flex justify-center md:justify-start relative">
          <img
            className="absolute top-[10%] md:top-[15%] left-[5%] md:left-[10%] w-[40%] md:w-[25%] object-contain"
            src="/bisonphone.svg"
            alt="bison"
          />
        </div>
        <div className="w-full md:w-[50vw] flex flex-col items-center md:items-start justify-center p-6 space-y-6">
          <div className="w-full max-w-md text-center md:text-left">
            <h1 className="font-poppins font-bold text-2xl md:text-3xl text-white leading-[1.5]">
              To make people more aware of how important a bison is in history
              of American culture
            </h1>
          </div>
          <div className="grid grid-cols-1 w-full max-w-md gap-4">
            <div className="text-white font-poppins text-sm md:text-base">
              <strong>Project type:</strong> Website + Mobile
            </div>
            <div className="text-white font-poppins text-sm md:text-base">
              <strong>Role:</strong> UX Research Brand Designer
            </div>
            <div className="text-white font-poppins text-sm md:text-base">
              <strong>Industry:</strong> Animal Protection
            </div>
          </div>
          <a
            href="/bisoncasestudy"
            className="bg-[#454563] bg-opacity-90 tracking-[0.03em] font-bold font-poppins text-xs md:text-sm text-white py-3 px-5 lg:py-4 lg:px-6 rounded-full hover:bg-opacity-100 transition-all"
          >
            View hi-fi prototype
          </a>
        </div>
      </div>

      {/* { second page } */}
      <div className="flex flex-col items-center justify-center p-10 gap-20">
        <div className="grid grid-cols-1 font-poppins sm:grid-cols-1 gap-10 w-full">
          <div className="text-sm sm:text-lg">
            <strong>Problem Statement:</strong> People lack awareness about
            endangered species bisons and need to wait in long queue to get park
            tickets
          </div>
          <div className="font-poppins text-sm sm:text-lg">
            <strong>Target Audience:</strong> school children, young people
            between 20-35
          </div>
          <div className="font-poppins text-sm sm:text-lg">
            <strong>Business Goal:</strong> To make more people visit Yellow
            stone park to see bisons
          </div>
        </div>
        <div className="grid grid-cols-1 font-poppins sm:grid-cols-1 gap-10 w-full">
          <div className="text-2xl">
            <strong>Empathy</strong>
          </div>
          <div className="font-poppins text-sm sm:text-lg">
            The ability to understand someone else’s feelings thoughts in a
            situation
          </div>
          <div className="font-poppins text-sm sm:text-lg">
            In this process many interviews are held so that we can empathize
            with users asking many open ended questions. validating their
            feedback and hypothesis to come with problems faced by the users
          </div>
        </div>
        <div className="grid grid-cols-1 font-poppins sm:grid-cols-1 gap-5 w-full">
          <div className="text-2xl">
            <strong>Research Questions:</strong>
          </div>
          {questions.map((question, index) => (
            <div key={index} className="font-poppins text-sm sm:text-lg">
              {index + 1}. {question}
            </div>
          ))}
        </div>
      </div>
      {/* { Design Process } */}
      <div className="flex flex-col items-start bg-[#FFF0F0] justify-center p-10 pt-20 gap-20">
        <div className="text-2xl font-poppins">
          <strong>Design Process</strong>
        </div>
        <div className="grid grid-cols-5 grid-rows-2 w-full gap-10 place-items-center relative">
          <div className="col-start-1 row-start-1 flex justify-center items-center text-xl font-poppins w-40 h-40 rounded-full bg-[#FF8888] text-white">
            Empathize
          </div>
          <img
            src="arrow1.svg"
            alt="Arrow from Empathize to Define"
            className="absolute left-[16%] top-[46%] w-16 h-16 "
          />
          <div className="col-start-3 row-start-1 flex justify-center items-center text-xl font-poppins w-40 h-40 rounded-full bg-[#FF8888] text-white">
            Ideate
          </div>
          <img
            src="arrow2.svg"
            alt="Arrow from Empathize to Define"
            className="absolute left-[38%] top-[46%] w-16 h-16"
          />

          <div className="col-start-5 row-start-1 flex justify-center items-center text-xl font-poppins w-40 h-40 rounded-full bg-[#FF8888] text-white">
            Test
          </div>

          <img
            src="arrow1.svg"
            alt="Arrow from Empathize to Define"
            className="absolute left-[58%] top-[46%] w-16 h-16"
          />

          <div className="col-start-2 row-start-2 flex justify-center items-center text-xl font-poppins w-40 h-40 rounded-full bg-[#FF8888] text-white">
            Define
          </div>

          <img
            src="arrow2.svg"
            alt="Arrow from Empathize to Define"
            className="absolute left-[79%] top-[46%] w-16 h-16"
          />

          <div className="col-start-4 row-start-2 flex justify-center items-center text-xl font-poppins w-40 h-40 rounded-full bg-[#FF8888] text-white">
            Prototype
          </div>
        </div>
      </div>
      {/* { User Persona } */}
      <div className="flex flex-col items-start justify-center p-10 pt-20 gap-20">
        <div className="text-2xl font-poppins">
          <strong>User Persona</strong>
        </div>
        <div className="bg-[#F4DBDB] h-full w-full rounded-xl p-10 border-[1.5px] border-[#000000]">
          <div>
            <img src="up1.png" alt="up1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BisonCaseStudy;

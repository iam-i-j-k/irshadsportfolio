import React from 'react'

const questions = [
    "How often do you see Bison in yellow stone park?",
    "What are your views in the conservation of bison?",
    "What do you think the effects of bison to the environment and ecosystem?",
    "What concerns do you have regarding decreasing population in plain bison?",
    "What measures are taken to save Bison in the park?",
    "What challenges do you face with bison?",
    "How friendly is bison?",
  ];
const Page2 = () => {
  return (
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
  )
}

export default Page2
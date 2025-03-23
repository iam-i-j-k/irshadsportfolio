import React from 'react'

const questions = [
    "What elements do you find most visually appealing in a restaurant menu?",
    "Which menu features help you quickly identify the restaurant’s best dishes?",
    "How often do you visit multiple branches of the same restaurant?",
    "What information or signage would help you easily locate other branches of our restaurant?",
    "How does the design of a menu influence your perception of a restaurant’s brand?",
    "What type of information do you look for on a menu when deciding what to order?",
  ];

const Page2 = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 gap-20">
    <div className="grid grid-cols-1 font-poppins sm:grid-cols-1 gap-10 w-full">
      <div className="text-sm sm:text-lg">
        <strong>Problem Statement:</strong> “How can we design a visually appealing and easy-to-navigate menu that highlights our best dishes while also incorporating effective wayfinding solutions to guide customers to our other restaurant branches”
      </div>
      <div className="font-poppins text-sm sm:text-lg">
        <strong>My Role:</strong> UX /UI design + brand designing
      </div>
    </div>
    <div className="grid grid-cols-1 font-poppins sm:grid-cols-1 gap-10 w-full">
      <div className="text-2xl">
        <strong>Empathy</strong>
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
import React from 'react'

const empathy = [
  {
    title: 'Says',
    item1: "My daughters want to see bison",
    item2: "Want to educate people about bison",
    icon: '💬',
  },
  {
    title: 'Thinks',
    item1: "I guess to get lucky seeing a bison in the park",
    item2: "",
    icon: '🧠',
  },
  {
    title: 'Does',
    item1: 'Visits parks to see bison',
    item2: "Explains everyone manually",
    icon: '👐',
  },
  {
    title: 'Feels',
    item1: 'Worrying if they could see bison',
    item2: "Frustrated to teach every time",
    icon: '❤️',
  },
]

const Page5 = () => {
  return (
    <div className="flex flex-col items-start justify-center p-4 sm:p-6 md:p-10 pt-12 md:pt-20 gap-8 md:gap-16 max-w-full overflow-hidden">
      <div className="flex items-center gap-3">
        <h1 className="text-xl sm:text-2xl font-bold font-poppins">
          Empathy Map
        </h1>
        <div className="hidden sm:block h-px bg-gray-300 flex-grow max-w-[100px]"></div>
        <span className="hidden sm:block text-sm text-gray-500">Understanding the user perspective</span>
      </div>
      
      {/* User avatar in the center for larger screens */}
      <div className="relative w-full">
        {/* Responsive grid container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {empathy.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col bg-gradient-to-b from-[#E2CECE] to-[#F4DBDB00] border border-gray-300 rounded-lg shadow-sm p-4 sm:p-5 min-h-[180px] sm:min-h-[220px] transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200">
                <span className="text-xl">{item.icon}</span>
                <h2 className="text-lg font-medium font-poppins">
                  {item.title}
                </h2>
              </div>
              
              <div className="flex flex-col gap-3 flex-grow">
                {item.item1 && (
                  <p className="text-sm sm:text-base font-poppins">
                    {item.item1}
                  </p>
                )}
                
                {item.item2 && (
                  <p className="text-sm sm:text-base font-poppins">
                    {item.item2}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Center user avatar - only visible on larger screens */}
        <div className="hidden lg:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-100 rounded-full items-center justify-center shadow-md z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
            <span className="text-white text-3xl">👤</span>
          </div>
        </div>
      </div>
      
      {/* Legend - only visible on larger screens */}
      <div className="hidden md:flex items-center justify-center w-full mt-4 text-sm text-gray-500">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#E2CECE] rounded-full"></span>
            <span>User Perspective</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
            <span>User</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page5

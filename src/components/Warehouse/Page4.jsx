const users = [
    {
      image: "jai.jpg",
      name: "Jai",
      age: 35,
      occupation: "Warehouse manager",
      aim: '“I want my work to get easier”',
      goals: "Need a way more faster and easier",
      about:
      "Jai is an warehouse manager who works  in chennai for a bustling distribution centre, he took pride in keeping everything running smoothly. Lately, jai had been feeling the strain. The warehouse had grown busier, with larger and more frequent orders flooding in. He knew there had to be a faster, smarter way to handle the chaos.",
      frustrations: "unable to log large stock data fast enough",
    },

  ]
  
  const Page4 = () => {
    return (
      <div className="flex flex-col items-start justify-center p-4 sm:p-6 md:p-10 gap-8 md:gap-16 max-w-full overflow-hidden">
        <div className="flex items-center gap-3 w-full">
          <h1 className="text-xl sm:text-2xl font-bold font-poppins">User Persona</h1>
          <div className="hidden sm:block h-px bg-gray-300 flex-grow"></div>
        </div>
  
        <div className="w-full space-y-8 md:space-y-12">
          {users.map((user, index) => (
            <div key={index} className="bg-[#F4DBDB] rounded-xl border border-gray-300 shadow-md overflow-hidden">
              {/* Card Header - Mobile: stacked, Desktop: side by side */}
              <div className="flex flex-col md:flex-row w-full">
                {/* Left Column - Profile Info */}
                <div className="p-4 sm:p-6 md:w-1/4 lg:w-1/5">
                  <div className="flex flex-col gap-4">
                    {/* Image - Responsive sizing */}
                    <div className="relative max-w-[200px] mx-auto md:mx-0 overflow-hidden rounded-2xl shadow-sm">
                      <img
                        src={user.image || "/placeholder.svg"}
                        alt={`${user.name}'s portrait`}
                        className="object-cover w-full h-full"
                      />
                    </div>
  
                    {/* Basic Info */}
                    <div className="space-y-2 mt-2">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <span className="font-bold text-base sm:text-lg">Name:</span>
                        <span>{user.name}</span>
                      </div>
  
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <span className="font-bold text-base sm:text-lg">Age:</span>
                        <span>{user.age}</span>
                      </div>
  
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <span className="font-bold text-base sm:text-lg">Occupation:</span>
                        <span>{user.occupation}</span>
                      </div>
                    </div>
                  </div>
                </div>
  
                {/* Right Column - Details */}
                <div className="p-4 sm:p-6 md:w-3/4 lg:w-4/5 bg-white/50">
                  {/* Quote/Aim */}
                  <div className="mb-4 sm:mb-6">
                    <blockquote className="text-lg sm:text-xl md:text-2xl font-medium italic border-l-4 border-purple-500 pl-4">
                      {user.aim}
                    </blockquote>
                  </div>
  
                  {/* About */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-base sm:text-lg font-bold mb-2">About</h3>
                    <p className="text-sm sm:text-base">{user.about}</p>
                  </div>
  
                  {/* Goals & Frustrations - Responsive grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Goals */}
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                      <h3 className="text-base sm:text-lg font-bold mb-2 flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-purple-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                          <line x1="9" y1="9" x2="9.01" y2="9"></line>
                          <line x1="15" y1="9" x2="15.01" y2="9"></line>
                        </svg>
                        Goals
                      </h3>
                      <p className="text-sm sm:text-base">{user.goals}</p>
                    </div>
  
                    {/* Frustrations */}
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                      <h3 className="text-base sm:text-lg font-bold mb-2 flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
                          <line x1="9" y1="9" x2="9.01" y2="9"></line>
                          <line x1="15" y1="9" x2="15.01" y2="9"></line>
                        </svg>
                        Frustrations
                      </h3>
                      <p className="text-sm sm:text-base">{user.frustrations}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Page4
  
  
const users = [
    {
      image: "yashna.jpg",
      name: "Yashna",
      age: 27,
      occupation: "Doctor",
      cuisine: "grilledchicken.jpg",
      aim: '“As a food explorer I often find difficulty in selecting the dish from the menu”',
      goals: [
        "Discover new tastes",
        "Informed choices"
      ],
      feedback:[ 
        { 
          title: "Menu Layout",
          rating: 5,
          innerWidth: "w-4/6",
          outerWidth: "w-3/4"
        },
        {
          title: "Highlighting Best Dishes",
          rating: 2,
          innerWidth: "w-2/6",
          outerWidth: "w-3/4"
        },
        {
          title: "Dietary Information",
          rating: 1,
          innerWidth: "w-1/6",
          outerWidth: "w-3/4"
        }
      ],
      about:
        "Yashna is a Food explorer who likes to eat tasty food occassionally, lives alone and likes different type of dishes but finds difficult ordering food",
      frustrations: [
        "Overwhelming menus",
        "Lack of information"
      ],
    },
    {
      image: "viraj.jpg",
      name: "Viraj",
      age: 30,
      occupation: "Sales Executive",
      cuisine: "biryani.jpg",
      aim: '“As a Food enthusiast I like ambiance and environment of restraunt and I couldn’t find same restraunt in different places  ”',
      goals: [
        "Consistent Dining Experience",
        "Brand Loyalty"
      ],
      feedback:[ 
        { 
          title: "Wayfinding Tools",
          rating: 7,
          innerWidth: "w-3/6",
          outerWidth: "w-3/4"
        },
        {
          title: "Customer Satisfaction",
          rating: 8,
          innerWidth: "w-4/6",
          outerWidth: "w-3/4"
        },
        {
          title: "Signage Visibility",
          rating: 3,
          innerWidth: "w-1/6",
          outerWidth: "w-3/4"
        }
      ],
      about:
        "Brock is a ranger in yellow stone National park. He lives in North America along with his wife. Brock works in shifts and daily goes to work. He gets Sunday as a holiday on which he relaxes with his wife. Brock like fishing but he doesn't often go to fishing. He wants people to know about importance of bison.",
      frustrations: [
        "Difficulty Finding Locations",
        "Inconsistent Signage"
      ],
    },
  ]
  
  const Page4 = () => {
    return (
      <div className="flex flex-col items-start justify-center p-4 sm:p-6 md:p-10 pt-12 md:pt-20 gap-8 md:gap-16 max-w-full overflow-hidden font-poppins">
        <div className="flex items-center gap-3 w-full">
          <h1 className="text-xl sm:text-2xl font-bold font-poppins">User Persona</h1>
          <div className="hidden sm:block h-px bg-gray-300 flex-grow"></div>
        </div>
  
        <div className="w-full space-y-8 md:space-y-12">
          {users.map((user, index) => (
            <div key={index} className="rounded-xl border border-gray-300 shadow-md overflow-hidden">
              {/* Card Header - Mobile: stacked, Desktop: side by side */}
              <div className="flex flex-col md:flex-row w-full">
                {/* Left Column - Profile Info */}
                <div className="p-4 sm:p-6 md:w-1/4 lg:w-1/5">
                  <div className="flex flex-col gap-4">
                    {/* Image - Responsive sizing */}
                    <div className="relative max-w-[200px] mx-auto md:mx-0 overflow-hidden rounded-lg shadow-sm">
                      <img
                        src={user.image || "/placeholder.svg"}
                        alt={`${user.name}'s portrait`}
                        className="object-cover w-full h-full"
                      />
                    </div>
  
                    {/* Basic Info */}
                    <div className="space-y-4 mt-2 bg-[#D9D9D9] p-5">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <span className="font-semibold text-base sm:text-lg">Name:</span>
                        <span>{user.name}</span>
                      </div>
  
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <span className="font-semibold text-base sm:text-lg">Age:</span>
                        <span>{user.age}</span>
                      </div>
  
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-1 sm:gap-2">
                        <span className="font-semibold h-fit text-base sm:text-lg">Occupation:</span>
                        <span>{user.occupation}</span>
                      </div>
  
                    </div>
                  </div>
                </div>
  
                {/* Middle Column - Details */}
                <div className="p-4 sm:p-6 md:w-3/5 bg-white/50">
                  {/* Quote/Aim */}
                  <div className="mb-4 sm:mb-6 bg-[#D9D9D9] p-3">
                    <blockquote className="text-lg sm:text-xl md:text-2xl font-medium italic">
                      {user.aim}
                    </blockquote>
                  </div>

                  <div className="flex gap-10">
                    {/* About */}
                    <div className="mb-6 sm:mb-8 p-5 bg-[#D9D9D9]">
                        <h3 className="text-base sm:text-lg font-bold mb-2">About</h3>
                        <p className="text-sm sm:text-base">{user.about}</p>
                    </div>

                  </div>
  
                  {/* Goals & Frustrations - Responsive grid */}
                  <div className="flex flex-row items-start justify-around gap-4 bg-[#D9D9D9] py-5">
                    {/* Goals */}
                    <div className="p-4 rounded-lg space-y-2">
                      <h3 className="text-base sm:text-lg font-bold mb-2 flex items-center gap-2">
                      <img src="/goals.png" alt="" />  
                        Goals
                      </h3>
                      <p className="text-sm sm:text-base">{user.goals[0]}</p>
                      <p className="text-sm sm:text-base">{user.goals[1]}</p>
                    </div>
  
                    {/* Frustrations */}
                    <div className="p-4 rounded-lg space-y-2">
                      <h3 className="text-base sm:text-lg font-bold mb-2 flex items-center gap-2">
                      <img src="/frustration.png" alt="" />
                        Frustrations
                      </h3>
                      <p className="text-sm sm:text-base">{user.frustrations[0]}</p>
                      <p className="text-sm sm:text-base">{user.frustrations[1]}</p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="flex flex-col pt-4 pb-8 w-1/4 lg:w-1/5 space-y-5 bg-white/50">
                  <div>
                    <img src={`${user.cuisine}`} alt={`${user.name}`} />
                    <span className="flex justify-center font-semibold">Favourite cuisine</span>
                  </div>
                  <div className="p-5 mr-6 rounded-lg bg-[#D9D9D9] space-y-5">
                      {user.feedback?.map((fb, i) => (
                        <div key={i} className="flex flex-col space-y-[0.7rem]">
                          <h3 className="font-semibold">{fb.title}</h3>
                          <div className="relative">
                            <span className={`absolute z-10 h-3 rounded-lg bg-[#4A8491] ${fb.innerWidth || "w-0"}`}></span>
                            <span className={`absolute h-3 rounded-lg bg-[#A7CBD3] ${fb.outerWidth || "w-full"}`}></span>
                            <span className="absolute right-0 -top-2 font-semibold">
                              {fb.rating ?? "N/A"}
                            </span>
                          </div>
                        </div>
                      ))}
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
  
  
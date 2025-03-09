import React from 'react'

const affinity = [
  {
    title: 'Information',
    items: [
      {
        title: 'Show images of bison',
        bg: '#FFD966',
      },
      {
        title: 'History of bison',
        bg: '#E6E6E6',
      },
      {
        title: 'Show bison info',
        bg: '#FFD966',
      },
    ]
  },
  {
    title: 'Contribution',
    items: [
      {
        title: 'Adopt a bison',
        bg: '#FFD966',
      },
      {
        title: 'Donations page',
        bg: '#80CAFF',
      }
    ]
  },
  {
    title: 'Purchase',
    items: [
      {
        title: 'Buy tickets to the park',
        bg: '#FFD966',
      }
    ]
  },
]

const Page6 = () => {
  return (
    <div className="flex flex-col items-start justify-center p-4 sm:p-6 md:p-10 pt-12 md:pt-20 gap-8 md:gap-16 max-w-full overflow-hidden">
      <h1 className="text-xl sm:text-2xl font-bold font-poppins">
        Affinity Map
      </h1>
      
      {/* Main container - responsive grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {affinity.map((category, index) => (
          <div key={index} className="flex flex-col bg-white/50 rounded-lg shadow-sm border border-gray-100 p-4 sm:p-5">
            {/* Category title */}
            <h2 className="text-xl sm:text-2xl font-poppins text-center mb-4 sm:mb-6 font-medium">
              {category.title}
            </h2>
            
            {/* Sticky notes container - responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {category.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className="relative p-3 sm:p-4 rounded shadow-md min-h-[120px] sm:min-h-[160px] flex flex-col justify-between transition-transform hover:-translate-y-1 hover:shadow-lg"
                  style={{ backgroundColor: item.bg }}
                >
                  {/* Sticky note content */}
                  <p className="text-sm sm:text-base font-poppins font-medium">
                    {item.title}
                  </p>
                  
                  {/* Author name */}
                  <span className='text-[0.6rem] sm:text-xs text-gray-500 mt-2'>
                    irshad khan
                  </span>
                </div>
              ))}
              
              {/* Add empty placeholder for visual balance if needed */}
              {category.items.length % 2 !== 0 && category.items.length > 1 && (
                <div className="hidden sm:block" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page6

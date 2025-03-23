import React from 'react';

const affinity = [
  {
    title: 'Locations',
    items: [
      { title: 'List out restaurants', bg: '#FFAFA3', offset: { x: 60, y: 0, z: 0 } },
      { title: 'Classify geographical areas', bg: '#FFD966', offset: { x: -30, y: 60, z: 2 } },
      { title: 'Direction to maps', bg: '#AFBCCF', offset: { x: 20, y: -30, z: 3 } },
    ],
  },
  {
    title: 'Menu',
    items: [
      { title: 'Description of dish', bg: '#FFD966', offset: { x: 100, y: 0, z: 0 } },
      { title: 'Type of food indication', bg: '#FFC470', offset: { x: -170, y: 70, z: 1 } },
      { title: 'Interactive menu', bg: '#D9B8FF', offset: { x: 120, y: -40, z: 2 } },
    ],
  },
  {
    title: 'Gallery',
    items: [
      { title: 'Pictures', bg: '#FFBDF2', offset: { x: 80, y: 0, z: 0 } },
      { title: 'Gallery', bg: '#FFC470', offset: { x: -160, y: 60, z: 1 } },
      { title: 'Pictures of restaurant', bg: '#D9B8FF', offset: { x: 120, y: -70, z: 2 } },
    ],
  },
  {
    title: 'Other Features',
    items: [
      { title: 'Top dishes', bg: '#FFD966', offset: { x: 60, y: 0, z: 0 } },
      { title: 'Book table', bg: '#E6E6E6', offset: { x: -40, y: 50, z: 1 } },
      { title: 'About Page', bg: '#85E0A3', offset: { x: 20, y: -60, z: 3 } },
    ],
  },
  {
    title: 'Contact Us',
    items: [
      { title: 'Contact Us', bg: '#FFD966', offset: { x: 100, y: 0, z: 0 } },
      { title: 'Social Media', bg: '#80CAFF', offset: { x: -160, y: 60, z: 1 } },
      { title: 'Branding', bg: '#D9B8FF', offset: { x: 150, y: -60, z: 2 } },
    ],
  },
  {
    title: 'Testimonials',
    items: [
      { title: 'Feedback', bg: '#FFBDF2', offset: { x: 0, y: 0, z: 0 } }, // Added missing offset
    ],
  },
];

const Page6 = () => {
  return (
    <div className="flex flex-col items-start justify-center p-4 sm:p-6 md:p-10 pt-12 md:pt-20 gap-8 md:gap-16 max-w-full overflow-hidden">
      <h1 className="text-xl sm:text-2xl font-bold font-poppins">Affinity Map</h1>

      {/* Main container - responsive grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {affinity.map((category, index) => (
          <div
            key={index}
            className="flex flex-col bg-white/50 rounded-lg shadow-sm border border-gray-100 p-4 sm:p-5"
          >
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
                  style={{
                    backgroundColor: item.bg,
                    transform: `translate(${item.offset.x}px, ${item.offset.y}px)`,
                    zIndex: item.offset.z,
                  }}
                >
                  {/* Sticky note content */}
                  <p className="text-sm sm:text-base font-poppins font-medium">{item.title}</p>

                  {/* Author name */}
                  <span className="text-[0.6rem] sm:text-xs text-gray-500 mt-2">irshad khan</span>
                </div>
              ))}

              {/* Add empty placeholder for visual balance if needed */}
              {category.items.length % 2 !== 0 && category.items.length > 1 && <div className="hidden sm:block" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page6;

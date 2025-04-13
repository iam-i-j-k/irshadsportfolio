import React from 'react'


const Page2 = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 gap-20">
    <div className="grid grid-cols-1 font-poppins sm:grid-cols-1 gap-10 w-full">
      <div className="text-sm sm:text-lg">
        <strong>Problem Statement: </strong> A warehouse in the city for a local shop which transacts 100’s of goods every week need a easy technique to track all the data uses excel sheet and manual book logging techique to note all the goods in the ware house, need a easier logging technique.      </div>
      <div className="font-poppins text-sm sm:text-lg">
        <strong>My Role: </strong> User research, Conseptualization, Design, Usability testing
      </div>
    </div>
    <div className="grid grid-cols-1 font-poppins sm:grid-cols-1 gap-10 w-full">
      <div className="text-lg">
      Researching user frustrations by conducting interviews understanding user needs, designing wireframes in the initial phase according to user needs. Balancing business goals and user needs to a mid point to design an adaptable product. Designing UI libraries for further use case and aesthetic designs. Continously iterating with new ideas receiving feedback from management and users. 
      </div>
    </div>
    <div className="grid grid-cols-1 font-poppins sm:grid-cols-1 gap-5 w-full">
      <div className="text-2xl">
        <strong>Brief about rackup</strong>
      </div>
      <p>
        <strong>Rackup </strong>is a powerful <strong> SaaS</strong>-based web application designed to enhance warehouse management. It features robust modules for inventory management, order management, and vendor management and other modules . With real-time inventory tracking, automated replenishment, efficient order processing, shipping integration, and comprehensive vendor coordination, Rackup streamlines operations, improves accuracy, and boosts efficiency, making it an essential tool for modern supply chain management.
      </p>
    </div>
    <div>
        <img src="/rackup.jpg" alt="" />
    </div>
  </div>
  )
}

export default Page2
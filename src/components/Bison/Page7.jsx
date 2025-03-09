import React, { useState } from "react"

export default function Flowchart() {
  const [hoveredNode, setHoveredNode] = useState(null)

  const handleMouseEnter = (nodeId) => {
    setHoveredNode(nodeId)
  }

  const handleMouseLeave = () => {
    setHoveredNode(null)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white">
      <div className="flex flex-col items-center max-w-5xl w-full">
        {/* Start node */}
        <div
          className="px-6 py-2 mb-4 text-black font-medium bg-yellow-300 rounded-md"
          onMouseEnter={() => handleMouseEnter("start")}
          onMouseLeave={handleMouseLeave}
        >
          start
        </div>

        {/* Connector line with bracket */}
        <div className="relative w-full h-8">
          <div className="absolute left-1/2 top-0 w-px h-4 bg-gray-300"></div>
          <div className="absolute left-1/4 right-1/4 top-4 h-px bg-gray-300"></div>
          <div className="absolute left-1/4 top-4 w-px h-4 bg-gray-300"></div>
          <div className="absolute right-1/4 top-4 w-px h-4 bg-gray-300"></div>
        </div>

        {/* Main sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full mb-4">
          <div className="flex flex-col items-center">
            <div
              className="px-6 py-2 text-black font-medium bg-yellow-300 rounded-md w-full text-center"
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={handleMouseLeave}
            >
              Home
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="px-6 py-2 text-black font-medium bg-green-400 rounded-md w-full text-center"
              onMouseEnter={() => handleMouseEnter("donate")}
              onMouseLeave={handleMouseLeave}
            >
              Donate
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="px-6 py-2 text-black font-medium bg-purple-300 rounded-md w-full text-center"
              onMouseEnter={() => handleMouseEnter("adopt")}
              onMouseLeave={handleMouseLeave}
            >
              Adopt
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="px-6 py-2 text-black font-medium bg-blue-300 rounded-md w-full text-center"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              About
            </div>
          </div>
        </div>

        {/* Home flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
          <div className="flex flex-col items-center">
            <div className="w-px h-8 bg-gray-300"></div>
            <div
              className="px-6 py-2 text-black font-medium bg-yellow-300 rounded-md w-full text-center mb-4"
              onMouseEnter={() => handleMouseEnter("information")}
              onMouseLeave={handleMouseLeave}
            >
              Information
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div
              className="px-6 py-2 text-black font-medium bg-yellow-300 rounded-md w-full text-center mb-4"
              onMouseEnter={() => handleMouseEnter("effect")}
              onMouseLeave={handleMouseLeave}
            >
              effect to eco system
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div
              className="px-6 py-2 text-black font-medium bg-yellow-300 rounded-md w-full text-center mb-4"
              onMouseEnter={() => handleMouseEnter("stories")}
              onMouseLeave={handleMouseLeave}
            >
              stories
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div
              className="px-6 py-2 text-black font-medium bg-yellow-300 rounded-md w-full text-center"
              onMouseEnter={() => handleMouseEnter("foster")}
              onMouseLeave={handleMouseLeave}
            >
              foster/contact
            </div>
          </div>

          {/* Donate flow */}
          <div className="flex flex-col items-center">
            <div className="w-px h-8 bg-gray-300"></div>
            <div
              className="px-6 py-2 text-black font-medium bg-green-400 rounded-md w-full text-center mb-4"
              onMouseEnter={() => handleMouseEnter("details")}
              onMouseLeave={handleMouseLeave}
            >
              enter your details
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div
              className="px-6 py-2 text-black font-medium bg-green-400 rounded-md w-full text-center mb-4"
              onMouseEnter={() => handleMouseEnter("dish")}
              onMouseLeave={handleMouseLeave}
            >
              select your donation
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div
              className="px-6 py-2 text-black font-medium bg-green-400 rounded-md w-full text-center"
              onMouseEnter={() => handleMouseEnter("fundTransfer")}
              onMouseLeave={handleMouseLeave}
            >
              fund transfer
            </div>
          </div>

          {/* Adopt flow */}
          <div className="flex flex-col items-center">
            <div className="w-px h-8 bg-gray-300"></div>
            <div
              className="px-6 py-2 text-black font-medium bg-blue-300 rounded-md w-full text-center mb-4"
              onMouseEnter={() => handleMouseEnter("login")}
              onMouseLeave={handleMouseLeave}
            >
              login
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div
              className="px-6 py-2 text-black font-medium bg-blue-300 rounded-md w-full text-center mb-4"
              onMouseEnter={() => handleMouseEnter("bison")}
              onMouseLeave={handleMouseLeave}
            >
              select the bison
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div
              className="px-6 py-2 text-black font-medium bg-blue-300 rounded-md w-full text-center"
              onMouseEnter={() => handleMouseEnter("fundTransactions")}
              onMouseLeave={handleMouseLeave}
            >
              fund transactions
            </div>
          </div>

          {/* About flow (empty) */}
          <div className="flex flex-col items-center">{/* No flow for About */}</div>
        </div>
      </div>
    </div>
  )
}


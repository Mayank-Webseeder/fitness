import React from 'react'
import { 
  ThumbsUp,
  Search
} from 'lucide-react';


const TrackYourSuggestions = () => {
  return (
    <div>
      <header className="bg-white border-b border-gray-200  mt-0 px-4 py-3 flex items-center shadow-sm">
              <h1 className="text-xl font-bold text-gray-800 flex items-center font-sans gap-2 ">
                <ThumbsUp />
                Track Your Suggestions
              </h1>
            </header>

            <section className="bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto bg-gray-100 rounded-md flex items-center justify-between p-3 shadow-sm">
        
        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-md shadow-sm px-3 py-2 w-64">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Button */}
        <button className="flex items-center space-x-2 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition">
          <span className="text-lg leading-none">+</span>
          <span>ADD SUGGESTIONS</span>
        </button>
      </div>
    </section>
    </div>
  )
}

export default TrackYourSuggestions

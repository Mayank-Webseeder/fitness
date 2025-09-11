import React from 'react'

import { 
  FolderDown
} from 'lucide-react';

const Versions = () => {
  return (
    <div>
        <header className="bg-white border-b border-gray-200  mt-0 px-4 py-3 flex items-center shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 flex items-center font-sans gap-2 ">
          <FolderDown />
          Versions
        </h1>
      </header>

      

    </div>
  )
}

export default Versions

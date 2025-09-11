import React from 'react'

import { 
    Share2
} from 'lucide-react';

const MyReferrals = () => {
  return (
    <div>
        <header className="bg-white border-b border-gray-200  mt-0 px-4 py-3 flex items-center shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 flex items-center font-sans gap-2 ">
          <Share2 />
          My Referrals
        </h1>
      </header>

      <section className="bg-white p-4">
      <div className="flex items-center space-x-2">
        
        {/* Logo */}
        <img
          src="/images/referral-icon.png" 
          alt="Referral Logo"
          className="h-20 w-20 object-contain"
        />

        {/* Text Section */}
        <div className="flex flex-col">
          {/* Blue Badge */}
          <div className="bg-blue-700 text-white px-3 py-0.5 rounded-sm  font-bold w-fit">
            Referral Program
          </div>

          {/* Subtitle */}
          <p className="text-lg text-gray-800 mt-0.5  ">
            Refer &amp; Get 2 Months FREE License
          </p>
        </div>
      </div>
    </section>

      

    </div>
  )
}

export default MyReferrals

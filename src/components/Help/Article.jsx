import React, { useState } from 'react'

import { 
  Newspaper,
  Search, 
  ArrowRight
} from 'lucide-react';

const faqs = [
  "How to enable automatic SMS settings?",
  "How to send Bulk SMS?",
  "How to add a master membership?",
  "How to provide login access to a staff?",
  "How to provide permissions for a staff?",
  "How to include Terms & Conditions in your invoices?",
  "How to troubleshoot 'Biometric device not connected' issue?",
  "How to enroll a Fingerprint in the Biometric Software?",
];

const Article = () => {
  const [search, setSearch] = useState("");

  const filteredFaqs = faqs.filter((faq) =>
    faq.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <header className="bg-white border-b border-gray-200  mt-0 px-4 py-3 flex items-center shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 flex items-center font-sans gap-2 ">
          <Newspaper />
          Article
        </h1>
      </header>

      <section className="flex flex-col md:flex-row gap-6 justify-center items-center w-full mt-6">
        {/* Useful Resources Card */}
        <div className="bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl shadow-lg p-6 w-full h-52  md:w-1/3 flex items-center gap-4">
          <div className="">
            <img 
              src="/images/bulb.png" 
              alt="Bulb Icon" 
              className="h-25 w-35"
            />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">Useful Resources</h3>
            <p className="text-white mt-1">
              If you have any query, please try searching here
            </p>
          </div>
        </div>

        {/* Not Getting what you are searching for Card */}
        <div className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 rounded-2xl shadow-lg p-6 w-full h-52 md:w-1/3 flex items-center gap-4">
          <div className="">
            <img 
              src="/images/phone.png" 
              alt="Phone Icon" 
              className="h-20 w-38"
            />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">
              Not Getting what you are search for?
            </h3>
            <p className="text-white  mt-1">
              No Worries... Our dedicated support team is here to help you at <br />
              <span className="font-semibold">+90 9059059751</span>
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto p-6">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search by any question..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* FAQ List */}
        <div className="divide-y divide-gray-200">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="py-4">
              <h3 className="text-gray-900 font-medium">{faq}</h3>
              <a
                href="#"
                className="flex items-center text-blue-500 text-sm mt-1 hover:underline"
              >
                <ArrowRight className="h-4 w-4 mr-1" />
                Click for more details
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Article
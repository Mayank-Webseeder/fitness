import React, { useState } from "react";
import { CircleQuestionMark, Search, ChevronDown } from "lucide-react";

const faqs = [
  "How to add / edit my packages with amount?",
  "How to add a new member?",
  "How to renew membership?",
  "How to add gift days?",
  "How to upgrade membership plan?",
  "How to refer a friend to get reward points?",
  "How to login if you forgot the password?",
  "How to manage SMS Settings for Members?",
  "How to send bulk SMS to active/Inactive/all members?",
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
    <header className="bg-white border-b border-gray-200  mt-0 px-4 py-3 flex items-center shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 flex items-center font-sans gap-2 ">
          <CircleQuestionMark />
          FAQ - Frequently Asked Questions
        </h1>
    </header>
    <section className="bg-white py-8">
      <div className="max-w-3xl mx-auto px-4">
        {/* Search Bar */}
        <div className="flex items-center bg-white border rounded-md px-3 py-2 shadow-sm">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search by any question..."
            className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Counter */}
        <div className="flex justify-end mt-3 text-sm text-gray-500">
          <span>49 questions found</span>
        </div>

        {/* FAQ List */}
        <div className="mt-4 bg-white shadow rounded-md divide-y">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-50"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-sm text-gray-800">{faq}</span>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

import React from "react";
import { History, Filter } from "lucide-react";

const Sms_history = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 mt-0 px-4 py-3 flex items-center shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 flex items-center font-sans gap-2">
          <History />
          SMS History
        </h1>
      </header>

      {/* Content Section */}
      <div className="p-6">
        {/* Search + Filter */}
        <div className="flex items-center gap-2 mb-4">
          <button className="p-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
          <input
            type="text"
            placeholder="Search by name or number..."
            className="w-80 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-md shadow-sm overflow-hidden border border-gray-200">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">#</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Recipient</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Message</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Date</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Example row */}
              <tr className="border-t border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-700">1</td>
                <td className="px-4 py-3 text-gray-700">91-9876543210</td>
                <td className="px-4 py-3 text-gray-700">Hello, your appointment is confirmed.</td>
                <td className="px-4 py-3 text-gray-700">25-09-2025</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                    Sent
                  </span>
                </td>
              </tr>
              <tr className="border-t border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-700">2</td>
                <td className="px-4 py-3 text-gray-700">91-1234567890</td>
                <td className="px-4 py-3 text-gray-700">Your OTP is 123456</td>
                <td className="px-4 py-3 text-gray-700">24-09-2025</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-full">
                    Failed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sms_history;

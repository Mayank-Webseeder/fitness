import React from "react";
import {
  FileText,
  Download,
  Filter,
  Search,
  TrendingUp,
  Circle,
  MoreHorizontal,
} from "lucide-react";

const TotalInvoices = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <FileText className="h-6 w-6 text-gray-700" />
          Total Invoices
        </h1>

        {/* Search & Export */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          {/* Search Box */}
          <div className="flex items-center bg-white rounded-md shadow-sm border px-3 py-2 w-[450px] relative">
            <Filter className="h-5 w-5 text-gray-500 mr-2" />
            <Search className="h-4 w-4 text-gray-400 absolute left-11" />
            <input
              type="text"
              placeholder="Search by id, name..."
              className="pl-14 w-full text-sm outline-none bg-transparent"
            />
          </div>

          {/* Export Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition">
            <Download className="h-4 w-4" />
            EXPORT
          </button>
        </div>
      </header>

      {/* Blocks Section */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Invoices */}
        <div className="bg-white border border-blue-300 rounded-lg p-5 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">INVOICES</p>
              <h2 className="text-2xl font-bold text-gray-900">100</h2>
            </div>
          </div>
          <TrendingUp className="h-5 w-5 text-gray-400" />
        </div>

        {/* Collection */}
        <div className="bg-white border border-blue-300 rounded-lg p-5 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
              <Circle className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium">COLLECTION</p>
              <h2 className="text-2xl font-bold text-gray-900">₹30,000</h2>
            </div>
          </div>
          <TrendingUp className="h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Invoice Table */}
      <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600 text-left">
            <tr>
              <th className="py-3 px-4">By</th>
              <th className="py-3 px-4">INVOICE</th>
              <th className="py-3 px-4">Member</th>
              <th className="py-3 px-4">Contact</th>
              <th className="py-3 px-4">TXN</th>
              <th className="py-3 px-4">Membership</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">By</th>
              <th className="py-3 px-4"></th>
            </tr>
          </thead>

          <tbody className="divide-y">
            <tr>
              <td className="py-3 px-4 flex items-center gap-2">
                <span className="text-red-500 font-medium">GPay</span>
              </td>
              <td className="py-3 px-4">#1</td>
              <td className="py-3 px-4">
                <p className="font-medium text-gray-800">Samrudhi</p>
                <p className="text-xs text-gray-500">Female</p>
              </td>
              <td className="py-3 px-4">91-1234567890</td>
              <td className="py-3 px-4">07-Jul-2025</td>
              <td className="py-3 px-4">
                FITNESS ‘M <br />
                <span className="text-xs text-gray-500">
                  01-Jun-2025 to 01-Jul-2026
                </span>
              </td>
              <td className="py-3 px-4 font-semibold text-gray-800">₹12,000</td>
              <td className="py-3 px-4">Admin</td>
              <td className="py-3 px-4">
                <MoreHorizontal className="h-4 w-4 text-gray-500 cursor-pointer" />
              </td>
            </tr>

            <tr>
              <td className="py-3 px-4">Raj</td>
              <td className="py-3 px-4">#2</td>
              <td className="py-3 px-4">
                <p className="font-medium text-gray-800">Nikhil</p>
                <p className="text-xs text-gray-500">Male</p>
              </td>
              <td className="py-3 px-4">91-1234567890</td>
              <td className="py-3 px-4">07-Jul-2025</td>
              <td className="py-3 px-4">
                FITNESS ‘M <br />
                <span className="text-xs text-gray-500">
                  01-Jun-2025 to 01-Jul-2026
                </span>
              </td>
              <td className="py-3 px-4 font-semibold text-gray-800">₹2,000</td>
              <td className="py-3 px-4">Raj</td>
              <td className="py-3 px-4">
                <MoreHorizontal className="h-4 w-4 text-gray-500 cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Footer total */}
        <div className="flex justify-end px-6 py-3 bg-gray-50">
          <p className="text-green-600 font-bold">₹14,000</p>
        </div>
      </div>
    </div>
  );
};

export default TotalInvoices;

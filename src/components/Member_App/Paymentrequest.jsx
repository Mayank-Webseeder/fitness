import React from "react";
import { Search, Users, FolderDown } from "lucide-react"; 

const PaymentRequest = () => {
  const paymentRequests = [
    { refId: "#1", dateTime: "08/17/2025", amount: "₹5000.00", requestedBy: "John Doe" },
    { refId: "#2", dateTime: "08/21/2025", amount: "₹3000.00", requestedBy: "Amit Sharma" },
    { refId: "#3", dateTime: "08/25/2025", amount: "₹4500.00", requestedBy: "Priya Singh" },
    { refId: "#4", dateTime: "08/29/2025", amount: "₹6000.00", requestedBy: "Rahul Mehta" },
    { refId: "#5", dateTime: "09/01/2025", amount: "₹2500.00", requestedBy: "Sneha Verma" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center ">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 w-full px-6 py-4 flex items-center shadow-sm">
        <h1 className="text-l font-bold text-gray-800 flex items-center gap-2 font-sans">
          <FolderDown className="w-5 h-5 text-gray-700" />
          Payment Request
        </h1>
      </header>

      {/* Main Content */}
      <div className="w-[95%] bg-white border border-gray-200 rounded-xl shadow-sm p-4 mt-6">
        {/* Search & Actions Row */}
        <div className="flex justify-between items-center mb-4">
          {/* Search Input */}
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-80 shadow-sm bg-white">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search by id, name or contact..."
              className="w-full outline-none text-sm text-gray-700"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <button className="border border-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
              Export
            </button>
            <button className="border border-red-500 text-red-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-red-50 transition">
              Delete
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
              + Add
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm text-gray-700">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="p-3 text-left w-10">
                  <input type="checkbox" className="w-4 h-4" />
                </th>
                <th className="p-3 text-left font-semibold text-gray-700">Ref#</th>
                <th className="p-3 text-left font-semibold text-gray-700">Date Time</th>
                <th className="p-3 text-left font-semibold text-gray-700">Amount</th>
                <th className="p-3 text-left font-semibold text-gray-700">Requested By</th>
              </tr>
            </thead>
            <tbody>
              {paymentRequests.map((req, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="p-3">
                    <input type="checkbox" className="w-4 h-4" />
                  </td>
                  <td className="p-3 font-medium text-gray-900">{req.refId}</td>
                  <td className="p-3">{req.dateTime}</td>
                  <td className="p-3">{req.amount}</td>
                  <td className="p-3">{req.requestedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentRequest;

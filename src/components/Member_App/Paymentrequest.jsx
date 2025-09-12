import React from "react";
import { Search, RefreshCcw } from "lucide-react";

const PaymentRequest = () => {
  const paymentRequests = [
    {
      refId: "REQ-1001",
      dateTime: "08/17/2025",
      amount: "₹5000.00",
      requestedBy: "John Doe",
    },
    {
      refId: "REQ-1002",
      dateTime: "08/21/2025",
      amount: "₹3000.00",
      requestedBy: "Amit Sharma",
    },
    {
      refId: "REQ-1003",
      dateTime: "08/25/2025",
      amount: "₹4500.00",
      requestedBy: "Priya Singh",
    },
    {
      refId: "REQ-1004",
      dateTime: "08/29/2025",
      amount: "₹6000.00",
      requestedBy: "Rahul Mehta",
    },
    {
      refId: "REQ-1005",
      dateTime: "09/01/2025",
      amount: "₹2500.00",
      requestedBy: "Sneha Verma",
    },
  ];

  return (
    <div className="w-full px-6 py-6">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Payment Requests
      </h2>

      {/* Search and Refresh */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center border rounded-lg px-3 py-2 w-80">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search by ref id, name or contact"
            className="w-full outline-none text-sm"
          />
        </div>
        <button className="flex items-center gap-1 px-4 py-2 border rounded-lg hover:bg-gray-100">
          <RefreshCcw className="w-4 h-4" />
          <span className="text-sm font-medium">REFRESH</span>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-xl">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-600">
              <th className="py-3 px-4 border-b">Ref#</th>
              <th className="py-3 px-4 border-b">Date Time</th>
              <th className="py-3 px-4 border-b">Amount</th>
              <th className="py-3 px-4 border-b">Requested By</th>
            </tr>
          </thead>
          <tbody>
            {paymentRequests.map((req) => (
              <tr
                key={req.refId}
                className="hover:bg-gray-50 text-sm text-gray-700"
              >
                <td className="py-3 px-4 border-b">{req.refId}</td>
                <td className="py-3 px-4 border-b">{req.dateTime}</td>
                <td className="py-3 px-4 border-b">{req.amount}</td>
                <td className="py-3 px-4 border-b">{req.requestedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentRequest;

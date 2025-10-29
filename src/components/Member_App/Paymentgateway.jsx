import React from "react";
import { Search, RefreshCcw } from "lucide-react";

const PaymentGateway = () => {
  const gateways = [
    { name: "Razorpay", merchantId: "MER-1001", createdOn: "08/15/2025", status: "Active" },
    { name: "Paytm", merchantId: "MER-1002", createdOn: "08/20/2025", status: "Inactive" },
    { name: "PhonePe", merchantId: "MER-1003", createdOn: "08/25/2025", status: "Active" },
    { name: "Cashfree", merchantId: "MER-1004", createdOn: "08/27/2025", status: "Pending" },
    { name: "Stripe", merchantId: "MER-1005", createdOn: "09/01/2025", status: "Active" },
  ];

  return (
    <div className="w-full px-6 py-6">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Payment Gateways
      </h2>

      {/* Search + Refresh */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white border border-gray-300 rounded-lg shadow-sm px-3 py-2 w-80">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search by name or merchant ID"
              className="w-full outline-none text-sm text-gray-700 placeholder-gray-400"
            />
          </div>
          <button className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 bg-white text-gray-700 shadow-sm transition">
            <RefreshCcw className="w-4 h-4" />
            <span className="text-sm font-medium">REFRESH</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b border-gray-200">Gateway Name</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b border-gray-200">Merchant ID</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b border-gray-200">Created On</th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b border-gray-200">Status</th>
            </tr>
          </thead>
          <tbody>
            {gateways.map((gw, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition border-b border-gray-200 last:border-none"
              >
                <td className="py-3 px-4">{gw.name}</td>
                <td className="py-3 px-4">{gw.merchantId}</td>
                <td className="py-3 px-4">{gw.createdOn}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border 
                      ${
                        gw.status === "Active"
                          ? "bg-green-50 text-green-700 border-green-300"
                          : gw.status === "Inactive"
                          ? "bg-red-50 text-red-700 border-red-300"
                          : "bg-yellow-50 text-yellow-700 border-yellow-300"
                      }`}
                  >
                    {gw.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentGateway;

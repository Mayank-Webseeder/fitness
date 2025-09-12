import React from "react";
import { Search, RefreshCcw } from "lucide-react";

const PaymentGateway = () => {
  const gateways = [
    {
      name: "Razorpay",
      merchantId: "MER-1001",
      createdOn: "08/15/2025",
      status: "Active",
    },
    {
      name: "Paytm",
      merchantId: "MER-1002",
      createdOn: "08/20/2025",
      status: "Inactive",
    },
    {
      name: "PhonePe",
      merchantId: "MER-1003",
      createdOn: "08/25/2025",
      status: "Active",
    },
    {
      name: "Cashfree",
      merchantId: "MER-1004",
      createdOn: "08/27/2025",
      status: "Pending",
    },
    {
      name: "Stripe",
      merchantId: "MER-1005",
      createdOn: "09/01/2025",
      status: "Active",
    },
  ];

  return (
    <div className="w-full px-6 py-6">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Payment Gateways
      </h2>

      {/* Search and Refresh */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex items-center border rounded-lg px-3 py-2 w-80">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search by name or merchant ID"
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
              <th className="py-3 px-4 border-b">Gateway Name</th>
              <th className="py-3 px-4 border-b">Merchant ID</th>
              <th className="py-3 px-4 border-b">Created On</th>
              <th className="py-3 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {gateways.map((gw) => (
              <tr
                key={gw.merchantId}
                className="hover:bg-gray-50 text-sm text-gray-700"
              >
                <td className="py-3 px-4 border-b">{gw.name}</td>
                <td className="py-3 px-4 border-b">{gw.merchantId}</td>
                <td className="py-3 px-4 border-b">{gw.createdOn}</td>
                <td className="py-3 px-4 border-b">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium
                      ${
                        gw.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : gw.status === "Inactive"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
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

import React, { useState } from 'react';
import { Settings, Search, Trash2, Plus, MoreVertical } from 'lucide-react';

const ConfigMaster = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const membershipData = [
    {
      id: 1,
      membership: 'Personal Training 12M',
      maxCost: '₹35,000',
      minCost: '₹0',
      duration: '12 Months'
    },
    {
      id: 2,
      membership: 'Personal Training 6M',
      maxCost: '₹20,000',
      minCost: '₹0',
      duration: '6 Months'
    },
    {
      id: 3,
      membership: 'Personal Training 3M',
      maxCost: '₹12,000',
      minCost: '₹0',
      duration: '3 Months'
    },
    {
      id: 4,
      membership: 'Personal Training 1M',
      maxCost: '₹5,000',
      minCost: '₹0',
      duration: '1 Months'
    },
    {
      id: 5,
      membership: 'Fitness 1M',
      maxCost: '₹1,500',
      minCost: '₹0',
      duration: '1 Months'
    },
    {
      id: 6,
      membership: 'Fitness 3M',
      maxCost: '₹4,000',
      minCost: '₹0',
      duration: '3 Months'
    },
    {
      id: 7,
      membership: 'Fitness 6M',
      maxCost: '₹7,000',
      minCost: '₹0',
      duration: '6 Months'
    },
    {
      id: 8,
      membership: 'Fitness 12M',
      maxCost: '₹12,000',
      minCost: '₹0',
      duration: '12 Months'
    }
  ];

  const filteredMemberships = membershipData.filter(item =>
    item.membership.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Settings className="w-6 h-6 text-gray-700" />
        <h1 className="text-2xl font-semibold text-gray-800">Master Membership</h1>
      </div>

      {/* Controls Bar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex items-center justify-between gap-4">
          {/* Left side - Search */}
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by membership..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          {/* Right side - Action buttons */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-red-600 border border-red-300 rounded-md hover:bg-red-50 text-sm font-medium">
              <Trash2 className="w-4 h-4" />
              DELETE
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
              <Plus className="w-4 h-4" />
              ADD
            </button>
          </div>
        </div>
      </div>

      {/* Membership Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Table Header */}
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="w-12 px-4 py-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Membership</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Max.Cost</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Min.Cost</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Duration</th>
                <th className="w-12 px-4 py-3"></th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200">
              {filteredMemberships.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    {item.membership}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {item.maxCost}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {item.minCost}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {item.duration}
                  </td>
                  <td className="px-4 py-4">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreVertical className="w-4 h-4 text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredMemberships.length === 0 && (
          <div className="px-4 py-8 text-center text-gray-500">
            <Settings className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p className="text-lg font-medium">No memberships found</p>
            <p className="text-sm">Try adjusting your search criteria or add new memberships</p>
          </div>
        )}
      </div>

      {/* Footer Info */}
      {filteredMemberships.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredMemberships.length} of {membershipData.length} memberships
        </div>
      )}
    </div>
  );
};

export default ConfigMaster;
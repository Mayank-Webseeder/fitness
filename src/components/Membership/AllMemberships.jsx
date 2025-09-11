import React, { useState } from 'react';
import { Users, Search, MessageSquare, Download, Filter, MoreVertical } from 'lucide-react';

const AllMemberships = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const membersData = [
    {
      id: '#1',
      name: 'Samruddhi',
      gender: 'Female',
      contact: '91-1234567890',
      group: 'Evening',
      membership: 'FITNESS - 1M',
      duration: '01-Jun-2025 to 01-Jul-2026',
      status: 'ACTIVE',
      balance: '₹2000.00',
      by: 'Admin',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: '#2',
      name: 'Nikhil',
      gender: 'Male',
      contact: '91-1234567890',
      group: 'Evening',
      membership: 'PT 1 Month',
      duration: '-',
      status: 'INACTIVE',
      balance: '₹3000.00',
      by: 'Raj',
      avatar: '/api/placeholder/40/40'
    }
  ];

  const filteredMembers = membersData.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.contact.includes(searchTerm) ||
    member.id.includes(searchTerm)
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Users className="w-6 h-6 text-gray-700" />
        <h1 className="text-2xl font-semibold text-gray-800">All Memberships</h1>
      </div>

      {/* Controls Bar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex items-center justify-between gap-4">
          {/* Left side - Filter and Search */}
          <div className="flex items-center gap-4 flex-1">
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <Filter className="w-4 h-4" />
            </button>
            
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by Id, name or contact..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right side - Action buttons */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50">
              <MessageSquare className="w-4 h-4" />
              MESSAGES
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              <Download className="w-4 h-4" />
              EXPORT
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Table Header */}
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="w-12 px-4 py-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">ID</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Contact</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Group</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Membership</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Duration</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Balance</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">By</th>
                <th className="w-12 px-4 py-3"></th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200">
              {filteredMembers.map((member, index) => (
                <tr key={member.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">{member.id}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{member.name}</div>
                        <div className="text-xs text-gray-500">{member.gender}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">{member.contact}</td>
                  <td className="px-4 py-4">
                    <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {member.group}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">{member.membership}</td>
                  <td className="px-4 py-4 text-sm text-gray-900">{member.duration}</td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      member.status === 'ACTIVE' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">{member.balance}</td>
                  <td className="px-4 py-4 text-sm text-gray-900">{member.by}</td>
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
        {filteredMembers.length === 0 && (
          <div className="px-4 py-8 text-center text-gray-500">
            <Users className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p className="text-lg font-medium">No members found</p>
            <p className="text-sm">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Footer Info */}
      {filteredMembers.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredMembers.length} of {membersData.length} members
        </div>
      )}
    </div>
  );
};

export default AllMemberships;
import React, { useState } from 'react';
import { Settings, Search, Trash2, Plus, MoreVertical, Edit, Download, X } from 'lucide-react';

const ConfigMaster = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [membershipData, setMembershipData] = useState([
    { id: 1, membership: 'Personal Training 12M', maxCost: '₹35,000', minCost: '₹0', duration: '12 Months' },
    { id: 2, membership: 'Personal Training 6M', maxCost: '₹20,000', minCost: '₹0', duration: '6 Months' },
    { id: 3, membership: 'Personal Training 3M', maxCost: '₹12,000', minCost: '₹0', duration: '3 Months' },
    { id: 4, membership: 'Personal Training 1M', maxCost: '₹5,000', minCost: '₹0', duration: '1 Months' },
    { id: 5, membership: 'Fitness 1M', maxCost: '₹1,500', minCost: '₹0', duration: '1 Months' },
    { id: 6, membership: 'Fitness 3M', maxCost: '₹4,000', minCost: '₹0', duration: '3 Months' },
    { id: 7, membership: 'Fitness 6M', maxCost: '₹7,000', minCost: '₹0', duration: '6 Months' },
    { id: 8, membership: 'Fitness 12M', maxCost: '₹12,000', minCost: '₹0', duration: '12 Months' }
  ]);

  const [editingId, setEditingId] = useState(null);
  const [newMembership, setNewMembership] = useState({ membership: '', maxCost: '', minCost: '', duration: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredMemberships = membershipData.filter(item =>
    item.membership.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Export CSV function
  const handleExportCSV = () => {
    const csvHeader = ['Membership', 'Max Cost', 'Min Cost', 'Duration'];
    const csvRows = membershipData.map(item => [item.membership, item.maxCost, item.minCost, item.duration]);
    const csvContent = [csvHeader, ...csvRows].map(e => e.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'memberships.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Add membership from modal
  const handleAdd = () => {
    if (!newMembership.membership) return;
    const newId = membershipData.length ? Math.max(...membershipData.map(m => m.id)) + 1 : 1;
    setMembershipData([...membershipData, { id: newId, ...newMembership }]);
    setNewMembership({ membership: '', maxCost: '', minCost: '', duration: '' });
    setIsModalOpen(false);
  };

  // Edit membership
  const handleSaveEdit = id => {
    setMembershipData(membershipData.map(item => item.id === id ? { ...item, ...newMembership } : item));
    setEditingId(null);
    setNewMembership({ membership: '', maxCost: '', minCost: '', duration: '' });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Settings className="w-6 h-6 text-gray-700" />
        <h1 className="text-2xl font-semibold text-gray-800">Master Membership</h1>
      </div>

      {/* Controls Bar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6 flex items-center justify-between">
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

        <div className="flex items-center gap-3">
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium"
          >
            <Download className="w-4 h-4" /> EXPORT
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
          >
            <Plus className="w-4 h-4" /> ADD
          </button>
        </div>
      </div>

      {/* Membership Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="w-12 px-4 py-3"><input type="checkbox" className="rounded border-gray-300" /></th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Membership</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Max.Cost</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Min.Cost</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Duration</th>
                <th className="w-12 px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredMemberships.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4"><input type="checkbox" className="rounded border-gray-300" /></td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    {editingId === item.id ? (
                      <input
                        type="text"
                        value={newMembership.membership}
                        onChange={(e) => setNewMembership({ ...newMembership, membership: e.target.value })}
                        className="border rounded px-2 py-1"
                      />
                    ) : item.membership}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {editingId === item.id ? (
                      <input
                        type="text"
                        value={newMembership.maxCost}
                        onChange={(e) => setNewMembership({ ...newMembership, maxCost: e.target.value })}
                        className="border rounded px-2 py-1"
                      />
                    ) : item.maxCost}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {editingId === item.id ? (
                      <input
                        type="text"
                        value={newMembership.minCost}
                        onChange={(e) => setNewMembership({ ...newMembership, minCost: e.target.value })}
                        className="border rounded px-2 py-1"
                      />
                    ) : item.minCost}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {editingId === item.id ? (
                      <input
                        type="text"
                        value={newMembership.duration}
                        onChange={(e) => setNewMembership({ ...newMembership, duration: e.target.value })}
                        className="border rounded px-2 py-1"
                      />
                    ) : item.duration}
                  </td>
                  <td className="px-4 py-4 flex gap-1">
                    {editingId === item.id ? (
                      <button
                        onClick={() => handleSaveEdit(item.id)}
                        className="px-2 py-1 bg-blue-600 text-white rounded text-xs"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => { setEditingId(item.id); setNewMembership(item); }}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Edit className="w-4 h-4 text-gray-400" />
                      </button>
                    )}
                    <button
                      onClick={() => setMembershipData(membershipData.filter(m => m.id !== item.id))}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Trash2 className="w-4 h-4 text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredMemberships.length === 0 && (
          <div className="px-4 py-8 text-center text-gray-500">
            <Settings className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p className="text-lg font-medium">No memberships found</p>
            <p className="text-sm">Try adjusting your search criteria or add new memberships</p>
          </div>
        )}
      </div>

      {filteredMemberships.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredMemberships.length} of {membershipData.length} memberships
        </div>
      )}

      {/* Add Membership Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 p-1 hover:bg-gray-200 rounded-full"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
            <h2 className="text-xl font-semibold mb-4">Add New Membership</h2>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Membership Name"
                value={newMembership.membership}
                onChange={(e) => setNewMembership({ ...newMembership, membership: e.target.value })}
                className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Max Cost"
                value={newMembership.maxCost}
                onChange={(e) => setNewMembership({ ...newMembership, maxCost: e.target.value })}
                className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Min Cost"
                value={newMembership.minCost}
                onChange={(e) => setNewMembership({ ...newMembership, minCost: e.target.value })}
                className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Duration"
                value={newMembership.duration}
                onChange={(e) => setNewMembership({ ...newMembership, duration: e.target.value })}
                className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleAdd}
                className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium"
              >
                Add Membership
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfigMaster;

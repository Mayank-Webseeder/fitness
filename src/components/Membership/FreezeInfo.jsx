import React, { useState } from 'react';
import {
  Snowflake,
  Search,
  MessageSquare,
  Download,
  Filter,
  MoreVertical,
  Plus,
  Edit,
  X,
} from 'lucide-react';

const FreezeInfo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [freezeData, setFreezeData] = useState([
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
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    gender: 'Male',
    contact: '',
    group: '',
    membership: '',
    duration: '',
    status: 'ACTIVE',
    balance: '',
    by: '',
  });

  const filteredData = freezeData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.contact.includes(searchTerm) ||
      item.id.includes(searchTerm)
  );

  // CSV export
  const handleExport = () => {
    if (filteredData.length === 0) return;
    const headers = [
      'ID',
      'Name',
      'Gender',
      'Contact',
      'Group',
      'Membership',
      'Duration',
      'Status',
      'Balance',
      'By',
    ];
    const csvRows = [
      headers.join(','),
      ...filteredData.map((item) =>
        [
          item.id,
          item.name,
          item.gender,
          item.contact,
          item.group,
          item.membership,
          item.duration,
          item.status,
          item.balance,
          item.by,
        ].join(',')
      ),
    ];
    const csvContent = 'data:text/csv;charset=utf-8,' + csvRows.join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.href = encodedUri;
    link.download = 'FreezeInfo.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Open modal for adding or editing
  const handleAdd = () => {
    setEditingRecord(null);
    setFormData({
      name: '',
      gender: 'Male',
      contact: '',
      group: '',
      membership: '',
      duration: '',
      status: 'ACTIVE',
      balance: '',
      by: '',
    });
    setIsModalOpen(true);
  };

  const handleEdit = (record) => {
    setEditingRecord(record);
    setFormData({ ...record });
    setIsModalOpen(true);
  };

  // Save record
  const handleSave = () => {
    if (!formData.name || !formData.contact) {
      alert('Please fill all required fields');
      return;
    }

    if (editingRecord) {
      // Edit existing record
      setFreezeData((prev) =>
        prev.map((item) =>
          item.id === editingRecord.id ? { ...editingRecord, ...formData } : item
        )
      );
    } else {
      // Add new record
      const newId = `#${freezeData.length + 1}`;
      setFreezeData((prev) => [...prev, { id: newId, ...formData }]);
    }

    setIsModalOpen(false);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Snowflake className="w-6 h-6 text-gray-700" />
        <h1 className="text-2xl font-semibold text-gray-800">Freeze Info</h1>
      </div>

      {/* Controls Bar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex items-center justify-between gap-4">
          {/* Left side - Filter and Search */}
          <div className="flex items-center gap-4 flex-1">
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <Filter className="w-4 h-4 text-gray-600" />
            </button>

            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by id, name or contact..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Right side - Action buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              ADD
            </button>

            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium">
              <MessageSquare className="w-4 h-4" />
              MESSAGES
            </button>

            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              EXPORT 
            </button>
          </div>
        </div>
      </div>

      {/* Freeze Info Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="w-12 px-4 py-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  ID
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Contact
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Group
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Membership
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Duration
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Balance
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  By
                </th>
                <th className="w-12 px-4 py-3"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">{item.id}</td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">
                    {item.name}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">{item.contact}</td>
                  <td className="px-4 py-4 text-sm text-gray-900">{item.group}</td>
                  <td className="px-4 py-4 text-sm text-gray-900">
                    {item.membership}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">{item.duration}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        item.status === 'ACTIVE'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">{item.balance}</td>
                  <td className="px-4 py-4 text-sm text-gray-900">{item.by}</td>
                  <td className="px-4 py-4">
                    <button
                      onClick={() => handleEdit(item)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Edit className="w-4 h-4 text-gray-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredData.length === 0 && (
          <div className="px-4 py-8 text-center text-gray-500">
            <Snowflake className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p className="text-lg font-medium">No freeze information found</p>
          </div>
        )}
      </div>

      {/* Footer Info */}
      {filteredData.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredData.length} of {freezeData.length} freeze records
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-semibold mb-4">
              {editingRecord ? 'Edit Freeze Record' : 'Add New Freeze Record'}
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border p-2 rounded text-sm"
              />
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="border p-2 rounded text-sm"
              >
                <option>Male</option>
                <option>Female</option>
              </select>
              <input
                type="text"
                placeholder="Contact"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="border p-2 rounded text-sm"
              />
              <input
                type="text"
                placeholder="Group"
                value={formData.group}
                onChange={(e) => setFormData({ ...formData, group: e.target.value })}
                className="border p-2 rounded text-sm"
              />
              <input
                type="text"
                placeholder="Membership"
                value={formData.membership}
                onChange={(e) =>
                  setFormData({ ...formData, membership: e.target.value })
                }
                className="border p-2 rounded text-sm"
              />
              <input
                type="text"
                placeholder="Duration"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="border p-2 rounded text-sm"
              />
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="border p-2 rounded text-sm"
              >
                <option>ACTIVE</option>
                <option>INACTIVE</option>
              </select>
              <input
                type="text"
                placeholder="Balance"
                value={formData.balance}
                onChange={(e) => setFormData({ ...formData, balance: e.target.value })}
                className="border p-2 rounded text-sm"
              />
              <input
                type="text"
                placeholder="By"
                value={formData.by}
                onChange={(e) => setFormData({ ...formData, by: e.target.value })}
                className="border p-2 rounded text-sm col-span-2"
              />
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FreezeInfo;

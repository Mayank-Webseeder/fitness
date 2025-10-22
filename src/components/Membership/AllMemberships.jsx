import React, { useState } from 'react';
import {
  Users,
  Search,
  MessageSquare,
  Download,
  Filter,
  Edit,
  Plus,
  X,
} from 'lucide-react';

const AllMemberships = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [members, setMembers] = useState([
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

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingMember, setEditingMember] = useState(null);

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.contact.includes(searchTerm) ||
      member.id.includes(searchTerm)
  );

  // ✅ CSV Export
  const handleExportCSV = () => {
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
    const rows = filteredMembers.map((member) => [
      member.id,
      member.name,
      member.gender,
      member.contact,
      member.group,
      member.membership,
      member.duration,
      member.status,
      member.balance,
      member.by,
    ]);

    let csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers, ...rows].map((e) => e.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.href = encodedUri;
    link.download = 'memberships.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ✅ Add New Member
  const [newMember, setNewMember] = useState({
    id: '',
    name: '',
    gender: '',
    contact: '',
    group: '',
    membership: '',
    duration: '',
    status: 'ACTIVE',
    balance: '',
    by: 'Admin',
  });

  const handleAddMember = () => {
    if (!newMember.name || !newMember.contact) {
      alert('Please fill in required fields');
      return;
    }
    const id = `#${members.length + 1}`;
    const addedMember = { ...newMember, id };
    setMembers([...members, addedMember]);
    setShowAddModal(false);
    setNewMember({
      id: '',
      name: '',
      gender: '',
      contact: '',
      group: '',
      membership: '',
      duration: '',
      status: 'ACTIVE',
      balance: '',
      by: 'Admin',
    });
  };

  // ✅ Edit Member
  const handleEdit = (member) => {
    setEditingMember(member);
    setShowEditModal(true);
  };

  const handleUpdateMember = () => {
    setMembers((prev) =>
      prev.map((m) => (m.id === editingMember.id ? editingMember : m))
    );
    setShowEditModal(false);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Users className="w-6 h-6 text-gray-700" />
        <h1 className="text-2xl font-semibold text-gray-800">All Memberships</h1>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6 flex justify-between items-center">
        <div className="flex items-center gap-3 flex-1">
          <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Filter className="w-4 h-4" />
          </button>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by Id, name or contact..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            <Plus className="w-4 h-4" /> ADD MEMBER
          </button>
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Download className="w-4 h-4" /> EXPORT
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="w-12 px-4 py-3"></th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">ID</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Contact</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Membership</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
              <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredMembers.map((member) => (
              <tr key={member.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 text-sm text-gray-900">{member.id}</td>
                <td className="px-4 py-4 text-sm font-medium text-gray-900">{member.name}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{member.contact}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{member.membership}</td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      member.status === 'ACTIVE'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {member.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-center">
                  <button
                    onClick={() => handleEdit(member)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Edit className="w-4 h-4 text-blue-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-semibold mb-4">Add New Member</h2>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                value={newMember.name}
                onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <input
                type="text"
                placeholder="Contact"
                value={newMember.contact}
                onChange={(e) => setNewMember({ ...newMember, contact: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <input
                type="text"
                placeholder="Membership Type"
                value={newMember.membership}
                onChange={(e) =>
                  setNewMember({ ...newMember, membership: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <button
                onClick={handleAddMember}
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
              >
                Add Member
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && editingMember && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button
              onClick={() => setShowEditModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-semibold mb-4">Edit Member</h2>

            <div className="space-y-3">
              <input
                type="text"
                value={editingMember.name}
                onChange={(e) =>
                  setEditingMember({ ...editingMember, name: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <input
                type="text"
                value={editingMember.contact}
                onChange={(e) =>
                  setEditingMember({ ...editingMember, contact: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <input
                type="text"
                value={editingMember.membership}
                onChange={(e) =>
                  setEditingMember({ ...editingMember, membership: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <button
                onClick={handleUpdateMember}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllMemberships;

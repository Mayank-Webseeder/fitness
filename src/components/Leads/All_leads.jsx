import React from "react";
import { Search, Plus, Trash2, Download, Mail } from "lucide-react";

const AllLeads = () => {
  const leads = [
    {
      id: "#1",
      name: "Harsh",
      gender: "male",
      contact: "91-1234567890",
      dob: "12-12-2000",
      status: "Ongoing",
      category: "Diet maintain",
      reminder: "09-July-2025",
      date: "Ongoing",
      receivedBy: "Ongoing",
      assignedBy: "Ongoing",
    },
  ];

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">All Leads</h2>
        <div className="flex space-x-2">
          <button className="flex items-center gap-1 border px-3 py-1 rounded hover:bg-gray-100">
            <Mail size={16} /> Messages
          </button>
          <button className="flex items-center gap-1 border px-3 py-1 rounded hover:bg-gray-100">
            <Download size={16} /> Export
          </button>
          <button className="flex items-center gap-1 border px-3 py-1 rounded hover:bg-gray-100">
            <Trash2 size={16} /> Delete
          </button>
          <button className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
            <Plus size={16} /> Add
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative w-full mb-3">
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search by id, name or contact"
          className="w-full border rounded pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Contact</th>
              <th className="p-2 border">DOB</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Reminder</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Received By</th>
              <th className="p-2 border">Assigned By</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={index} className="text-center hover:bg-gray-50">
                <td className="p-2 border">{lead.id}</td>
                <td className="p-2 border">
                  {lead.name} <span className="text-gray-500 text-xs">({lead.gender})</span>
                </td>
                <td className="p-2 border">{lead.contact}</td>
                <td className="p-2 border">{lead.dob}</td>
                <td className="p-2 border">{lead.status}</td>
                <td className="p-2 border">{lead.category}</td>
                <td className="p-2 border">{lead.reminder}</td>
                <td className="p-2 border">{lead.date}</td>
                <td className="p-2 border">{lead.receivedBy}</td>
                <td className="p-2 border">{lead.assignedBy}</td>
                <td className="p-2 border">
                  <button className="text-gray-500 hover:text-gray-700">⋮</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllLeads;

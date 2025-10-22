import React, { useState } from "react";
import { Search, Plus, Trash2, Download, Users, Edit2, Trash } from "lucide-react";

const initialLeads = [
  {
    id: 1,
    leadId: "#1",
    name: "Harsh",
    gender: "male",
    contact: "91-1234567890",
    dob: "2000-12-12",
    status: "Ongoing",
    category: "Diet maintain",
    reminder: "2025-07-09",
    date: "2025-07-01",
    receivedBy: "A",
    assignedBy: "B",
  },
];

const AllLeads = () => {
  const [leads, setLeads] = useState(initialLeads);
  const [query, setQuery] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [form, setForm] = useState({
    leadId: "",
    name: "",
    gender: "",
    contact: "",
    dob: "",
    status: "",
    category: "",
    reminder: "",
    date: "",
    receivedBy: "",
    assignedBy: "",
  });
  const [editId, setEditId] = useState(null);

  // Selection handlers
  const toggleSelect = (id) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };
  const selectAll = (checked) => {
    setSelectedIds(checked ? leads.map((l) => l.id) : []);
  };

  // Add handlers
  const openAdd = () => {
    setForm({
      leadId: `#${leads.length + 1}`,
      name: "",
      gender: "",
      contact: "",
      dob: "",
      status: "",
      category: "",
      reminder: "",
      date: "",
      receivedBy: "",
      assignedBy: "",
    });
    setShowAddModal(true);
  };
  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };
  const handleAddSubmit = (e) => {
    e.preventDefault();
    const next = { id: Date.now(), ...form };
    setLeads((p) => [next, ...p]);
    setShowAddModal(false);
    setSelectedIds([]);
  };

  // Edit handlers
  const openEdit = (lead) => {
    setEditId(lead.id);
    setForm({
      leadId: lead.leadId,
      name: lead.name,
      gender: lead.gender,
      contact: lead.contact,
      dob: lead.dob,
      status: lead.status,
      category: lead.category,
      reminder: lead.reminder,
      date: lead.date,
      receivedBy: lead.receivedBy,
      assignedBy: lead.assignedBy,
    });
    setShowEditModal(true);
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    setLeads((p) => p.map((l) => (l.id === editId ? { ...l, ...form } : l)));
    setShowEditModal(false);
    setEditId(null);
    setSelectedIds([]);
  };

  // Delete handlers
  const handleDeleteSelected = () => {
    if (selectedIds.length === 0) {
      alert("Please select at least one lead to delete.");
      return;
    }
    if (!window.confirm("Delete selected lead(s)?")) return;
    setLeads((p) => p.filter((l) => !selectedIds.includes(l.id)));
    setSelectedIds([]);
  };
  const handleDeleteOne = (id) => {
    if (!window.confirm("Delete this lead?")) return;
    setLeads((p) => p.filter((l) => l.id !== id));
    setSelectedIds((p) => p.filter((x) => x !== id));
  };

  // Filtered results
  const filtered = leads.filter(
    (l) =>
      l.leadId.toLowerCase().includes(query.toLowerCase()) ||
      l.name.toLowerCase().includes(query.toLowerCase()) ||
      l.contact.includes(query)
  );

  // Export CSV handler (exports currently filtered leads)
  const handleExport = () => {
    if (!filtered || filtered.length === 0) {
      alert("No leads to export.");
      return;
    }

    const columns = [
      "leadId",
      "name",
      "gender",
      "contact",
      "dob",
      "status",
      "category",
      "reminder",
      "date",
      "receivedBy",
      "assignedBy",
    ];

    // CSV header
    const header = columns.join(",");

    // Escape function for CSV values
    const escapeCsv = (value) => {
      if (value === null || value === undefined) return "";
      const str = String(value);
      // double quotes inside values must be escaped by doubling them
      const escaped = str.replace(/"/g, '""');
      // wrap in quotes if contains comma, newline or quote
      if (/[",\n]/.test(escaped)) return `"${escaped}"`;
      return escaped;
    };

    const rows = filtered.map((row) =>
      columns.map((col) => escapeCsv(row[col])).join(",")
    );

    const csvContent = [header, ...rows].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const now = new Date();
    const stamp = now.toISOString().slice(0,19).replace(/[:T]/g, "-");
    a.href = url;
    a.download = `leads_export_${stamp}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="">
      {/* Header */}
      <header className="bg-white border border-gray-200  px-6 py-3 flex items-center shadow-sm mb-4">
        <h1 className="font-bold text-gray-800 flex items-center gap-2">
          <Users />
          All Leads
        </h1>
      </header>

      {/* Action Bar */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-3 mb-4 flex items-center justify-between">
        {/* Search */}
        <div className="relative flex items-center w-1/3 ">
          <Search className="absolute left-3 text-gray-400 w-4 h-4" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search by id, name or contact..."
            className="w-full border border-gray-200 rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleDeleteSelected}
            className="flex items-center gap-1 border border-gray-300 text-gray-600 px-3 py-1.5 rounded-md hover:bg-gray-100 text-sm"
          >
            <Trash2 size={16} /> Delete
          </button>
          <button
            onClick={handleExport}
            className="flex items-center gap-1 border border-gray-300 text-gray-600 px-3 py-1.5 rounded-md hover:bg-gray-100 text-sm"
          >
            <Download size={16} /> Export
          </button>
          <button
            onClick={openAdd}
            className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 text-sm"
          >
            <Plus size={16} /> Add
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-2">
                <input
                  type="checkbox"
                  checked={selectedIds.length === leads.length && leads.length > 0}
                  onChange={(e) => selectAll(e.target.checked)}
                  className="rounded border-gray-300"
                />
              </th>
              <th className="text-left px-4 py-2 font-semibold">ID</th>
              <th className="text-left px-4 py-2 font-semibold">Name</th>
              <th className="text-left px-4 py-2 font-semibold">Contact</th>
              <th className="text-left px-4 py-2 font-semibold">DOB</th>
              <th className="text-left px-4 py-2 font-semibold">Status</th>
              <th className="text-left px-4 py-2 font-semibold">Category</th>
              <th className="text-left px-4 py-2 font-semibold">Reminder</th>
              <th className="text-left px-4 py-2 font-semibold">Date</th>
              <th className="text-left px-4 py-2 font-semibold">Received By</th>
              <th className="text-left px-4 py-2 font-semibold">Assigned By</th>
              <th className="text-left px-4 py-2 font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((lead) => (
              <tr key={lead.id} className="border-t border-gray-100 hover:bg-gray-50 transition">
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(lead.id)}
                    onChange={() => toggleSelect(lead.id)}
                    className="rounded border-gray-300"
                  />
                </td>
                <td className="px-4 py-2">{lead.leadId}</td>
                <td className="px-4 py-2">
                  {lead.name} <span className="text-gray-500 text-xs">({lead.gender})</span>
                </td>
                <td className="px-4 py-2">{lead.contact}</td>
                <td className="px-4 py-2">{lead.dob}</td>
                <td className="px-4 py-2">{lead.status}</td>
                <td className="px-4 py-2">{lead.category}</td>
                <td className="px-4 py-2">{lead.reminder}</td>
                <td className="px-4 py-2">{lead.date}</td>
                <td className="px-4 py-2">{lead.receivedBy}</td>
                <td className="px-4 py-2">{lead.assignedBy}</td>
                <td className="px-4 py-2 text-gray-500">
                  <div className="flex items-center gap-2">
                    <button
                      title="Edit"
                      onClick={() => openEdit(lead)}
                      className="p-1 text-gray-400 hover:text-blue-600"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      title="Delete"
                      onClick={() => handleDeleteOne(lead.id)}
                      className="p-1 text-gray-400 hover:text-red-600"
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={12} className="text-center py-8 text-gray-500">
                  No leads found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
          style={{ backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
        >
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-700" onClick={() => setShowAddModal(false)}>
              ✕
            </button>
            <h2 className="text-lg font-bold mb-4">Add Leads</h2>
            <form onSubmit={handleAddSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input name="leadId" value={form.leadId} readOnly className="border px-3 py-2 rounded-md bg-gray-50 col-span-2" />
                <input name="name" placeholder="Name" value={form.name} onChange={handleAddChange} className="border px-3 py-2 rounded-md" required />
                <input name="gender" placeholder="Gender" value={form.gender} onChange={handleAddChange} className="border px-3 py-2 rounded-md" />
                <input name="contact" placeholder="Contact" value={form.contact} onChange={handleAddChange} className="border px-3 py-2 rounded-md" />
                <input name="dob" type="date" value={form.dob} onChange={handleAddChange} className="border px-3 py-2 rounded-md" />
                <input name="status" placeholder="Status" value={form.status} onChange={handleAddChange} className="border px-3 py-2 rounded-md" />
                <input name="category" placeholder="Category" value={form.category} onChange={handleAddChange} className="border px-3 py-2 rounded-md" />
                <input name="reminder" type="date" value={form.reminder} onChange={handleAddChange} className="border px-3 py-2 rounded-md" />
                <input name="date" type="date" value={form.date} onChange={handleAddChange} className="border px-3 py-2 rounded-md" />
                <input name="receivedBy" placeholder="Received By" value={form.receivedBy} onChange={handleAddChange} className="border px-3 py-2 rounded-md" />
                <input name="assignedBy" placeholder="Assigned By" value={form.assignedBy} onChange={handleAddChange} className="border px-3 py-2 rounded-md" />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2 rounded-md bg-gray-100">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded-md bg-blue-600 text-white">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
          style={{ backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
        >
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-700" onClick={() => setShowEditModal(false)}>
              ✕
            </button>
            <h2 className="text-lg font-bold mb-4">Edit Leads</h2>
            <form onSubmit={handleEditSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input name="leadId" value={form.leadId} readOnly className="border px-3 py-2 rounded-md bg-gray-50 col-span-2" />
                <input name="name" placeholder="Name" value={form.name} onChange={handleAddChange} className="border px-3 py-2 rounded-md" required />
                <input name="gender" placeholder="Gender" value={form.gender} onChange={handleAddChange} className="border px-3 py-2 rounded-md" />
                <input name="contact" placeholder="Contact" value={form.contact} onChange={handleAddChange} className="border px-3 py-2 rounded-md" />
                <input name="dob" type="date" value={form.dob} onChange={handleAddChange} className="border px-3 py-2 rounded-md" />
                <input name="status" placeholder="Status" value={form.status} onChange={handleAddChange} className="border px-3 py-2 rounded-md" />
                <input name="category" placeholder="Category" value={form.category} onChange={handleAddChange} className="border px-3 py-2 rounded-md" />
                <input name="reminder" type="date" value={form.reminder} onChange={handleAddChange} className="border px-3 py-2 rounded-md" />
                <input name="date" type="date" value={form.date} onChange={handleAddChange} className="border px-3 py-2 rounded-md" />
                <input name="receivedBy" placeholder="Received By" value={form.receivedBy} onChange={handleAddChange} className="border px-3 py-2 rounded-md" />
                <input name="assignedBy" placeholder="Assigned By" value={form.assignedBy} onChange={handleAddChange} className="border px-3 py-2 rounded-md" />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowEditModal(false)} className="px-4 py-2 rounded-md bg-gray-100">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded-md bg-blue-600 text-white">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllLeads;
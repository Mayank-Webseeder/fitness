import React, { useState } from "react";
import { Trash2, ListRestart, Search, Download, Plus, X } from "lucide-react";

const Leads_followupshistory = () => {
  const [records, setRecords] = useState([
    {
      id: 1,
      name: "Rahul",
      gender: "male",
      contact: "91-1234567890",
      date: "19-07-2025",
      by: "Nikhil Mehta",
      type: "Call",
      comment: "Coming to visit on 20-07-2025",
    },
  ]);

  const [selected, setSelected] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newRecord, setNewRecord] = useState({
    name: "",
    gender: "",
    contact: "",
    date: "",
    by: "",
    type: "",
    comment: "",
  });

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleDelete = () => {
    if (selected.length === 0) {
      alert("Please select at least one record to delete.");
      return;
    }
    if (!window.confirm("Are you sure you want to delete selected record(s)?")) return;
    setRecords((prev) => prev.filter((r) => !selected.includes(r.id)));
    setSelected([]);
  };

  const openAdd = () => {
    setNewRecord({
      name: "",
      gender: "",
      contact: "",
      date: "",
      by: "",
      type: "",
      comment: "",
    });
    setShowAddModal(true);
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewRecord((p) => ({ ...p, [name]: value }));
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    // simple validation
    if (!newRecord.name || !newRecord.contact) {
      alert("Please provide at least name and contact.");
      return;
    }
    const nextId = records.length > 0 ? Math.max(...records.map((r) => r.id)) + 1 : 1;
    setRecords((prev) => [
      ...prev,
      {
        id: nextId,
        ...newRecord,
      },
    ]);
    setShowAddModal(false);
    setSelected([]);
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-white border border-gray-200 px-6 py-3 flex items-center shadow-sm mb-4">
        <h1 className="font-semibold text-gray-800 flex items-center gap-2 ">
          <ListRestart />
          Follow Ups History
        </h1>
      </header>

      {/* Controls */}
      <div className="flex items-center justify-between mb-4">
        {/* Search bar */}
        <div className="relative w-72">
          <Search className="absolute left-2 top-2.5 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search by id, name or contact..."
            className="w-full border border-gray-200 rounded-md pl-8 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
            // optional: you can wire up search functionality later
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleDelete}
            className="flex items-center gap-1 px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-red-50 hover:text-red-600 text-sm transition"
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </button>

          <button
            className="flex items-center gap-1 px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 text-sm transition"
            onClick={() => {
              // simple export of all records to CSV for convenience
              if (records.length === 0) {
                alert("No records to export.");
                return;
              }
              const columns = ["id", "name", "gender", "contact", "date", "by", "type", "comment"];
              const escapeCsv = (v) => {
                if (v === null || v === undefined) return "";
                const s = String(v).replace(/"/g, '""');
                return /[",\n]/.test(s) ? `"${s}"` : s;
              };
              const rows = records.map((r) => columns.map((c) => escapeCsv(r[c])).join(","));
              const csv = [columns.join(","), ...rows].join("\r\n");
              const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = `followups_${new Date().toISOString().slice(0,10)}.csv`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
            }}
          >
            <Download className="w-4 h-4" />
            Export
          </button>

          <button
            onClick={openAdd}
            className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm transition"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-700 font-medium border-b">
            <tr>
              <th className="p-3">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setSelected(e.target.checked ? records.map((r) => r.id) : [])
                  }
                  checked={selected.length === records.length && records.length > 0}
                />
              </th>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Date</th>
              <th className="p-3">By</th>
              <th className="p-3">Type</th>
              <th className="p-3">Comment</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr
                key={record.id}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="p-3 text-center">
                  <input
                    type="checkbox"
                    checked={selected.includes(record.id)}
                    onChange={() => handleSelect(record.id)}
                  />
                </td>
                <td className="p-3">#{record.id}</td>
                <td className="p-3">
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-800">{record.name}</span>
                    <span className="text-xs text-gray-500">({record.gender})</span>
                  </div>
                </td>
                <td className="p-3 text-gray-700">{record.contact}</td>
                <td className="p-3">{record.date}</td>
                <td className="p-3">{record.by}</td>
                <td className="p-3">{record.type}</td>
                <td className="p-3">{record.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-40"
          style={{ backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
        >
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
              onClick={() => setShowAddModal(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-bold mb-4">Add Follow Up</h2>

            <form onSubmit={handleAddSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  name="name"
                  placeholder="Name"
                  value={newRecord.name}
                  onChange={handleAddChange}
                  className="border px-3 py-2 rounded-md col-span-2"
                  required
                />
                <input
                  name="gender"
                  placeholder="Gender"
                  value={newRecord.gender}
                  onChange={handleAddChange}
                  className="border px-3 py-2 rounded-md"
                />
                <input
                  name="contact"
                  placeholder="Contact"
                  value={newRecord.contact}
                  onChange={handleAddChange}
                  className="border px-3 py-2 rounded-md"
                  required
                />
                <input
                  name="date"
                  type="date"
                  value={newRecord.date}
                  onChange={handleAddChange}
                  className="border px-3 py-2 rounded-md"
                />
                <input
                  name="by"
                  placeholder="By"
                  value={newRecord.by}
                  onChange={handleAddChange}
                  className="border px-3 py-2 rounded-md"
                />
                <input
                  name="type"
                  placeholder="Type (Call/Visit)"
                  value={newRecord.type}
                  onChange={handleAddChange}
                  className="border px-3 py-2 rounded-md"
                />
                <textarea
                  name="comment"
                  placeholder="Comment"
                  value={newRecord.comment}
                  onChange={handleAddChange}
                  className="border px-3 py-2 rounded-md col-span-2"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-md bg-gray-100"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 rounded-md bg-blue-600 text-white">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leads_followupshistory;

import React, { useState, useEffect } from "react";
import { AlarmClock, Plus, Trash2, FileDown, UserPlus, X, Search, PencilLine } from "lucide-react";

const General_reminders = () => {
  const [reminders, setReminders] = useState([
    { remark: "Check new leads", date: "28-12-2000", assigned: "Nikhil" },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    remark: "",
    date: "",
    assigned: "",
  });

  // Filter reminders based on search query
  const filteredReminders = reminders.filter(
    (reminder) =>
      reminder.remark.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reminder.assigned.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reminder.date.includes(searchQuery)
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.remark.trim()) return;

    if (editingIndex !== null) {
      // Edit existing reminder
      const updatedReminders = reminders.map((reminder, index) =>
        index === editingIndex ? { ...formData } : reminder
      );
      setReminders(updatedReminders);
    } else {
      // Add new reminder
      setReminders([...reminders, formData]);
    }

    // Reset form and close modal
    setFormData({ remark: "", date: "", assigned: "" });
    setShowModal(false);
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    setFormData(reminders[index]);
    setEditingIndex(index);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this reminder?")) {
      const updated = reminders.filter((_, i) => i !== index);
      setReminders(updated);
    }
  };

  const handleBulkDelete = () => {
    if (window.confirm("Are you sure you want to delete all selected reminders?")) {
      const updatedReminders = reminders.filter((_, index) => !selectedItems.includes(index));
      setReminders(updatedReminders);
      setSelectedItems([]);
    }
  };

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(reminders.map((_, index) => index));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (index) => {
    setSelectedItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const handleExport = () => {
    const csvContent = [
      ["Remark", "Date", "Assigned To"],
      ...reminders.map((item) => [
        item.remark,
        item.date,
        item.assigned,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `reminders_${new Date().toLocaleDateString()}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <AlarmClock /> General Reminders
        </h1>
      </header>

      <div className="p-4">
        {/* Top Action Bar */}
        <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search reminders..."
              className="w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleExport}
              className="flex items-center gap-1 border px-4 py-2 rounded-md hover:bg-gray-100 text-gray-800"
            >
               Export
            </button>
            {selectedItems.length > 0 && (
              <button
                onClick={handleBulkDelete}
                className="flex items-center gap-1 bg-red-100 text-red-600 hover:bg-red-200 px-4 py-2 rounded-md border border-red-300 font-medium"
              >
                <Trash2 size={16} /> Delete Selected
              </button>
            )}
            <button
              onClick={() => {
                setFormData({ remark: "", date: "", assigned: "" });
                setEditingIndex(null);
                setShowModal(true);
              }}
              className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-sm font-medium"
            >
              <Plus size={16} /> Add
            </button>
          </div>
        </div>

        {/* Improved Table Design */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="p-3 w-10 text-gray-700 font-semibold">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-blue-600"
                    checked={selectedItems.length === reminders.length}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="p-3 text-gray-700 font-semibold">Remark</th>
                <th className="p-3 text-gray-700 font-semibold">Reminder</th>
                <th className="p-3 text-gray-700 font-semibold">Assigned To</th>
                <th className="p-3 text-gray-700 font-semibold text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredReminders.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-colors border-b last:border-b-0"
                >
                  <td className="p-3 align-middle">
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-blue-600"
                      checked={selectedItems.includes(index)}
                      onChange={() => handleSelectItem(index)}
                    />
                  </td>
                  <td className="p-3 text-gray-800">{item.remark}</td>
                  <td className="p-3 text-gray-600">{item.date}</td>
                  <td className="p-3 text-gray-700">{item.assigned}</td>
                  <td className="p-3 flex justify-center gap-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="flex items-center gap-1 border border-gray-300 text-gray-700 hover:bg-blue-50 px-3 py-1 rounded-md text-sm transition"
                    >
                      <PencilLine size={16} /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="flex items-center gap-1 border border-gray-300 text-gray-700 hover:bg-red-50 px-3 py-1 rounded-md text-sm transition"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add/Edit Modal */}
        {showModal && (
          <div
          className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-40"
          style={{
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        >
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  {editingIndex !== null ? "Edit Reminder" : "Add New Reminder"}
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Remark
                  </label>
                  <input
                    type="text"
                    name="remark"
                    value={formData.remark}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Assigned To
                  </label>
                  <input
                    type="text"
                    name="assigned"
                    value={formData.assigned}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 border rounded-md hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    {editingIndex !== null ? "Save Changes" : "Add Reminder"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default General_reminders;

import React, { useState } from "react";
import { FolderDown, Plus, Trash2, Search, PencilLine, X } from "lucide-react";

const General_templates = () => {
  // State for templates
  const [templates, setTemplates] = useState([
    {
      id: 1,
      title: "Save 10% Off",
      message: "Get Flat 10% Off On 12 month fitness training",
    },
  ]);

  // State for search, modal, and form
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    message: "",
  });

  // Filter templates based on search
  const filteredTemplates = templates.filter(
    (template) =>
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission (add/edit)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.message.trim()) return;

    if (editingId !== null) {
      // Edit existing template
      setTemplates((prev) =>
        prev.map((template) =>
          template.id === editingId
            ? { ...template, ...formData }
            : template
        )
      );
    } else {
      // Add new template
      const newTemplate = {
        id: Math.max(0, ...templates.map((t) => t.id)) + 1,
        ...formData,
      };
      setTemplates((prev) => [...prev, newTemplate]);
    }

    // Reset form and close modal
    setFormData({ title: "", message: "" });
    setShowModal(false);
    setEditingId(null);
  };

  // Handle edit button click
  const handleEdit = (template) => {
    setFormData({
      title: template.title,
      message: template.message,
    });
    setEditingId(template.id);
    setShowModal(true);
  };

  // Handle delete (single or bulk)
  const handleDelete = () => {
    if (selectedItems.length === 0) return;
    
    if (window.confirm(`Are you sure you want to delete ${selectedItems.length} template(s)?`)) {
      setTemplates((prev) =>
        prev.filter((template) => !selectedItems.includes(template.id))
      );
      setSelectedItems([]);
    }
  };

  // Handle select all checkbox
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(templates.map((t) => t.id));
    } else {
      setSelectedItems([]);
    }
  };

  // Handle individual checkbox selection
  const handleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 flex items-center font-sans gap-2">
          <FolderDown />
          General Templates
        </h1>
      </header>

      {/* Body Section */}
      <div className="p-6">
        {/* Search + Actions */}
        <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
          {/* Search */}
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title or message..."
              className="w-full pl-10 pr-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            {selectedItems.length > 0 && (
              <button
                onClick={handleDelete}
                className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
              >
                <Trash2 size={16} /> Delete
              </button>
            )}
            <button
              onClick={() => {
                setFormData({ title: "", message: "" });
                setEditingId(null);
                setShowModal(true);
              }}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
            >
              <Plus size={16} /> Add
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="p-3 w-10 text-left">
                  <input
                    type="checkbox"
                    checked={selectedItems.length === templates.length}
                    onChange={handleSelectAll}
                    className="w-4 h-4 accent-blue-600"
                  />
                </th>
                <th className="p-3 text-left font-semibold text-gray-700">Title</th>
                <th className="p-3 text-left font-semibold text-gray-700">Message</th>
                <th className="p-3 w-20 text-left font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTemplates.map((template) => (
                <tr key={template.id} className="hover:bg-gray-50 border-b border-gray-100 transition">
                  <td className="p-3 align-middle">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(template.id)}
                      onChange={() => handleSelectItem(template.id)}
                      className="w-4 h-4 accent-blue-600"
                    />
                  </td>
                  <td className="p-3 text-gray-800">{template.title}</td>
                  <td className="p-3 text-gray-700">{template.message}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleEdit(template)}
                      className="text-gray-600 hover:text-blue-600 transition"
                      title="Edit template"
                    >
                      <PencilLine size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
                {editingId !== null ? "Edit Template" : "Add New Template"}
              </h2>
              <button
                onClick={() => {
                  setShowModal(false);
                  setEditingId(null);
                  setFormData({ title: "", message: "" });
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter template title"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter template message"
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingId(null);
                    setFormData({ title: "", message: "" });
                  }}
                  className="px-4 py-2 border rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  {editingId !== null ? "Save Changes" : "Add Template"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default General_templates;

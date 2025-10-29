import React, { useState } from "react";
import { FolderDown, Plus, Trash2, Search, PencilLine, X } from "lucide-react";

const Bulk_whatsapp = () => {
  // State for WhatsApp templates
  const [templates, setTemplates] = useState([
    {
      id: 1,
      template: "GNC Weight Gainer",
      mediaUrl: "https://nutrabay.com/product/gnc-weight-gainer-powder?",
    },
  ]);

  // State for search, modal, and form
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    template: "",
    mediaUrl: "",
  });

  // Filter templates based on search
  const filteredTemplates = templates.filter(
    (template) =>
      template.template.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.mediaUrl.toLowerCase().includes(searchQuery.toLowerCase())
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
    if (!formData.template.trim() || !formData.mediaUrl.trim()) return;

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
    setFormData({ template: "", mediaUrl: "" });
    setShowModal(false);
    setEditingId(null);
  };

  // Handle edit button click
  const handleEdit = (template) => {
    setFormData({
      template: template.template,
      mediaUrl: template.mediaUrl,
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
      <header className="bg-white border-b border-gray-200 mt-0 px-4 py-3 flex items-center shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 flex items-center font-sans gap-2">
          <FolderDown />
          Bulk WhatsApp
        </h1>
      </header>

      {/* Body Section */}
      <div className="p-6">
        {/* Search + Actions */}
        <div className="flex justify-between items-center mb-4">
          {/* Search bar */}
          <div className="relative w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search templates..."
              className="border border-gray-300 rounded-md pl-10 pr-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            {selectedItems.length > 0 && (
              <button
                onClick={handleDelete}
                className="flex items-center gap-2 border border-gray-300 bg-white px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                <Trash2 size={16} /> DELETE
              </button>
            )}
            <button
              onClick={() => {
                setFormData({ template: "", mediaUrl: "" });
                setEditingId(null);
                setShowModal(true);
              }}
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition"
            >
              <Plus size={16} /> ADD
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-lg shadow-sm border border-gray-200 bg-white">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs font-semibold border-b border-gray-300">
              <tr>
                <th className="p-3 text-left w-12 border-r border-gray-200">
                  <input
                    type="checkbox"
                    checked={selectedItems.length === templates.length}
                    onChange={handleSelectAll}
                    className="accent-blue-500"
                  />
                </th>
                <th className="p-3 text-left border-r border-gray-200">
                  Template
                </th>
                <th className="p-3 text-left">Media URL</th>
                <th className="p-3 text-left w-24">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTemplates.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition border-b border-gray-200">
                  <td className="p-3 border-r border-gray-200">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleSelectItem(item.id)}
                      className="accent-blue-500"
                    />
                  </td>
                  <td className="p-3 border-r border-gray-200">{item.template}</td>
                  <td className="p-3">
                    <a
                      href={item.mediaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {item.mediaUrl}
                    </a>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-gray-600 hover:text-blue-600 transition"
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
                  setFormData({ template: "", mediaUrl: "" });
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Template Name
                </label>
                <input
                  type="text"
                  name="template"
                  value={formData.template}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Media URL
                </label>
                <input
                  type="url"
                  name="mediaUrl"
                  value={formData.mediaUrl}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingId(null);
                    setFormData({ template: "", mediaUrl: "" });
                  }}
                  className="px-4 py-2 border rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
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

export default Bulk_whatsapp;

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const AddLeads = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "Female",
    contact: "",
    email: "",
    category: "",
    source: "",
    status: "",
    date: "",
    reminder: "",
    receivedBy: "ADMIN",
    assignedTo: "ADMIN",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Lead Added Successfully!");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">➕ Add Leads</h2>
        <div className="flex space-x-3">
          <button className="border px-4 py-2 rounded-lg bg-white shadow hover:bg-gray-100 transition">
            Clear
          </button>
          <button className="border px-4 py-2 rounded-lg bg-white shadow hover:bg-gray-100 transition">
            + Add
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white shadow hover:bg-blue-700 transition">
            + Add with Followup
          </button>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200"
      >
        <h3 className="text-lg font-semibold text-gray-700 mb-6">
          Basic Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Name*
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Gender
              </label>
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg shadow-sm bg-gray-100"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Contact*
              </label>
              <input
                type="text"
                name="contact"
                placeholder="+91-"
                value={formData.contact}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Category*
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="">Select Category</option>
                <option value="Diet">Diet</option>
                <option value="Fitness">Fitness</option>
                <option value="Wellness">Wellness</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Reminder
              </label>
              <input
                type="date"
                name="reminder"
                value={formData.reminder}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Source*
              </label>
              <select
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="">Source</option>
                <option value="Website">Website</option>
                <option value="Referral">Referral</option>
                <option value="Social Media">Social Media</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Status*
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="">Status</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Date*
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Received By*
              </label>
              <input
                type="text"
                name="receivedBy"
                value={formData.receivedBy}
                readOnly
                className="w-full border px-4 py-2 rounded-lg bg-gray-100 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Assigned To*
              </label>
              <input
                type="text"
                name="assignedTo"
                value={formData.assignedTo}
                readOnly
                className="w-full border px-4 py-2 rounded-lg bg-gray-100 shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end mt-8 space-x-4">
          <button
            type="button"
            className="flex items-center gap-2 border px-5 py-2 rounded-lg bg-white shadow hover:bg-gray-100 transition"
          >
            <X size={16} /> Cancel
          </button>
          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            <Plus size={16} /> Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLeads;

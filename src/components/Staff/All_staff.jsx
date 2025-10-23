import React, { useState } from "react";
import { Plus, Users, X } from "lucide-react";

export default function ManageStaff() {
  const [staff, setStaff] = useState([
    {
      id: "123",
      name: "Niki",
      contact: "91-1234567890",
      type: "Trainer",
      username: "911845",
      login: "-",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ]);

  // modal & form state
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [form, setForm] = useState({
    id: "",
    name: "",
    contact: "",
    type: "",
    username: "",
    login: "",
    image: "",
  });

  // 🟢 Open Add Modal
  const openAdd = () => {
    setForm({
      id: "",
      name: "",
      contact: "",
      type: "",
      username: "",
      login: "",
      image: "",
    });
    setShowAddModal(true);
  };

  // 🟢 Open Edit Modal
  const openEdit = (member) => {
    setForm(member);
    setShowEditModal(true);
  };

  // 🟢 Delete a staff
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this staff?")) {
      setStaff((prev) => prev.filter((s) => s.id !== id));
    }
  };

  // 🟢 Handle Message (dummy placeholder)
  const handleMessage = (member) => {
    alert(`Message sent to ${member.name}`);
  };

  // 🟢 Handle text input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  // 🟢 Handle image upload
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setForm((p) => ({ ...p, image: ev.target.result }));
    };
    reader.readAsDataURL(file);
  };

  // 🟢 Add submit
  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.contact) {
      alert("Please provide name and contact.");
      return;
    }
    const newStaff = {
      ...form,
      id: Date.now().toString(),
      image: form.image || "https://via.placeholder.com/80",
    };
    setStaff((prev) => [newStaff, ...prev]);
    setShowAddModal(false);
  };

  // 🟢 Edit submit
  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.contact) {
      alert("Please provide name and contact.");
      return;
    }
    setStaff((prev) => prev.map((m) => (m.id === form.id ? { ...form } : m)));
    setShowEditModal(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white border border-gray-200 px-6 py-3 flex items-center shadow-sm mb-4">
        <h1 className="font-bold text-gray-800 flex items-center gap-2">
          <Users />
          All Staffs
        </h1>
      </header>

      <div className="bg-white shadow-md rounded-xl p-4">
        <div className="flex justify-between items-center mb-4">
          <div></div>
          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                staff.length > 0
                  ? handleDelete(staff[0].id)
                  : alert("No staff to delete")
              }
              className="px-4 py-2 text-sm text-black border border-black rounded-lg hover:bg-red-100 transition"
            >
              Delete
            </button>
            <button
              onClick={openAdd}
              className="px-4 py-2 text-sm text-black border border-black rounded-lg hover:bg-green-100 transition"
            >
              + Add
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by id, name or contact"
            className="w-full border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Staff Card List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staff.map((member) => (
            <div
              key={member.id}
              className="bg-white border rounded-xl shadow hover:shadow-md transition p-5"
            >
              <div className="flex items-center gap-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-16 h-16 rounded-full border object-cover"
                />
                <div>
                  <p className="text-sm text-gray-500">ID: {member.id}</p>
                  <h3 className="font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.contact}</p>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-700">
                <p>
                  <span className="font-semibold">Type:</span> {member.type}
                </p>
                <p>
                  <span className="font-semibold">Username:</span>{" "}
                  {member.username}
                </p>
                <p>
                  <span className="font-semibold">Login:</span> {member.login}
                </p>
              </div>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => handleMessage(member)}
                  className="flex-1 px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Message
                </button>
                <button
                  onClick={() => openEdit(member)}
                  className="flex-1 px-3 py-1 text-sm bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(member.id)}
                  className="flex-1 px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
          style={{
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        >
          <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
              onClick={() => setShowAddModal(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-bold mb-4">Add Staff</h2>
            <form onSubmit={handleAddSubmit} className="space-y-3">
              <input
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
                required
              />
              <input
                name="contact"
                placeholder="Contact"
                value={form.contact}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
                required
              />
              <input
                name="type"
                placeholder="Type"
                value={form.type}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
              />
              <input
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
              />
              <input
                name="login"
                placeholder="Last Login"
                value={form.login}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
              />

              <div>
                <label className="block text-sm text-gray-600 mb-1">Photo</label>
                <div className="flex items-center gap-3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="text-sm"
                  />
                  {form.image && (
                    <img
                      src={form.image}
                      alt="preview"
                      className="w-12 h-12 rounded-full object-cover border"
                    />
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-md bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-blue-600 text-white"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
          style={{
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        >
          <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
              onClick={() => setShowEditModal(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-bold mb-4">Edit Staff</h2>
            <form onSubmit={handleEditSubmit} className="space-y-3">
              <input
                name="id"
                placeholder="ID"
                value={form.id}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
                readOnly
              />
              <input
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
                required
              />
              <input
                name="contact"
                placeholder="Contact"
                value={form.contact}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
                required
              />
              <input
                name="type"
                placeholder="Type"
                value={form.type}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
              />
              <input
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
              />
              <input
                name="login"
                placeholder="Last Login"
                value={form.login}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
              />

              <div>
                <label className="block text-sm text-gray-600 mb-1">Photo</label>
                <div className="flex items-center gap-3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="text-sm"
                  />
                  {form.image && (
                    <img
                      src={form.image}
                      alt="preview"
                      className="w-12 h-12 rounded-full object-cover border"
                    />
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 rounded-md bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-blue-600 text-white"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

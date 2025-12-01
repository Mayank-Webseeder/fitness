import React, { useState } from "react";
import { Users, TrendingUp, Calendar, X, Edit2, Trash2 } from "lucide-react";

const initialMembersData = [
  {
    id: 1,
    name: "Samruddhi",
    gender: "Female",
    dob: "1990-12-05",
    contact: "91-1234567890",
    by: "Admin",
    group: "Evening",
    address: "123, Street Name, City",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Nikhil",
    gender: "Male",
    dob: "1990-12-05",
    contact: "91-1234567890",
    by: "Admin",
    group: "Evening",
    address: "456, Street Name, City",
    status: "Inactive",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const All_members = () => {
  const [membersData, setMembersData] = useState(initialMembersData);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editForm, setEditForm] = useState(null);

  // Select all and individual selection state
  const [selectedRows, setSelectedRows] = useState([]);
  const allSelected = membersData.length > 0 && selectedRows.length === membersData.length;

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(membersData.map((m) => m.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    if (selectedRows.length === 0) return;
    if (window.confirm("Are you sure you want to delete the selected members?")) {
      setMembersData((prev) => prev.filter((m) => !selectedRows.includes(m.id)));
      setSelectedRows([]);
    }
  };

  const stats = [
    {
      title: "Total Members",
      value: membersData.length,
      icon: (
        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500">
          <Users className="w-6 h-6 text-white" />
        </div>
      ),
    },
    {
      title: "Active Members",
      value: membersData.filter((m) => m.status === "Active").length,
      icon: (
        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-500">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
      ),
    },
    {
      title: "Expiring Soon",
      value: 2,
      icon: (
        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-amber-500">
          <Calendar className="w-6 h-6 text-white" />
        </div>
      ),
    },
    {
      title: "Expired",
      value: 7,
      icon: (
        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-fuchsia-500">
          <Calendar className="w-6 h-6 text-white" />
        </div>
      ),
    },
  ];

  // Add Member Form State
  const [addForm, setAddForm] = useState({
    name: "",
    contact: "",
    address: "",
    status: "Active",
    dob: "",
    gender: "Male",
    group: "",
    by: "",
    avatar: "",
  });

  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setAddForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    setMembersData((prev) => [
      ...prev,
      {
        ...addForm,
        id: prev.length ? prev[prev.length - 1].id + 1 : 1,
        avatar:
          addForm.avatar ||
          (addForm.gender === "Female"
            ? "https://randomuser.me/api/portraits/women/3.jpg"
            : "https://randomuser.me/api/portraits/men/3.jpg"),
      },
    ]);
    setShowAddPopup(false);
    setAddForm({
      name: "",
      contact: "",
      address: "",
      status: "Active",
      dob: "",
      gender: "Male",
      group: "",
      by: "",
      avatar: "",
    });
  };

  // Edit logic
  const openEditPopup = (member) => {
    setEditForm({ ...member });
    setShowEditPopup(true);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditMember = (e) => {
    e.preventDefault();
    setMembersData((prev) =>
      prev.map((m) =>
        m.id === editForm.id
          ? {
              ...editForm,
              avatar:
                editForm.avatar ||
                (editForm.gender === "Female"
                  ? "https://randomuser.me/api/portraits/women/3.jpg"
                  : "https://randomuser.me/api/portraits/men/3.jpg"),
            }
          : m
      )
    );
    setShowEditPopup(false);
    setEditForm(null);
  };

  // CSV Export Helper
  const exportToCSV = () => {
    const headers = [
      "ID",
      "Name",
      "Gender",
      "DOB",
      "Contact",
      "By",
      "Group",
      "Address",
      "Status",
    ];
    const rows = membersData.map((m) => [
      m.id,
      m.name,
      m.gender,
      m.dob,
      m.contact,
      m.by,
      m.group,
      m.address,
      m.status,
    ]);
    let csvContent =
      headers.join(",") +
      "\n" +
      rows.map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n");

    // Download logic
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    // Create a link and click it
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "members.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      {/* Add Member Popup */}
      {showAddPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">

          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-8 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
              onClick={() => setShowAddPopup(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              👤 Add Member
            </h2>
            <form onSubmit={handleAddMember} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={addForm.name}
                  onChange={handleAddInputChange}
                  placeholder="Enter name"
                  className="border rounded px-3 py-2"
                  required
                />
                <input
                  type="text"
                  name="contact"
                  value={addForm.contact}
                  onChange={handleAddInputChange}
                  placeholder="Enter contact number"
                  className="border rounded px-3 py-2"
                  required
                />
                <input
                  type="text"
                  name="address"
                  value={addForm.address}
                  onChange={handleAddInputChange}
                  placeholder="Enter Address"
                  className="border rounded px-3 py-2 col-span-2"
                />
                <input
                  type="date"
                  name="dob"
                  value={addForm.dob}
                  onChange={handleAddInputChange}
                  className="border rounded px-3 py-2"
                />
                <select
                  name="gender"
                  value={addForm.gender}
                  onChange={handleAddInputChange}
                  className="border rounded px-3 py-2"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  type="text"
                  name="group"
                  value={addForm.group}
                  onChange={handleAddInputChange}
                  placeholder="Group"
                  className="border rounded px-3 py-2"
                />
                <input
                  type="text"
                  name="by"
                  value={addForm.by}
                  onChange={handleAddInputChange}
                  placeholder="By"
                  className="border rounded px-3 py-2"
                />
                <div className="flex gap-4 items-center col-span-2">
                  <label className="flex gap-1 items-center">
                    <input
                      type="radio"
                      name="status"
                      value="Active"
                      checked={addForm.status === "Active"}
                      onChange={handleAddInputChange}
                    />
                    Active
                  </label>
                  <label className="flex gap-1 items-center">
                    <input
                      type="radio"
                      name="status"
                      value="Inactive"
                      checked={addForm.status === "Inactive"}
                      onChange={handleAddInputChange}
                    />
                    Inactive
                  </label>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded"
                >
                  Add
                </button>
                <button
                  type="button"
                  className="border px-6 py-2 rounded"
                  onClick={() => setShowAddPopup(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Member Popup */}
      {showEditPopup && editForm && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">

          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-8 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
              onClick={() => setShowEditPopup(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Edit2 className="w-5 h-5" /> Edit Member
            </h2>
            <form onSubmit={handleEditMember} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleEditInputChange}
                  placeholder="Enter name"
                  className="border rounded px-3 py-2"
                  required
                />
                <input
                  type="text"
                  name="contact"
                  value={editForm.contact}
                  onChange={handleEditInputChange}
                  placeholder="Enter contact number"
                  className="border rounded px-3 py-2"
                  required
                />
                <input
                  type="text"
                  name="address"
                  value={editForm.address}
                  onChange={handleEditInputChange}
                  placeholder="Enter Address"
                  className="border rounded px-3 py-2 col-span-2"
                />
                <input
                  type="date"
                  name="dob"
                  value={editForm.dob}
                  onChange={handleEditInputChange}
                  className="border rounded px-3 py-2"
                />
                <select
                  name="gender"
                  value={editForm.gender}
                  onChange={handleEditInputChange}
                  className="border rounded px-3 py-2"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  type="text"
                  name="group"
                  value={editForm.group}
                  onChange={handleEditInputChange}
                  placeholder="Group"
                  className="border rounded px-3 py-2"
                />
                <input
                  type="text"
                  name="by"
                  value={editForm.by}
                  onChange={handleEditInputChange}
                  placeholder="By"
                  className="border rounded px-3 py-2"
                />
                <div className="flex gap-4 items-center col-span-2">
                  <label className="flex gap-1 items-center">
                    <input
                      type="radio"
                      name="status"
                      value="Active"
                      checked={editForm.status === "Active"}
                      onChange={handleEditInputChange}
                    />
                    Active
                  </label>
                  <label className="flex gap-1 items-center">
                    <input
                      type="radio"
                      name="status"
                      value="Inactive"
                      checked={editForm.status === "Inactive"}
                      onChange={handleEditInputChange}
                    />
                    Inactive
                  </label>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="border px-6 py-2 rounded"
                  onClick={() => setShowEditPopup(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center shadow-sm">
        <h1 className=" font-bold text-gray-800 flex items-center font-sans gap-2">
          <Users />
          All Members
        </h1>
      </header>

      {/* Stats Section */}
      <section className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex justify-between items-center gap-4 bg-white shadow-md p-6 rounded-2xl"
          >
            <div>
              <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
            {stat.icon}
          </div>
        ))}
      </section>

      {/* Members Section */}
      <section className="p-4">
        {!selectedMember ? (
          <div className="bg-white rounded-lg shadow p-4">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-4">
              <input
                type="text"
                placeholder="Search by id, name or contact..."
                className="border rounded px-3 py-2 w-1/3"
              />
              <div className="flex gap-1">
                <button
                  className="border px-3 py-1 rounded flex items-center gap-1"
                  onClick={exportToCSV}
                >
                  Export
                </button>
                <button
                  className="border px-3 py-1 rounded flex items-center gap-1 text-red-600"
                  onClick={handleDeleteSelected}
                  disabled={selectedRows.length === 0}
                  title={
                    selectedRows.length === 0
                      ? "Select members to delete"
                      : "Delete selected"
                  }
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
                <button
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                  onClick={() => setShowAddPopup(true)}
                >
                  + Add
                </button>
              </div>
            </div>

            {/* Table */}
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-3 border-b border-gray-200 w-10">
                    <input
                      type="checkbox"
                      checked={allSelected}
                      onChange={handleSelectAll}
                      aria-label="Select all"
                    />
                  </th>
                  <th className="p-3 border-b border-gray-200">ID</th>
                  <th className="p-3 border-b border-gray-200">Name</th>
                  <th className="p-3 border-b border-gray-200">DOB</th>
                  <th className="p-3 border-b border-gray-200">Contact</th>
                  <th className="p-3 border-b border-gray-200">Remainder</th>
                  <th className="p-3 border-b border-gray-200">By</th>
                  <th className="p-3 border-b border-gray-200">Group</th>
                  <th className="p-3 border-b border-gray-200">Actions</th>
                </tr>
              </thead>
              <tbody>
                {membersData.map((member) => (
                  <tr
                    key={member.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-3 border-b border-gray-200">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(member.id)}
                        onChange={() => handleSelectRow(member.id)}
                        aria-label={`Select member ${member.id}`}
                      />
                    </td>
                    <td className="p-3 border-b border-gray-200">#{member.id}</td>
                    <td
                      className="p-3 border-b border-gray-200 flex items-center gap-2 cursor-pointer text-blue-600"
                      onClick={() => setSelectedMember(member)}
                    >
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-gray-500">{member.gender}</p>
                      </div>
                    </td>
                    <td className="p-3 border-b border-gray-200">{member.dob}</td>
                    <td className="p-3 border-b border-gray-200">{member.contact}</td>
                    <td className="p-3 border-b border-gray-200">-</td>
                    <td className="p-3 border-b border-gray-200">{member.by}</td>
                    <td className="p-3 border-b border-gray-200">
                      <span className="border px-2 py-1 rounded-full text-sm">
                        {member.group}
                      </span>
                    </td>
                    <td className="p-3 border-b border-gray-200">
                      <button
                        className="text-blue-600 hover:bg-blue-50 rounded p-1"
                        onClick={() => openEditPopup(member)}
                        title="Edit"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* Member Detail Form */
          <div className="bg-white rounded-lg shadow p-6">
            <button
              onClick={() => setSelectedMember(null)}
              className="text-blue-600 mb-4"
            >
              ← Back to Members
            </button>

            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              👤 Add Members
            </h2>

            <div className="flex gap-6">
              {/* Profile Image */}
              <div className="flex flex-col items-center">
                <img
                  src={selectedMember.avatar}
                  alt="profile"
                  className="w-28 h-28 rounded-full object-cover"
                />
                <div className="flex gap-2 mt-3">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded">
                    Upload New
                  </button>
                  <button className="bg-gray-100 px-4 py-2 rounded">
                    Camera
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-2 gap-4 flex-1">
                <input
                  type="text"
                  defaultValue={selectedMember.name}
                  placeholder="Enter name"
                  className="border rounded px-3 py-2"
                />
                <input
                  type="text"
                  defaultValue={selectedMember.contact}
                  placeholder="Enter contact number"
                  className="border rounded px-3 py-2"
                />
                <input
                  type="text"
                  defaultValue={selectedMember.address}
                  placeholder="Enter Address"
                  className="border rounded px-3 py-2"
                />
                <div className="flex gap-4 items-center">
                  <label className="flex gap-1 items-center">
                    <input
                      type="radio"
                      name="status"
                      defaultChecked={selectedMember.status === "Active"}
                    />
                    Active
                  </label>
                  <label className="flex gap-1 items-center">
                    <input
                      type="radio"
                      name="status"
                      defaultChecked={selectedMember.status === "Inactive"}
                    />
                    Inactive
                  </label>
                </div>
                <input
                  type="date"
                  defaultValue={selectedMember.dob}
                  className="border rounded px-3 py-2"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded">
                + Add
              </button>
              <button className="border px-6 py-2 rounded">Clear</button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default All_members;
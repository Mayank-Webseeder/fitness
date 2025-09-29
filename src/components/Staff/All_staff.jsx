import React, { useState } from "react";

export default function ManageStaff() {
  const [staff, setStaff] = useState([
    {
      id: "123",
      name: "Niki",
      contact: "91-1234567890",
      type: "Trainer",
      username: "911845",
      login: "-",
      image: "https://via.placeholder.com/80", // replace with real staff image
    },
  ]);

  // Handle Delete
  const handleDelete = (id) => {
    setStaff(staff.filter((member) => member.id !== id));
    alert(`Staff with ID ${id} deleted`);
  };

  // Handle Message
  const handleMessage = (member) => {
    alert(`Send message to ${member.name} (${member.contact})`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-md rounded-xl p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Manage Staff</h2>

          <div className="flex items-center gap-3">
            <button
              onClick={() => alert("Messages feature coming soon!")}
              className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Messages
            </button>
            <button
              onClick={() =>
                staff.length > 0
                  ? handleDelete(staff[0].id)
                  : alert("No staff to delete")
              }
              className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
            <button
              onClick={() => alert("Add staff feature coming soon!")}
              className="px-4 py-2 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
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
                  className="w-16 h-16 rounded-full border"
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

              {/* Card Action Buttons */}
              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => handleMessage(member)}
                  className="flex-1 px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Message
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
    </div>
  );
}

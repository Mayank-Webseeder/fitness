import React, { useState } from "react";
import { Users, TrendingUp, Calendar } from "lucide-react";

const membersData = [
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
  const [selectedMember, setSelectedMember] = useState(null);

  const stats = [
    {
      title: "Total Members",
      value: 18,
      icon: <Users className="w-8 h-8 text-gray-600" />,
    },
    {
      title: "Active Members",
      value: 10,
      icon: <TrendingUp className="w-8 h-8 text-gray-600" />,
    },
    {
      title: "Expiring Soon",
      value: 2,
      icon: <Calendar className="w-8 h-8 text-gray-600" />,
    },
    {
      title: "Expired",
      value: 7,
      icon: <Calendar className="w-8 h-8 text-gray-600" />,
    },
  ];

  return (
    <div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 flex items-center font-sans gap-2">
          <Users />
          All Members
        </h1>
      </header>

      {/* Stats Section */}
      <section className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 flex justify-between items-center border"
          >
            <div>
              <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">{stat.icon}</div>
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
              <div className="flex gap-2">
                <button className="border px-4 py-2 rounded">Messages</button>
                <button className="border px-4 py-2 rounded">Export</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  + Add
                </button>
              </div>
            </div>

            {/* Table */}
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-2"></th>
                  <th className="p-2">ID</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">DOB</th>
                  <th className="p-2">Contact</th>
                  <th className="p-2">Remainder</th>
                  <th className="p-2">By</th>
                  <th className="p-2">Group</th>
                  <th className="p-2"></th>
                </tr>
              </thead>
              <tbody>
                {membersData.map((member) => (
                  <tr key={member.id} className="border-b">
                    <td className="p-2">
                      <input type="checkbox" />
                    </td>
                    <td className="p-2">#{member.id}</td>
                    <td
                      className="p-2 flex items-center gap-2 cursor-pointer text-blue-600"
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
                    <td className="p-2">{member.dob}</td>
                    <td className="p-2">{member.contact}</td>
                    <td className="p-2">-</td>
                    <td className="p-2">{member.by}</td>
                    <td className="p-2">
                      <span className="border px-2 py-1 rounded-full text-sm">
                        {member.group}
                      </span>
                    </td>
                    <td className="p-2">⋮</td>
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

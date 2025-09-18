import React, { useState } from "react";
import { UserPlus } from "lucide-react";

const Add_members = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
    dob: "",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
  });

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // reset form
  const handleClear = () => {
    setFormData({
      name: "",
      contact: "",
      address: "",
      dob: "",
      status: "Active",
      avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    });
  };

  // handle add
  const handleAdd = () => {
    console.log("New Member Added:", formData);
    // 🔑 later you can push this to All_members
    handleClear();
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 flex items-center font-sans gap-2">
          <UserPlus />
          Add Member
        </h1>
      </header>

      {/* Form Section */}
      <section className="p-6 bg-white shadow rounded-lg mt-4">
        <div className="flex gap-6">
          {/* Profile Image */}
          <div className="flex flex-col items-center">
            <img
              src={formData.avatar}
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

          {/* Form Inputs */}
          <div className="grid grid-cols-2 gap-4 flex-1">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
              className="border rounded px-3 py-2"
            />
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter contact number"
              className="border rounded px-3 py-2"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address"
              className="border rounded px-3 py-2 col-span-2"
            />

            {/* Gender/Status */}
            <div className="flex gap-4 items-center">
              <label className="flex gap-1 items-center">
                <input
                  type="radio"
                  name="status"
                  value="Active"
                  checked={formData.status === "Active"}
                  onChange={handleChange}
                />
                Active
              </label>
              <label className="flex gap-1 items-center">
                <input
                  type="radio"
                  name="status"
                  value="Inactive"
                  checked={formData.status === "Inactive"}
                  onChange={handleChange}
                />
                Inactive
              </label>
            </div>

            {/* DOB */}
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="border rounded px-3 py-2"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white px-6 py-2 rounded"
          >
            + Add
          </button>
          <button
            onClick={handleClear}
            className="border px-6 py-2 rounded"
          >
            Clear
          </button>
        </div>
      </section>
    </div>
  );
};

export default Add_members;

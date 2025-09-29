import React, { useState } from "react";
import { Calendar, UserPlus, Minus } from "lucide-react";

const Add_staff = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
    gender: "Female",
    type: "",
    joiningDate: "",
    dob: "",
    anniversary: "",
    photo: null,
    photoPreview: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, photo: file, photoPreview: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClear = () => {
    setFormData({
      name: "",
      contact: "",
      address: "",
      gender: "Female",
      type: "",
      joiningDate: "",
      dob: "",
      anniversary: "",
      photo: null,
      photoPreview: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Staff member added successfully!");
    handleClear();
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h1 className="text-lg font-semibold border-b pb-2 mb-4 flex items-center gap-2">
        <UserPlus className="w-5 h-5" /> Add Staff
      </h1>

      <h2 className="text-md font-bold text-blue-900 mb-4">Personal Information</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Upload */}
        <div className="flex flex-col items-center justify-center border rounded-md p-4 w-40 h-40">
          {formData.photoPreview ? (
            <img
              src={formData.photoPreview}
              alt="Profile Preview"
              className="w-full h-full object-cover rounded"
            />
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer text-gray-500">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoUpload}
              />
              Upload Image
            </label>
          )}
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 col-span-1 md:col-span-1">
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border rounded px-3 py-2 w-full"
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full"
          >
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>

          <input
            type="text"
            name="contact"
            placeholder="Your contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="border rounded px-3 py-2 w-full"
          />

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="border rounded px-3 py-2 w-full"
          >
            <option value="">Select type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Intern">Intern</option>
          </select>

          <input
            type="text"
            name="address"
            placeholder="Enter address"
            value={formData.address}
            onChange={handleChange}
            required
            className="border rounded px-3 py-2 w-full col-span-2"
          />

          <div className="flex items-center gap-2 border rounded px-3 py-2">
            <input
              type="date"
              name="joiningDate"
              value={formData.joiningDate}
              onChange={handleChange}
              className="w-full outline-none"
            />
            <Calendar className="w-4 h-4 text-gray-500" />
          </div>

          <div className="flex items-center gap-2 border rounded px-3 py-2">
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full outline-none"
            />
            <Calendar className="w-4 h-4 text-gray-500" />
          </div>

          <div className="flex items-center gap-2 border rounded px-3 py-2">
            <input
              type="date"
              name="anniversary"
              value={formData.anniversary}
              onChange={handleChange}
              className="w-full outline-none"
            />
            <Calendar className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        {/* Buttons */}
        <div className="col-span-2 flex justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={handleClear}
            className="flex items-center gap-2 px-6 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
          >
            <Minus className="w-4 h-4" /> CLEAR
          </button>

          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <UserPlus className="w-4 h-4" /> ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add_staff;

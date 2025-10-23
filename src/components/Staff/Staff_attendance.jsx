import React, { useState } from "react";
import { Download, Users, CalendarDays } from "lucide-react";

const Staff_attendance = () => {
  const [attendanceData] = useState([
    { id: 1, name: "Niki", gender: "Female", checkIn: "10:00 AM", checkOut: "6:00 PM", duration: "8 Hr : 00 Min" },
  ]);

  const [selectedDate, setSelectedDate] = useState("");

  const handleDownload = () => {
    alert("Attendance Report Downloaded!");
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
       {/* Header */}
            <header className="bg-white border border-gray-200 px-6 py-3 flex items-center shadow-sm mb-4">
              <h1 className="font-bold text-gray-800 flex items-center gap-2">
                <CalendarDays />
                Staff Attendance
              </h1>
            </header>

      <div className="bg-white rounded-2xl shadow-md p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm focus:ring focus:ring-blue-200"
          />
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Download size={16} /> Download
          </button>
        </div>

        {/* Attendance Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3 text-left border">Staff</th>
                <th className="p-3 text-left border">Check In</th>
                <th className="p-3 text-left border">Check Out</th>
                <th className="p-3 text-left border">Duration</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((staff) => (
                <tr key={staff.id} className="hover:bg-gray-50">
                  <td className="p-3 border">
                    <div className="font-medium">{staff.name}</div>
                    <div className="text-xs text-gray-500">{staff.gender}</div>
                  </td>
                  <td className="p-3 border">{staff.checkIn}</td>
                  <td className="p-3 border">{staff.checkOut}</td>
                  <td className="p-3 border">{staff.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Staff_attendance;
import React, { useState } from 'react';
import { AlarmClock, Plus, Filter, Trash2, UserPlus } from 'lucide-react';

const General_reminders = () => {
  const [reminders, setReminders] = useState([
    { remark: 'check new leads', date: '28-12-2000', assigned: 'Nikhil' }
  ]);
  const [newRemark, setNewRemark] = useState('');

  const handleAdd = () => {
    if (!newRemark.trim()) return;
    const newReminder = {
      remark: newRemark,
      date: new Date().toLocaleDateString('en-GB'),
      assigned: 'Unassigned'
    };
    setReminders([...reminders, newReminder]);
    setNewRemark('');
  };

  const handleDelete = (index) => {
    const updated = reminders.filter((_, i) => i !== index);
    setReminders(updated);
  };

  const handleAssign = (index) => {
    const person = prompt('Enter name to assign:');
    if (person) {
      const updated = reminders.map((item, i) =>
        i === index ? { ...item, assigned: person } : item
      );
      setReminders(updated);
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 mt-0 px-4 py-3 flex items-center shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 flex items-center font-sans gap-2">
          <AlarmClock />
          General Reminders
        </h1>
      </header>

      {/* Main Content Below Header */}
      <div className="p-4 bg-gray-50 min-h-screen">
        {/* Search & Add Section */}
        <div className="flex justify-between items-center mb-4 gap-2">
          <div className="flex items-center gap-2 w-full max-w-md">
            <button className="p-2 border rounded-md bg-white shadow-sm">
              <Filter size={18} className="text-gray-600" />
            </button>
            <input
              type="text"
              placeholder="Search by id, name or contact"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Add Remark Input */}
          <input
            type="text"
            value={newRemark}
            onChange={(e) => setNewRemark(e.target.value)}
            placeholder="Enter remark"
            className="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          <button
            onClick={handleAdd}
            className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md shadow-sm"
          >
            <Plus size={18} /> ADD
          </button>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-md border shadow-sm overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-3">
                  <input type="checkbox" className="w-4 h-4" />
                </th>
                <th className="p-3 text-gray-600 font-medium">Remark</th>
                <th className="p-3 text-gray-600 font-medium">Reminder</th>
                <th className="p-3 text-gray-600 font-medium">Assigned to</th>
                <th className="p-3 text-gray-600 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reminders.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <input type="checkbox" className="w-4 h-4" />
                  </td>
                  <td className="p-3 text-gray-700">{item.remark}</td>
                  <td className="p-3 text-gray-700">{item.date}</td>
                  <td className="p-3 text-gray-700">{item.assigned}</td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => handleAssign(index)}
                      className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      <UserPlus size={16} /> Assign
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default General_reminders;
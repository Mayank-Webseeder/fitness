import React, { useState } from "react";
import { Trash2, MessageSquare, Filter } from "lucide-react";

const Leads_followupshistory = () => {
  const [records, setRecords] = useState([
    {
      id: 1,
      name: "Rahul",
      gender: "male",
      contact: "91-1234567890",
      date: "19-07-2025",
      by: "Nikhil Mehta",
      type: "Call",
      comment: "Coming to visit on 20-07-2025",
    },
  ]);

  const [selected, setSelected] = useState([]);

  const handleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleDelete = () => {
    setRecords(records.filter((record) => !selected.includes(record.id)));
    setSelected([]);
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h1 className="text-lg font-semibold border-b pb-2 mb-4">
        Follow Up History
      </h1>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search by id, name or contact"
            className="border px-2 py-1 rounded-md text-sm focus:outline-blue-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            <MessageSquare className="w-4 h-4" />
            MESSAGES
          </button>
          <button
            onClick={handleDelete}
            className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            <Trash2 className="w-4 h-4" />
            DELETE
          </button>
        </div>
      </div>

      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">
              <input
                type="checkbox"
                onChange={(e) =>
                  setSelected(e.target.checked ? records.map((r) => r.id) : [])
                }
                checked={selected.length === records.length}
              />
            </th>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Contact</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">By</th>
            <th className="p-2 border">Type</th>
            <th className="p-2 border">Comment</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id} className="hover:bg-gray-50">
              <td className="p-2 border text-center">
                <input
                  type="checkbox"
                  checked={selected.includes(record.id)}
                  onChange={() => handleSelect(record.id)}
                />
              </td>
              <td className="p-2 border">#{record.id}</td>
              <td className="p-2 border">{record.name} ({record.gender})</td>
              <td className="p-2 border">{record.contact}</td>
              <td className="p-2 border">{record.date}</td>
              <td className="p-2 border">{record.by}</td>
              <td className="p-2 border">{record.type}</td>
              <td className="p-2 border">{record.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leads_followupshistory;

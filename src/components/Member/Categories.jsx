import React, { useState } from "react";
import { Files, SquareUser, Pencil, Trash2 } from "lucide-react";

const Categories = () => {
  // State for follow-up types
  const [followUps, setFollowUps] = useState([
    { id: 1, type: "Irregular members" },
    { id: 2, type: "Trial sessions" },
  ]);

  // State for search and form handling
  const [search, setSearch] = useState("");
  const [newType, setNewType] = useState("");
  const [editId, setEditId] = useState(null);

  // Add new type
  const handleAdd = () => {
    if (!newType.trim()) return;
    if (editId) {
      // Update existing
      setFollowUps((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, type: newType } : item
        )
      );
      setEditId(null);
    } else {
      // Add new
      setFollowUps((prev) => [
        ...prev,
        { id: prev.length + 1, type: newType },
      ]);
    }
    setNewType("");
  };

  // Delete type
  const handleDelete = (id) => {
    setFollowUps((prev) => prev.filter((item) => item.id !== id));
  };

  // Edit type
  const handleEdit = (id, currentType) => {
    setEditId(id);
    setNewType(currentType);
  };

  // Filter by search
  const filteredFollowUps = followUps.filter((item) =>
    item.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 mt-0 px-4 py-3 flex items-center shadow-sm">
        <h1 className="font-bold text-gray-800 flex items-center font-sans gap-2">
          <Files size={20} />
          Categories
        </h1>
      </header>

      {/* Table Layout */}
      <div className="p-6">
        <div className="bg-white rounded-lg shadow border border-gray-200">
          {/* Search + Input + Button */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <input
              type="text"
              placeholder="Search by categories type name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-1/3 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter category type..."
                value={newType}
                onChange={(e) => setNewType(e.target.value)}
                className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              />
              <button
                onClick={handleAdd}
                className="flex items-center gap-1 bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm"
              >
                {editId ? "Update" : "＋ ADD"}
              </button>
            </div>
          </div>

          {/* Table */}
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-3 w-12">
                  <input type="checkbox" className="h-4 w-4" />
                </th>
                <th className="px-4 py-3 font-medium text-gray-600 text-sm">ID</th>
                <th className="px-4 py-3 font-medium text-gray-600 text-sm">Type</th>
                <th className="px-4 py-3 w-20"></th>
              </tr>
            </thead>
            <tbody>
              {filteredFollowUps.map((item) => (
                <tr key={item.id} className="border-b border-gray-100">
                  <td className="px-4 py-3">
                    <input type="checkbox" className="h-4 w-4" />
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">#{item.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{item.type}</td>
                  <td className="px-4 py-3 flex gap-3 text-gray-500">
                    <Pencil
                      className="w-4 h-4 cursor-pointer hover:text-blue-600"
                      onClick={() => handleEdit(item.id, item.type)}
                    />
                    <Trash2
                      className="w-4 h-4 cursor-pointer hover:text-red-600"
                      onClick={() => handleDelete(item.id)}
                    />
                  </td>
                </tr>
              ))}

              {filteredFollowUps.length === 0 && (
                <tr>
                  <td colSpan="4" className="px-4 py-3 text-center text-gray-400">
                    No follow-up types found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Categories;
              
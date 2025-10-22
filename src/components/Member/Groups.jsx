import React, { useState } from "react";
import { Boxes, Search, Plus, Trash2, Edit2 } from "lucide-react";

const Groups = () => {
  const [groups, setGroups] = useState([
    { id: 1, name: "MORNING" },
    { id: 2, name: "EVENING" },
  ]);
  const [search, setSearch] = useState("");
  const [newGroup, setNewGroup] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [selected, setSelected] = useState([]);

  // Add new group
  const handleAdd = () => {
    if (!newGroup.trim()) return;
    const nextId = groups.length ? groups[groups.length - 1].id + 1 : 1;
    setGroups([...groups, { id: nextId, name: newGroup }]);
    setNewGroup("");
  };

  // Edit group
  const handleEdit = (id) => {
    const group = groups.find((g) => g.id === id);
    if (group) {
      setEditingId(id);
      setNewGroup(group.name);
    }
  };

  const handleUpdate = () => {
    setGroups(
      groups.map((g) =>
        g.id === editingId ? { ...g, name: newGroup } : g
      )
    );
    setEditingId(null);
    setNewGroup("");
  };

  // Delete single group
  const handleDelete = (id) => {
    setGroups(groups.filter((g) => g.id !== id));
    setSelected(selected.filter((sid) => sid !== id));
  };

  // Delete selected groups
  const handleDeleteSelected = () => {
    setGroups(groups.filter((g) => !selected.includes(g.id)));
    setSelected([]);
  };

  // Toggle select
  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selected.length === groups.length) {
      setSelected([]);
    } else {
      setSelected(groups.map((g) => g.id));
    }
  };

  // Filter groups by search
  const filteredGroups = groups.filter((g) =>
    g.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 mt-0 px-4 py-3 flex items-center shadow-sm">
        <h1 className=" font-bold text-gray-800 flex items-center font-sans gap-2">
          <Boxes size={20}/>
          Manage Groups
        </h1>
      </header>

      {/* Groups Section */}
      <section className="p-4">
        <div className="bg-white rounded-md shadow border border-gray-200">
          {/* Top bar with search + actions */}
          <div className="flex justify-between items-center p-3 border-b border-gray-200 bg-gray-50">
            <div className="relative w-1/3">
              <input
                type="text"
                placeholder="Search by group name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDeleteSelected}
                disabled={selected.length === 0}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm border ${
                  selected.length === 0
                    ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                    : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
                }`}
              >
                <Trash2 className="w-4 h-4" /> DELETE
              </button>
              <input
                type="text"
                placeholder="Enter group..."
                value={newGroup}
                onChange={(e) => setNewGroup(e.target.value)}
                className="border border-gray-300 rounded-md text-sm px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {editingId ? (
                <button
                  onClick={handleUpdate}
                  className="flex items-center gap-1 bg-green-600 text-white px-3 py-1.5 rounded-md hover:bg-green-700 text-sm"
                >
                  Update
                </button>
              ) : (
                <button
                  onClick={handleAdd}
                  className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 text-sm"
                >
                  <Plus className="w-4 h-4" /> ADD
                </button>
              )}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-md overflow-hidden">
              <thead>
                <tr className="bg-gray-50 text-gray-700 text-sm">
                  <th className="px-4 py-2 text-left w-12">
                    <input
                      type="checkbox"
                      checked={
                        selected.length > 0 &&
                        selected.length === groups.length
                      }
                      onChange={toggleSelectAll}
                      className="w-4 h-4"
                    />
                  </th>
                  <th className="px-4 py-2 text-left font-semibold">ID</th>
                  <th className="px-4 py-2 text-left font-semibold">Group</th>
                  <th className="px-4 py-2 text-left font-semibold w-24">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredGroups.map((group) => (
                  <tr key={group.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2">
                      <input
                        type="checkbox"
                        checked={selected.includes(group.id)}
                        onChange={() => toggleSelect(group.id)}
                        className="w-4 h-4"
                      />
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      #{group.id}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {group.name}
                    </td>
                    <td className="px-4 py-2 flex items-center gap-3">
                      <button
                        onClick={() => handleEdit(group.id)}
                        className="text-gray-500 hover:text-blue-600"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(group.id)}
                        className="text-gray-500 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredGroups.length === 0 && (
                  <tr>
                    <td
                      colSpan="4"
                      className="text-center py-4 text-gray-500 text-sm"
                    >
                      No groups found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Groups;

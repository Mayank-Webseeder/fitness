import React from "react";
import { Boxes, Search, Plus, Trash2, Edit2 } from "lucide-react";

const Groups = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 mt-0 px-4 py-3 flex items-center shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 flex items-center font-sans gap-2">
          <Boxes />
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
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 bg-gray-100 border border-gray-300 text-gray-600 px-3 py-1.5 rounded-md hover:bg-gray-200 text-sm">
                <Trash2 className="w-4 h-4" /> DELETE
              </button>
              <button className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 text-sm">
                <Plus className="w-4 h-4" /> ADD
              </button>
            </div>
          </div>

          {/* Table */}
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-2 text-left">
                  <input type="checkbox" className="w-4 h-4" />
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">ID</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Group</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">#1</td>
                <td className="px-4 py-2 text-sm text-gray-700">MORNING</td>
                <td className="px-4 py-2 flex gap-2">
                  <button className="text-gray-500 hover:text-blue-600">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="text-gray-500 hover:text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">#2</td>
                <td className="px-4 py-2 text-sm text-gray-700">EVENING</td>
                <td className="px-4 py-2 flex gap-2">
                  <button className="text-gray-500 hover:text-blue-600">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="text-gray-500 hover:text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Groups;

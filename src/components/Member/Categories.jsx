import React from "react";
import { Files, Pencil, Trash2 } from "lucide-react";

const Categories = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 mt-0 px-4 py-3 flex items-center shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 flex items-center font-sans gap-2">
          <Files className="w-5 h-5" />
          Categories
        </h1>
      </header>

      {/* Table Layout */}
      <div className="p-6">
        <div className="bg-white rounded-lg shadow border border-gray-200">
          {/* Search + Buttons */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <input
              type="text"
              placeholder="Search by followup type name..."
              className="w-1/3 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
            <div className="flex gap-2">
              <button className="flex items-center gap-1 bg-red-50 text-gray-700 border border-gray-300 hover:bg-red-100 px-4 py-2 rounded-md text-sm">
                <Trash2 className="w-4 h-4" />
                DELETE
              </button>
              <button className="flex items-center gap-1 bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm">
                ＋ ADD
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
              {/* Row 1 */}
              <tr className="border-b border-gray-100">
                <td className="px-4 py-3">
                  <input type="checkbox" className="h-4 w-4" />
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">#1</td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  Irregular members
                </td>
                <td className="px-4 py-3 flex gap-3 text-gray-500">
                  <Pencil className="w-4 h-4 cursor-pointer hover:text-blue-600" />
                  <Trash2 className="w-4 h-4 cursor-pointer hover:text-red-600" />
                </td>
              </tr>

              {/* Row 2 */}
              <tr>
                <td className="px-4 py-3">
                  <input type="checkbox" className="h-4 w-4" />
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">#2</td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  trail sessions
                </td>
                <td className="px-4 py-3 flex gap-3 text-gray-500">
                  <Pencil className="w-4 h-4 cursor-pointer hover:text-blue-600" />
                  <Trash2 className="w-4 h-4 cursor-pointer hover:text-red-600" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Categories;

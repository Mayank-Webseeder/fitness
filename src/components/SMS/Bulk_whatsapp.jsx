import React from "react";
import { FolderDown, Plus, Trash2 } from "lucide-react";

const Bulk_whatsapp = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 mt-0 px-4 py-3 flex items-center shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 flex items-center font-sans gap-2">
          <FolderDown />
          Bulk WhatsApp
        </h1>
      </header>

      {/* Body Section */}
      <div className="p-6">
        {/* Search + Actions */}
        <div className="flex justify-between items-center mb-4">
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md px-3 py-2 text-sm w-1/3 focus:outline-none focus:ring focus:ring-blue-200"
          />

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 border px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100">
              <Trash2 size={16} /> DELETE
            </button>
            <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600">
              <Plus size={16} /> ADD
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="border rounded-md bg-white">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-3 text-left w-12">
                  <input type="checkbox" />
                </th>
                <th className="p-3 text-left font-medium text-gray-600">
                  Template
                </th>
                <th className="p-3 text-left font-medium text-gray-600">
                  Media URL
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3">GNC Weight Gainer</td>
                <td className="p-3 text-blue-600 underline">
                  <a
                    href="https://nutrabay.com/product/gnc-weight-gainer-powder?"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://nutrabay.com/product/gnc-weight-gainer-powder?
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bulk_whatsapp;

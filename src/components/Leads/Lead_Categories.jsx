import { useState } from "react";
import { Pencil, Trash2, Plus, Users, Search } from "lucide-react";

const LeadCategories = () => {
  const [categories, setCategories] = useState([
    "Diet Maintain",
    "Personal Training (PT)",
    "Strength",
    "Cardio",
    "Weight Gain",
    "Weight Loss",
  ]);

  const [newCategory, setNewCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addCategory = () => {
    if (newCategory.trim() !== "") {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const deleteCategory = (index) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white border border-gray-200 px-6 py-3 flex items-center shadow-sm mb-4">
        <h1 className="font-semibold text-gray-800 flex items-center gap-2 text-lg">
          <Users/>
          Lead Categories
        </h1>
      </header>

      {/* Search and Add */}
      <div className="flex flex-wrap items-center justify-between mb-4 gap-3">
        {/* Search */}
        <div className="relative w-72">
          <Search className="absolute left-2 top-2.5 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search by lead category name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-200 rounded-md pl-8 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>

        {/* Add Category */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="New lead category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <button
            onClick={addCategory}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm transition"
          >
            <Plus size={18} className="mr-1" /> Add
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-700 font-medium border-b">
            <tr>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.map((category, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-3 text-gray-800">{category}</td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button className="text-blue-500 hover:text-blue-700 transition">
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => deleteCategory(index)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}

            {filteredCategories.length === 0 && (
              <tr>
                <td colSpan="2" className="text-center py-6 text-gray-400">
                  No lead categories found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadCategories;

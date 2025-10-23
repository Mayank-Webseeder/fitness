import { useState } from "react";
import { Pencil, Trash2, Plus, Users, FileUser } from "lucide-react";

const StaffType = () => {
  const [staffTypes, setStaffTypes] = useState([
    "Owner",
    "House Keeper",
    "Trainer",
    "Receptionist",
    "Manager",
    "Admin",
  ]);

  const [newType, setNewType] = useState("");

  const addStaffType = () => {
    if (newType.trim() !== "") {
      setStaffTypes([...staffTypes, newType]);
      setNewType("");
    }
  };

  const deleteStaffType = (index) => {
    setStaffTypes(staffTypes.filter((_, i) => i !== index));
  };

  return (
    <div className=" bg-gray-50 min-h-screen">
       {/* Header */}
            <header className="bg-white border border-gray-200 px-6 py-3 flex items-center shadow-sm mb-4">
              <h1 className="font-bold text-gray-800 flex items-center gap-2">
                <FileUser />
                Staff Types
              </h1>
            </header>

      {/* Search and Add */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search by staff type name..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring focus:ring-blue-200"
        />
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="New staff type"
            value={newType}
            onChange={(e) => setNewType(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
          />
          <button
            onClick={addStaffType}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            <Plus size={18} className="mr-1" /> Add
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-600">
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffTypes.map((type, index) => (
              <tr key={index} className="border-t text-gray-700">
                <td className="px-4 py-3">{type}</td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => deleteStaffType(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {staffTypes.length === 0 && (
              <tr>
                <td colSpan="2" className="text-center py-6 text-gray-400">
                  No staff types found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffType;

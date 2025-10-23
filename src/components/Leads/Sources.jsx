import { useState } from "react";
import { Pencil, Trash2, Plus, Users, SquareCode } from "lucide-react";

const LeadSources = () => {
  const [sources, setSources] = useState([
    "News Paper",
    "Google Ads",
    "Reference",
    "Visit",
    "Banner",
  ]);

  const [newSource, setNewSource] = useState("");

  const addSource = () => {
    if (newSource.trim() !== "") {
      setSources([...sources, newSource]);
      setNewSource("");
    }
  };

  const deleteSource = (index) => {
    setSources(sources.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white border border-gray-200 px-6 py-3 flex items-center shadow-sm mb-4">
        <h1 className="font-semibold text-gray-800 flex items-center gap-2 ">
          <SquareCode/>
          Sources
        </h1>
      </header>

      {/* Search and Add */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring focus:ring-blue-200"
        />
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="New lead source"
            value={newSource}
            onChange={(e) => setNewSource(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
          />
          <button
            onClick={addSource}
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
              <th className="px-4 py-3">Sources</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sources.map((source, index) => (
              <tr key={index} className="border-t text-gray-700">
                <td className="px-4 py-3">{source}</td>
                <td className="px-4 py-3 text-right space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => deleteSource(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {sources.length === 0 && (
              <tr>
                <td colSpan="2" className="text-center py-6 text-gray-400">
                  No lead sources found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadSources;

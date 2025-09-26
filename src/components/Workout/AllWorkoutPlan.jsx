import React, { useState } from "react";
import { Watch, Search, Trash2, Plus, Edit2, X } from "lucide-react";

const AllWorkoutPlan = () => {
  // Initial table data
  const [plans, setPlans] = useState([
    {
      id: 1,
      name: "Samrudhi",
      workout: "Push-ups",
      target: "Gain 3-5 kg",
      trainer: "Raj",
      contact: "90-1234567890",
      startDate: "08-Jul-2025",
    },
  ]);

  const [newPlan, setNewPlan] = useState({
    name: "",
    workout: "",
    target: "",
    trainer: "",
    contact: "",
    startDate: "",
  });

  const [editingId, setEditingId] = useState(null);

  // Add new workout plan
  const handleAdd = () => {
    if (!newPlan.name || !newPlan.workout) return alert("Fill all required fields!");

    setPlans([
      ...plans,
      { id: Date.now(), ...newPlan }
    ]);

    setNewPlan({ name: "", workout: "", target: "", trainer: "", contact: "", startDate: "" });
  };

  // Delete plan
  const handleDelete = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  // Start editing
  const handleEdit = (id) => {
    const planToEdit = plans.find((p) => p.id === id);
    setNewPlan(planToEdit);
    setEditingId(id);
  };

  // Save edited data
  const handleSaveEdit = () => {
    setPlans(plans.map((p) => (p.id === editingId ? { ...newPlan, id: editingId } : p)));
    setNewPlan({ name: "", workout: "", target: "", trainer: "", contact: "", startDate: "" });
    setEditingId(null);
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 mt-0 px-4 py-3 flex items-center shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 flex items-center font-sans gap-2">
          <Watch className="w-5 h-5" />
          All Workout Plan
        </h1>
      </header>

      {/* Table Section */}
      <div className="p-4">
        <div className="bg-white shadow rounded-xl overflow-hidden">
          {/* Search + Actions */}
          <div className="flex items-center justify-between p-3 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Search className="text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by Id, name or contact"
                className="outline-none text-sm border-none focus:ring-0"
              />
            </div>
            <div className="flex gap-2">
              {editingId ? (
                <button
                  onClick={handleSaveEdit}
                  className="flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white rounded-md text-sm hover:bg-green-700"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={handleAdd}
                  className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                >
                  <Plus className="w-4 h-4" /> Assign
                </button>
              )}
            </div>
          </div>

          {/* Workout Plan Table */}
          <table className="w-full text-sm text-gray-700">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Workout Plan</th>
                <th className="px-4 py-2 text-left">Target</th>
                <th className="px-4 py-2 text-left">Trainer</th>
                <th className="px-4 py-2 text-left">Contact</th>
                <th className="px-4 py-2 text-left">Start Date</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => (
                <tr key={plan.id} className="border-t">
                  <td className="px-4 py-2">{plan.name}</td>
                  <td className="px-4 py-2">{plan.workout}</td>
                  <td className="px-4 py-2">{plan.target}</td>
                  <td className="px-4 py-2">{plan.trainer}</td>
                  <td className="px-4 py-2">{plan.contact}</td>
                  <td className="px-4 py-2">{plan.startDate}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(plan.id)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(plan.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Add/Edit Form */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <h2 className="font-semibold mb-2">{editingId ? "Edit Plan" : "Add New Plan"}</h2>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Name"
                value={newPlan.name}
                onChange={(e) => setNewPlan({ ...newPlan, name: e.target.value })}
                className="border p-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Workout Plan"
                value={newPlan.workout}
                onChange={(e) => setNewPlan({ ...newPlan, workout: e.target.value })}
                className="border p-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Target"
                value={newPlan.target}
                onChange={(e) => setNewPlan({ ...newPlan, target: e.target.value })}
                className="border p-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Trainer"
                value={newPlan.trainer}
                onChange={(e) => setNewPlan({ ...newPlan, trainer: e.target.value })}
                className="border p-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Contact"
                value={newPlan.contact}
                onChange={(e) => setNewPlan({ ...newPlan, contact: e.target.value })}
                className="border p-2 rounded-md"
              />
              <input
                type="date"
                placeholder="Start Date"
                value={newPlan.startDate}
                onChange={(e) => setNewPlan({ ...newPlan, startDate: e.target.value })}
                className="border p-2 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllWorkoutPlan;

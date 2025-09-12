import React from "react";
import { Watch, Filter, Trash2, Plus } from "lucide-react";

const MasterWorkoutPlan = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 mt-0 px-4 py-3 flex items-center shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 flex items-center font-sans gap-2">
          <Watch className="w-5 h-5" />
          Master Workout Plan
        </h1>
      </header>

      {/* Page Content */}
      <div className="p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            {/* Filter Button */}
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100">
              <Filter className="w-4 h-4 text-gray-600" />
            </button>
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search by diet plan name, target"
              className="w-72 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Right Buttons */}
          <div className="flex gap-2">
            <button className="flex items-center gap-1 bg-red-50 text-gray-700 border border-gray-300 hover:bg-red-100 px-4 py-2 rounded-md text-sm">
              <Trash2 className="w-4 h-4" />
              DELETE
            </button>
            <button className="flex items-center gap-1 bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm">
              <Plus className="w-4 h-4" />
              CREATE PLAN
            </button>
          </div>
        </div>

        {/* Workout Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <span className="text-xs text-blue-500 font-medium">Workout</span>
            <h2 className="text-lg font-semibold text-gray-800 mt-1">
              BulkBoost 30 Workout
            </h2>

            <div className="mt-3 text-sm text-gray-600 space-y-1">
              <p>
                <span className="font-medium">Target:</span> Muscle gain,
                Healthy weight increase
              </p>
              <p>
                <span className="font-medium">Number of Weeks:</span> 5
              </p>
              <p>
                <span className="font-medium">No. of Days per Week:</span> 4
              </p>
            </div>

            <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-md text-sm font-medium hover:from-blue-600 hover:to-blue-700">
              Add Workout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterWorkoutPlan;


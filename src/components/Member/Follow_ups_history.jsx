import React from "react";
import {
  Search,
  Users,
  CheckCircle,
  Download,
  MessageSquare,
  Filter,
  History,
} from "lucide-react";

const Follow_ups_history = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 mt-0 px-4 py-3 flex items-center shadow-sm mb-6 rounded-md">
        <h1 className=" font-bold text-gray-800 flex items-center font-sans gap-2">
          <History size={20}/>
          Follow Ups History
        </h1>
      </header>

      {/* Top Bar */}
      <div className="flex items-center gap-3 mb-6 bg-white shadow-md p-3  rounded-xl">
        {/* Filter Button */}
        <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100">
          <Filter size={20} />
        </button>

        {/* Search Bar */}
        <div className="flex items-center flex-1 border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
          <Search size={18} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search by id, name or contact..."
            className="flex-1 outline-none bg-transparent text-sm"
          />
        </div>

        

        {/* Export Button */}
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          <Download size={18} />
          <span className="text-sm font-medium">Export</span>
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Members Card */}
        <div className="flex justify-between gap-4 bg-white shadow-md p-6 rounded-2xl">
          
          <div>
            <p className="text-gray-500 text-sm">Follow-ups</p>
            <h2 className="text-2xl font-bold">100</h2>
            
          </div>
          <div className="p-3 bg-blue-500 text-white rounded-xl">
            <Users size={28} />
          </div>  
        </div>

        {/* Balance Card */}
        <div className="flex justify-between gap-4 bg-white shadow-md p-6 rounded-2xl">
          
          <div>
            <p className="text-gray-500 text-sm">Members</p>
            <h2 className="text-2xl font-bold">40</h2>
            
          </div>
          <div className="p-3 bg-green-500 text-white rounded-xl">
            <CheckCircle size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Follow_ups_history;

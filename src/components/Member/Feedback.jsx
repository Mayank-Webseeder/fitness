import React from "react";
import {
  Search,
  Filter,
  Settings,
  Eye,
  MessageSquare,
} from "lucide-react";

const Feedback = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 mt-0 px-4 py-3 flex items-center shadow-sm mb-6 rounded-md">
        <h1 className="text-xl font-bold text-gray-800 flex items-center font-sans gap-2">
          <MessageSquare />
          Feedback
        </h1>
      </header>

      {/* Top Bar */}
      <div className="flex items-center justify-between bg-white shadow-md p-3 rounded-xl mb-6">
        <div className="flex items-center gap-3 flex-1">
          <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100">
            <Filter size={20} />
          </button>
          <div className="flex items-center flex-1 border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
            <Search size={18} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search by name..."
              className="flex-1 outline-none bg-transparent text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 ml-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
            <Settings size={18} />
            <span className="text-sm font-medium">Settings</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
            <Eye size={18} />
            <span className="text-sm font-medium">View QR</span>
          </button>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-lg font-bold mb-4">Feedback Ratings & Reviews</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Ratings Breakdown */}
          <div className="col-span-2 space-y-2">
            {[
              { stars: 5, width: "80%" },
              { stars: 4, width: "60%" },
              { stars: 3, width: "30%" },
              { stars: 2, width: "10%" },
              { stars: 1, width: "5%" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-sm">{item.stars} ★</span>
                <div className="w-full bg-gray-200 rounded h-2">
                  <div
                    className="bg-blue-500 h-2 rounded"
                    style={{ width: item.width }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Average Rating */}
          <div className="flex flex-col items-center justify-center bg-orange-50 rounded-xl p-6">
            <h3 className="text-3xl font-bold">4.3</h3>
            <div className="flex text-orange-500 text-lg mt-1">★★★★☆</div>
            <p className="text-sm text-gray-600 mt-1">All Rating</p>
          </div>
        </div>

        {/* Reviews List */}
        <div className="mt-6 space-y-4">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 border-b border-gray-200 pb-4"
            >
              <input type="checkbox" className="mt-1" />
              <div className="flex-1">
                <div className="flex text-orange-500 text-sm mb-1">★★★★★</div>
                <p className="text-sm text-gray-700">91-1234567890</p>
                <p className="text-sm text-gray-500">Very Helpful</p>
              </div>
              <div className="text-sm text-gray-600 text-right">
                <p className="font-medium">Nidhi</p>
                <p>10-Jun-2025</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;

import { useState } from 'react';
import { Search, Trash2, UserPlus, Download, Edit2, Trash, Calendar } from 'lucide-react';

const AllDietPlans = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlans, setSelectedPlans] = useState([]);
  
  const [dietPlans, setDietPlans] = useState([
    {
      id: 1,
      name: 'Samruddhi',
      dietPlan: 'BulkBoost 30',
      target: 'Gain 3-5 kg',
      contact: '91-1234567890',
      startDate: '08-Jul-2025',
      endDate: '08-Aug-2025'
    }
  ]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedPlans(dietPlans.map(plan => plan.id));
    } else {
      setSelectedPlans([]);
    }
  };

  const handleSelectPlan = (planId) => {
    setSelectedPlans(prev => 
      prev.includes(planId) 
        ? prev.filter(id => id !== planId)
        : [...prev, planId]
    );
  };

  const filteredPlans = dietPlans.filter(plan =>
    plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plan.dietPlan.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plan.contact.includes(searchTerm)
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-600" />
          <h1 className="text-lg font-semibold text-gray-900">All Diet Plans</h1>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-100 rounded">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by name, contact, diet plan name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <Trash2 className="w-4 h-4" />
            <span className="text-sm">DELETE</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <UserPlus className="w-4 h-4" />
            <span className="text-sm">ASSIGN</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md">
            <Download className="w-4 h-4" />
            <span className="text-sm">DOWNLOAD EMPTY SHEET</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left p-4 w-12">
                <input
                  type="checkbox"
                  checked={selectedPlans.length === dietPlans.length}
                  onChange={handleSelectAll}
                  className="rounded border-gray-300"
                />
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-700">Name</th>
              <th className="text-left p-4 text-sm font-medium text-gray-700">Diet Plan</th>
              <th className="text-left p-4 text-sm font-medium text-gray-700">Target</th>
              <th className="text-left p-4 text-sm font-medium text-gray-700">Contact</th>
              <th className="text-left p-4 text-sm font-medium text-gray-700">Start Date</th>
              <th className="text-left p-4 text-sm font-medium text-gray-700">End Date</th>
              <th className="text-left p-4 w-20"></th>
            </tr>
          </thead>
          <tbody>
            {filteredPlans.map((plan) => (
              <tr key={plan.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={selectedPlans.includes(plan.id)}
                    onChange={() => handleSelectPlan(plan.id)}
                    className="rounded border-gray-300"
                  />
                </td>
                <td className="p-4 text-sm text-gray-900 font-medium">{plan.name}</td>
                <td className="p-4 text-sm text-gray-900">{plan.dietPlan}</td>
                <td className="p-4 text-sm text-gray-600">{plan.target}</td>
                <td className="p-4 text-sm text-gray-600">{plan.contact}</td>
                <td className="p-4 text-sm text-gray-600">{plan.startDate}</td>
                <td className="p-4 text-sm text-gray-600">{plan.endDate}</td>
                <td className="p-4">
                  <div className="flex items-center gap-1">
                    <button className="p-1 text-gray-400 hover:text-blue-600" title="Edit">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-green-600" title="View Details">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    </button>
                    <button className="p-1 text-gray-400 hover:text-red-600" title="Delete">
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {filteredPlans.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-sm font-medium text-gray-900 mb-2">No diet plans found</h3>
          <p className="text-sm text-gray-500 mb-4">
            {searchTerm ? 'Try adjusting your search terms.' : 'Get started by assigning diet plans to members.'}
          </p>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md">
            <UserPlus className="w-4 h-4" />
            Assign Diet Plan
          </button>
        </div>
      )}

      {/* Footer Info */}
      {filteredPlans.length > 0 && (
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Showing {filteredPlans.length} of {dietPlans.length} diet plan{dietPlans.length !== 1 ? 's' : ''}
            {selectedPlans.length > 0 && ` • ${selectedPlans.length} selected`}
          </p>
        </div>
      )}
    </div>
  );
};

export default AllDietPlans;
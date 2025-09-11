import { useState } from 'react';
import { Search, Trash2, Plus, Heart, Edit2, Trash, MoreHorizontal, Calendar } from 'lucide-react';

const ConfigDiet = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [favoriteStatus, setFavoriteStatus] = useState({});
  
  const [dietPlans, setDietPlans] = useState([
    {
      id: 1,
      name: 'BulkBoost 30',
      target: 'Gain 3-5 kg',
      duration: '08-Jul-2025 to 08-Aug-2025',
      isFavorite: true
    },
    {
      id: 2,
      name: 'BulkBoost 30',
      target: 'Gain 3-5 kg',
      duration: '08-Jul-2025 to 08-Aug-2025',
      isFavorite: false
    }
  ]);

  const toggleFavorite = (planId) => {
    setDietPlans(prev => 
      prev.map(plan => 
        plan.id === planId 
          ? { ...plan, isFavorite: !plan.isFavorite }
          : plan
      )
    );
  };

  const filteredPlans = dietPlans.filter(plan =>
    plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plan.target.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-600" />
          <h1 className="text-lg font-semibold text-gray-900">Master Diet Plan</h1>
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
              placeholder="Search by diet plan name, target"
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
          <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md">
            <Plus className="w-4 h-4" />
            <span className="text-sm">CREATE PLAN</span>
          </button>
        </div>
      </div>

      {/* Diet Plans Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlans.map((plan) => (
            <div key={plan.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              {/* Card Header */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => toggleFavorite(plan.id)}
                      className={`p-1 rounded transition-colors ${
                        plan.isFavorite 
                          ? 'text-red-500 hover:text-red-600' 
                          : 'text-gray-400 hover:text-red-500'
                      }`}
                    >
                      <Heart 
                        className="w-4 h-4" 
                        fill={plan.isFavorite ? 'currentColor' : 'none'}
                      />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-red-600">
                      <Trash className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Target: {plan.target}</p>
                <p className="text-sm text-blue-500">Plan Duration: {plan.duration}</p>
              </div>

              {/* Progress Bar */}
              <div className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div className="bg-blue-500 h-1 rounded-full w-1/3"></div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                    View Details
                  </button>
                  <button className="flex-1 px-3 py-2 text-xs font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors">
                    Assign Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {filteredPlans.length === 0 && (
        <div className="text-center py-16">
          <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No diet plans found</h3>
          <p className="text-sm text-gray-500 mb-6">
            {searchTerm 
              ? 'Try adjusting your search terms to find diet plans.' 
              : 'Create your first diet plan to get started with member nutrition management.'
            }
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-medium">
            <Plus className="w-5 h-5" />
            Create Diet Plan
          </button>
        </div>
      )}

      {/* Footer Stats */}
      {filteredPlans.length > 0 && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>
              Showing {filteredPlans.length} of {dietPlans.length} diet plan{dietPlans.length !== 1 ? 's' : ''}
            </span>
            <span>
              {dietPlans.filter(plan => plan.isFavorite).length} favorite{dietPlans.filter(plan => plan.isFavorite).length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfigDiet;
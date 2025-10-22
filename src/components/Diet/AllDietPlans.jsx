import { useState } from 'react';
import { Search, Trash2, UserPlus, Download, Edit2, Trash, Calendar, List, Plus, X } from 'lucide-react';

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
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPlan, setNewPlan] = useState({
    name: '',
    dietPlan: '',
    target: '',
    contact: '',
    startDate: '',
    endDate: ''
  });

  const [showEditModal, setShowEditModal] = useState(false);
  const [editPlan, setEditPlan] = useState(null);

  const handleDelete = () => {
    if (selectedPlans.length === 0) {
      alert('Please select at least one diet plan to delete.');
      return;
    }
    if (window.confirm('Are you sure you want to delete the selected diet plan(s)?')) {
      setDietPlans(prev => prev.filter(plan => !selectedPlans.includes(plan.id)));
      setSelectedPlans([]);
    }
  };

  const handleAssign = () => {
    if (selectedPlans.length === 0) {
      alert('Please select at least one diet plan to assign.');
      return;
    }
    alert(`Assigning diet plan(s) with ID(s): ${selectedPlans.join(', ')}`);
  };

  const handleEdit = (plan) => {
    setEditPlan({ ...plan });
    setShowEditModal(true);
  };

  const handleEditModalChange = (e) => {
    const { name, value } = e.target;
    setEditPlan(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditModalSubmit = (e) => {
    e.preventDefault();
    setDietPlans(prev =>
      prev.map(plan => (plan.id === editPlan.id ? { ...editPlan } : plan))
    );
    setShowEditModal(false);
    setEditPlan(null);
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
    setEditPlan(null);
  };

  const handleDeleteSingle = (planId) => {
    if (window.confirm('Are you sure you want to delete this diet plan?')) {
      setDietPlans(prev => prev.filter(plan => plan.id !== planId));
      setSelectedPlans(prev => prev.filter(id => id !== planId));
    }
  };

  const handleAdd = () => {
    setShowAddModal(true);
  };

  const handleAddModalChange = (e) => {
    const { name, value } = e.target;
    setNewPlan(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddModalSubmit = (e) => {
    e.preventDefault();
    if (
      !newPlan.name ||
      !newPlan.dietPlan ||
      !newPlan.target ||
      !newPlan.contact ||
      !newPlan.startDate ||
      !newPlan.endDate
    ) {
      alert('Please fill in all fields.');
      return;
    }
    const newId = dietPlans.length > 0 ? Math.max(...dietPlans.map(p => p.id)) + 1 : 1;
    setDietPlans([
      ...dietPlans,
      {
        id: newId,
        ...newPlan
      }
    ]);
    setShowAddModal(false);
    setNewPlan({
      name: '',
      dietPlan: '',
      target: '',
      contact: '',
      startDate: '',
      endDate: ''
    });
  };

  const handleAddModalClose = () => {
    setShowAddModal(false);
    setNewPlan({
      name: '',
      dietPlan: '',
      target: '',
      contact: '',
      startDate: '',
      endDate: ''
    });
  };

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
      <div className="bg-white border-b border-gray-200 mt-0 px-4 py-3 flex items-center shadow-sm">
        <h1 className="font-bold text-gray-800 flex items-center font-sans gap-2">
          <List /> All Diet
        </h1>
      </div>
      <div className='p-2'></div>

      {/* Controls */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by name, contact, diet plan name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-80"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            onClick={handleDelete}
          >
            <Trash2 className="w-4 h-4" />
            <span className="text-sm">DELETE</span>
          </button>
          <button
            className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            onClick={handleAssign}
          >
            <UserPlus className="w-4 h-4" />
            <span className="text-sm">ASSIGN</span>
          </button>
          <button
            className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            onClick={handleAdd}
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm">ADD</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md">
            <Download className="w-4 h-4" />
            <span className="text-sm">DOWNLOAD EMPTY SHEET</span>
          </button>
        </div>
      </div>

      
      {/* Add Diet Plan Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-white/10">
          <div className="bg-white/90 backdrop-blur-xl border border-white/30 rounded-xl shadow-2xl w-full max-w-sm p-4 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
              onClick={handleAddModalClose}
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-bold mb-3 text-gray-800">Add Diet Plan</h2>
            <form onSubmit={handleAddModalSubmit} className="space-y-3">
              {['name', 'dietPlan', 'target', 'contact', 'startDate', 'endDate'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                    {field.replace(/([A-Z])/g, ' $1')}
                  </label>
                  <input
                    type={field.includes('Date') ? 'date' : 'text'}
                    name={field}
                    value={newPlan[field]}
                    onChange={handleAddModalChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              ))}
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm"
                  onClick={handleAddModalClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-sm"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


      {/* Edit Diet Plan Modal */}
      {showEditModal && editPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-white/10">
          <div className="bg-white/80 backdrop-blur-xl border border-white/30 rounded-xl shadow-2xl w-full max-w-md p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
              onClick={handleEditModalClose}
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-bold mb-4 text-gray-800">Edit Diet Plan</h2>
            <form onSubmit={handleEditModalSubmit} className="space-y-4">
              {['name', 'dietPlan', 'target', 'contact', 'startDate', 'endDate'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                    {field.replace(/([A-Z])/g, ' $1')}
                  </label>
                  <input
                    type={field.includes('Date') ? 'date' : 'text'}
                    name={field}
                    value={editPlan[field]}
                    onChange={handleEditModalChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              ))}
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200"
                  onClick={handleEditModalClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full p-4">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left p-4 w-12">
                <input
                  type="checkbox"
                  checked={selectedPlans.length === dietPlans.length && dietPlans.length > 0}
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
                    <button
                      className="p-1 text-gray-400 hover:text-blue-600"
                      title="Edit"
                      onClick={() => handleEdit(plan)}
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      className="p-1 text-gray-400 hover:text-green-600"
                      title="View Details"
                      onClick={() => alert(`Viewing details for: ${plan.name}`)}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    </button>
                    <button
                      className="p-1 text-gray-400 hover:text-red-600"
                      title="Delete"
                      onClick={() => handleDeleteSingle(plan.id)}
                    >
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

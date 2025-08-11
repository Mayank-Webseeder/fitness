import React, { useState } from 'react';
import { 
  Users, 
  UserPlus, 
  Search, 
  Filter, 
  MoreVertical, 
  Phone, 
  Mail, 
  Calendar,
  MapPin,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';

const MembersComponent = ({ isDark }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const members = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234-567-8900',
      joinDate: '2024-01-15',
      status: 'active',
      plan: 'Premium',
      avatar: 'JD',
      location: 'New York'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      email: 'sarah@example.com',
      phone: '+1 234-567-8901',
      joinDate: '2024-02-20',
      status: 'active',
      plan: 'Basic',
      avatar: 'SW',
      location: 'California'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      phone: '+1 234-567-8902',
      joinDate: '2023-12-10',
      status: 'inactive',
      plan: 'Premium',
      avatar: 'MJ',
      location: 'Texas'
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily@example.com',
      phone: '+1 234-567-8903',
      joinDate: '2024-03-05',
      status: 'active',
      plan: 'Standard',
      avatar: 'ED',
      location: 'Florida'
    }
  ];

  const themeClasses = {
    background: isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
    text: isDark ? 'text-white' : 'text-gray-800',
    card: isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' : 'bg-white border-gray-200 shadow-lg',
    input: isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500',
    button: isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300'
  };

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || member.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status) => {
    if (status === 'active') {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Active
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
          Inactive
        </span>
      );
    }
  };

  const getPlanBadge = (plan) => {
    const colors = {
      'Premium': 'bg-purple-100 text-purple-800',
      'Standard': 'bg-blue-100 text-blue-800',
      'Basic': 'bg-gray-100 text-gray-800'
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[plan]}`}>
        {plan}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className={`text-2xl font-bold ${themeClasses.text}`}>Members Management</h1>
          <p className={`mt-1 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Manage your gym members and their subscriptions
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg">
            <UserPlus className="w-4 h-4 mr-2" />
            Add New Member
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className={`${themeClasses.card} rounded-xl p-6 border`}>
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className={`text-2xl font-bold ${themeClasses.text}`}>1,234</p>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total Members</p>
            </div>
          </div>
        </div>
        
        <div className={`${themeClasses.card} rounded-xl p-6 border`}>
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className={`text-2xl font-bold ${themeClasses.text}`}>1,180</p>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Active Members</p>
            </div>
          </div>
        </div>

        <div className={`${themeClasses.card} rounded-xl p-6 border`}>
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <Users className="w-6 h-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className={`text-2xl font-bold ${themeClasses.text}`}>54</p>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Inactive Members</p>
            </div>
          </div>
        </div>

        <div className={`${themeClasses.card} rounded-xl p-6 border`}>
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <UserPlus className="w-6 h-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className={`text-2xl font-bold ${themeClasses.text}`}>23</p>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>New This Month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className={`${themeClasses.card} rounded-xl p-6 border`}>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className={`w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
              <input
                type="text"
                placeholder="Search members by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`${themeClasses.input} rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full transition-all`}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className={`${themeClasses.input} rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <button className={`${themeClasses.button} rounded-lg px-4 py-2.5 text-sm transition-all`}>
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Members Table */}
      <div className={`${themeClasses.card} rounded-xl border overflow-hidden`}>
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className={`text-lg font-semibold ${themeClasses.text}`}>Members List</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className={isDark ? 'bg-gray-800' : 'bg-gray-50'}>
              <tr>
                <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Member
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Contact
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Plan
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Status
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Join Date
                </th>
                <th className={`px-6 py-3 text-right text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-500'} uppercase tracking-wider`}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className={`${isDark ? 'bg-gray-900' : 'bg-white'} divide-y ${isDark ? 'divide-gray-700' : 'divide-gray-200'}`}>
              {filteredMembers.map((member) => (
                <tr key={member.id} className={`${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} transition-colors`}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-white">{member.avatar}</span>
                      </div>
                      <div className="ml-4">
                        <div className={`text-sm font-medium ${themeClasses.text}`}>{member.name}</div>
                        <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} flex items-center`}>
                          <MapPin className="w-3 h-3 mr-1" />
                          {member.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm ${themeClasses.text} flex items-center mb-1`}>
                      <Mail className="w-3 h-3 mr-1" />
                      {member.email}
                    </div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} flex items-center`}>
                      <Phone className="w-3 h-3 mr-1" />
                      {member.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getPlanBadge(member.plan)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(member.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm ${themeClasses.text} flex items-center`}>
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(member.joinDate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="text-blue-600 hover:text-blue-700 p-1 rounded">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-700 p-1 rounded">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-700 p-1 rounded">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className={`${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} p-1 rounded`}>
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className={`px-6 py-4 border-t ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'} flex items-center justify-between`}>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Showing 1 to {filteredMembers.length} of {members.length} results
          </div>
          <div className="flex space-x-2">
            <button className={`${themeClasses.button} px-3 py-1 rounded text-sm`}>Previous</button>
            <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">1</button>
            <button className={`${themeClasses.button} px-3 py-1 rounded text-sm`}>2</button>
            <button className={`${themeClasses.button} px-3 py-1 rounded text-sm`}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersComponent;
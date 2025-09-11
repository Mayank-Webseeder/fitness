import React, { useState } from 'react';
import { CreditCard, Search, MessageSquare, Download, Filter, Users, CheckCircle, TrendingUp } from 'lucide-react';

const PendingBalance = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const statsData = {
    members: {
      count: 100,
      icon: <Users className="w-6 h-6 text-white" />,
      bgColor: 'bg-red-500',
      label: 'MEMBERS'
    },
    balance: {
      amount: '₹30,000',
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      bgColor: 'bg-green-500',
      label: 'BALANCE'
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <CreditCard className="w-6 h-6 text-gray-700" />
        <h1 className="text-2xl font-semibold text-gray-800">Pending Balance</h1>
      </div>

      {/* Controls Bar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex items-center justify-between gap-4">
          {/* Left side - Filter and Search */}
          <div className="flex items-center gap-4 flex-1">
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <Filter className="w-4 h-4 text-gray-600" />
            </button>
            
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by id, name or contact..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          {/* Right side - Action buttons */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium">
              <MessageSquare className="w-4 h-4" />
              MESSAGES
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
              <Download className="w-4 h-4" />
              EXPORT
            </button>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Members Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-full ${statsData.members.bgColor}`}>
                {statsData.members.icon}
              </div>
              <div className="text-right">
                <TrendingUp className="w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                {statsData.members.label}
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {statsData.members.count}
              </p>
            </div>
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-full ${statsData.balance.bgColor}`}>
                {statsData.balance.icon}
              </div>
              <div className="text-right">
                <TrendingUp className="w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                {statsData.balance.label}
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {statsData.balance.amount}
              </p>
            </div>
          </div>
        </div>

        {/* Empty placeholder cards to maintain layout */}
        <div className="hidden lg:block"></div>
        <div className="hidden lg:block"></div>
      </div>

      {/* Content Area - Empty State */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-12">
        <div className="text-center text-gray-500">
          <CreditCard className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No pending balances found</h3>
          <p className="text-sm text-gray-600">
            {searchTerm 
              ? "Try adjusting your search criteria to find pending balances."
              : "All members have cleared their balances or no data is available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PendingBalance;
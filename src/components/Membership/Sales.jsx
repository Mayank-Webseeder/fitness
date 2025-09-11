import React, { useState } from 'react';
import { BarChart3, Search, Download, Filter, Users, CheckCircle, TrendingUp, ShoppingBag } from 'lucide-react';

const Sales = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const statsData = [
    {
      label: 'MEMBERS',
      value: '100',
      icon: <Users className="w-6 h-6 text-white" />,
      bgColor: 'bg-red-500'
    },
    {
      label: 'PAID',
      value: '₹30,000',
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      bgColor: 'bg-green-500'
    },
    {
      label: 'SALES',
      value: '₹15,000',
      icon: <ShoppingBag className="w-6 h-6 text-white" />,
      bgColor: 'bg-orange-500'
    }
  ];

  const salesData = [
    {
      id: '#1',
      name: 'Samruddhi',
      gender: 'Female',
      contact: '91-1234567890',
      membership: 'FITNESS-1M 01-Jun-2025 to 01-Jul-2026',
      by: 'Admin',
      sales: '₹12,000',
      collection: '₹2000.00',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: '#2',
      name: 'Nikhil',
      gender: 'Male',
      contact: '91-1234567890',
      membership: 'PT 1 Month',
      by: 'Raj',
      sales: '₹2,000',
      collection: '₹3000.00',
      avatar: '/api/placeholder/40/40'
    }
  ];

  const totals = {
    sales: '₹14,000',
    collection: '₹14,000.00'
  };

  const filteredSales = salesData.filter(sale =>
    sale.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sale.contact.includes(searchTerm) ||
    sale.id.includes(searchTerm)
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <BarChart3 className="w-6 h-6 text-gray-700" />
        <h1 className="text-2xl font-semibold text-gray-800">Sales</h1>
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

          {/* Right side - Export button */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
              <Download className="w-4 h-4" />
              EXPORT
            </button>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {statsData.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  {stat.icon}
                </div>
                <div className="text-right">
                  <TrendingUp className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sales Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Table Header */}
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="w-12 px-4 py-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">ID</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Contact</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Membership</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">By</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Sales</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Collection</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200">
              {filteredSales.map((sale, index) => (
                <tr key={sale.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">{sale.id}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                        {sale.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{sale.name}</div>
                        <div className="text-xs text-gray-500">{sale.gender}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">{sale.contact}</td>
                  <td className="px-4 py-4 text-sm text-gray-900">{sale.membership}</td>
                  <td className="px-4 py-4 text-sm text-gray-900">{sale.by}</td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">{sale.sales}</td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">{sale.collection}</td>
                </tr>
              ))}

              {/* Totals Row */}
              <tr className="bg-gray-50 border-t-2 border-gray-200 font-medium">
                <td className="px-4 py-4"></td>
                <td className="px-4 py-4"></td>
                <td className="px-4 py-4"></td>
                <td className="px-4 py-4"></td>
                <td className="px-4 py-4"></td>
                <td className="px-4 py-4 text-sm font-semibold text-gray-900">Total</td>
                <td className="px-4 py-4 text-sm font-semibold text-gray-900">{totals.sales}</td>
                <td className="px-4 py-4 text-sm font-semibold text-green-600">{totals.collection}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredSales.length === 0 && (
          <div className="px-4 py-8 text-center text-gray-500">
            <BarChart3 className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p className="text-lg font-medium">No sales found</p>
            <p className="text-sm">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Footer Info */}
      {filteredSales.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredSales.length} of {salesData.length} sales records
        </div>
      )}
    </div>
  );
};

export default Sales;
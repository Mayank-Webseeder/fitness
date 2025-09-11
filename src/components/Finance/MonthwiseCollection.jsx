import React, { useState } from 'react';
import { Calendar, Search, Download, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const MonthwiseCollection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Payment modes data with colors matching the design
  const paymentModes = [
    { name: 'Cash', amount: '₹12,000', color: 'bg-red-500' },
    { name: 'Card', amount: '₹40,000', color: 'bg-teal-500' },
    { name: 'Paytm', amount: '₹80,000', color: 'bg-blue-500' },
    { name: 'Google Pay', amount: '₹85,000', color: 'bg-purple-500' },
    { name: 'Phone Pay', amount: '₹60,000', color: 'bg-pink-500' }
  ];

  // Chart data for months
  const chartData = [
    { name: 'JAN', value: 30 },
    { name: 'FEB', value: 20 },
    { name: 'MAR', value: 40 },
    { name: 'APR', value: 35 },
    { name: 'MAY', value: 55 },
    { name: 'JUN', value: 45 },
    { name: 'JUL', value: 60 },
    { name: 'AUG', value: 70 }
  ];

  // Monthly collection data
  const monthlyData = [
    { 
      month: 'JUL-2025', 
      amount: '₹12,000.00',
      payments: [
        { mode: 'Google Pay', amount: '₹10,000.00', icon: '🟡' },
        { mode: 'PhonePe', amount: '₹6,000.00', icon: '🟣' },
        { mode: 'GPay', amount: '₹12,000.00', icon: '🔵' }
      ]
    },
    { 
      month: 'Jun-2025', 
      amount: '₹8,000.00',
      payments: [
        { mode: 'PhonePe', amount: '₹10,000.00', icon: '🟣' },
        { mode: 'Card', amount: '₹3,000.00', icon: '🟨' },
        { mode: 'GPay', amount: '₹5,000.00', icon: '🔵' }
      ]
    },
    { 
      month: 'May-2025', 
      amount: '₹20,000.00',
      payments: [
        { mode: 'GPay', amount: '₹6,000.00', icon: '🔵' },
        { mode: 'Paytm', amount: '₹18,000.00', icon: '🔵' }
      ]
    },
    { 
      month: 'APR-2025', 
      amount: '₹8,000.00',
      payments: [
        { mode: 'PhonePe', amount: '₹18,000.00', icon: '🟣' }
      ]
    },
    { 
      month: 'MAR-2025', 
      amount: '₹5,000.00',
      payments: [
        { mode: 'Card', amount: '₹17,000.00', icon: '🟨' }
      ]
    },
    { 
      month: 'FEB-2025', 
      amount: '₹5,000.00',
      payments: [
        { mode: 'Card', amount: '₹14,000.00', icon: '🟨' }
      ]
    },
    { 
      month: 'JAN-2025', 
      amount: '₹8,000.00',
      payments: [
        { mode: 'Paytm', amount: '₹12,000.00', icon: '🔵' }
      ]
    }
  ];

  const filteredData = monthlyData.filter(item =>
    item.month.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="w-6 h-6 text-gray-700" />
        <h1 className="text-2xl font-semibold text-gray-800">Monthwise Collection</h1>
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
                placeholder="Search by date..."
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Payment Modes Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">Payment Modes</h3>
          <div className="space-y-4">
            {paymentModes.map((mode, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-2 rounded-full ${mode.color}`}></div>
                  <span className="text-sm text-gray-700">{mode.name}</span>
                </div>
                <span className="text-sm font-semibold text-blue-600">{mode.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Collection Chart Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Collection</h3>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">Month</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>
          
          {/* Y-axis labels */}
          <div className="flex justify-end mb-2">
            <div className="text-xs text-gray-500 space-y-4">
              <div>100k</div>
              <div>50k</div>
              <div>0</div>
            </div>
          </div>
          
          <div className="h-40 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  fill="url(#colorGradient)" 
                />
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: '#6b7280' }}
                />
                <YAxis hide />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="text-center">
            <div className="text-sm text-gray-500">Top month</div>
            <div className="text-2xl font-bold text-orange-600 mt-1">November</div>
            <div className="text-sm text-orange-500">2019</div>
          </div>
        </div>
      </div>

      {/* Month Collection Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Month Collection</h3>
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronLeft className="w-5 h-5 text-gray-400" />
              </button>
              <span className="text-sm text-blue-600 font-medium">JULY 2025</span>
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Table Header */}
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Month</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Payment Mode</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200">
              {filteredData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {item.month}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {item.amount}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      {item.payments.map((payment, paymentIndex) => (
                        <div key={paymentIndex} className="flex items-center gap-1">
                          <span className="text-sm">{payment.icon}</span>
                          <span className="text-xs text-gray-600">{payment.amount}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredData.length === 0 && (
          <div className="px-4 py-8 text-center text-gray-500">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p className="text-lg font-medium">No monthly collections found</p>
            <p className="text-sm">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MonthwiseCollection;
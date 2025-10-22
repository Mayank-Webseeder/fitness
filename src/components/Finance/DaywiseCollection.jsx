import React, { useState } from 'react';
import { Calendar, Search, Download, Filter, ChevronLeft, ChevronRight, CreditCard, Smartphone, Wallet, Sun } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart,} from 'recharts';

const DaywiseCollection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Payment modes data with colors matching the design
  const paymentModes = [
    { name: 'Cash', amount: '₹12,000', color: 'bg-red-500' },
    { name: 'Card', amount: '₹40,000', color: 'bg-teal-500' },
    { name: 'Paytm', amount: '₹80,000', color: 'bg-blue-500' },
    { name: 'Google Pay', amount: '₹85,000', color: 'bg-purple-500' },
    { name: 'Phone Pay', amount: '₹60,000', color: 'bg-pink-500' }
  ];

  // Sample chart data
  const chartData = [
    { name: 'Day 1', value: 20 },
    { name: 'Day 2', value: 35 },
    { name: 'Day 3', value: 25 },
    { name: 'Day 4', value: 45 },
    { name: 'Day 5', value: 60 },
    { name: 'Day 6', value: 55 },
    { name: 'Day 7', value: 70 }
  ];

  // Daywise collection data
  const daywiseData = [
    { date: '01-JUL-2025', amount: '₹12,000.00', paymentMode: 'Google Pay', paymentIcon: '🟡', hasPayment: true },
    { date: '02-JUL-2025', amount: '₹8,000.00', paymentMode: 'PhonePe', paymentIcon: '🟣', hasPayment: true },
    { date: '03-JUL-2025', amount: '₹20,000.00', paymentMode: 'GPay', paymentIcon: '🟡', hasPayment: false },
    { date: '01-AUG-2025', amount: '', paymentMode: '', paymentIcon: '', hasPayment: false },
    { date: '02-AUG-2025', amount: '', paymentMode: '', paymentIcon: '', hasPayment: false },
    { date: '03-AUG-2025', amount: '₹5,000.00', paymentMode: 'Card', paymentIcon: '🟨', hasPayment: true },
    { date: '04-AUG-2025', amount: '', paymentMode: '', paymentIcon: '', hasPayment: false },
    { date: '05-AUG-2025', amount: '₹10,000.00', paymentMode: 'Paytm', paymentIcon: '🔵', hasPayment: true },
    { date: '06-AUG-2025', amount: '', paymentMode: '', paymentIcon: '', hasPayment: false },
    { date: '01-SEP-2025', amount: '', paymentMode: '', paymentIcon: '', hasPayment: false }
  ];

  const filteredData = daywiseData.filter(item =>
    item.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200 mt-0 px-4 py-3 flex items-center shadow-sm">
        <h1 className=" font-bold text-gray-800 flex items-center font-sans gap-2 ">
          <Sun /> Daywise Collection
        </h1>
      </div>
      
      <div className="p-6 bg-gray-50 min-h-screen">
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
            <div className="text-xs text-gray-500">100k, 50k, 0</div>
          </div>
          <div className="h-48 mb-4">
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
                <XAxis hide />
                <YAxis hide />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-500">Today</div>
            <div className="text-2xl font-bold text-gray-900 mt-1">14 July 2025</div>
            <div className="text-sm text-gray-500">12% Today Collection</div>
          </div>
        </div>
      </div>

      {/* Daywise Collection Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Daywise Collection</h3>
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
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Payment Mode</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200">
              {filteredData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    {item.hasPayment ? (
                      <span className="inline-flex px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        {item.date}
                      </span>
                    ) : (
                      <span className="text-sm text-gray-500">{item.date}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {item.amount}
                  </td>
                  <td className="px-6 py-4">
                    {item.hasPayment && (
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{item.paymentIcon}</span>
                        <span className="text-sm text-gray-900">{item.paymentMode}</span>
                      </div>
                    )}
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
            <p className="text-lg font-medium">No collections found</p>
            <p className="text-sm">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default DaywiseCollection;
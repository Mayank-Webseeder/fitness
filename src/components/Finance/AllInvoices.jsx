import React, { useState } from 'react';
import { FileText, Search, Download, Filter, TrendingUp, MoreVertical } from 'lucide-react';

const AllInvoices = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const statsData = [
    {
      label: 'INVOICES',
      value: '100',
      icon: <FileText className="w-6 h-6 text-white" />,
      bgColor: 'bg-pink-500'
    },
    {
      label: 'COLLECTION',
      value: '₹30,000',
      icon: <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>,
      bgColor: 'bg-green-500'
    }
  ];

  const invoiceData = [
    {
      id: '#1',
      member: 'Samruddhi',
      gender: 'Female',
      contact: '91-1234567890',
      txn: '07-Jul-2025',
      membership: 'FITNESS 1M 01-Jun-2025 to 01-Jul-2026',
      amount: '₹12,000',
      by: 'Admin',
      paymentStatus: 'G Pay',
      paymentColor: 'text-blue-600'
    },
    {
      id: '#2',
      member: 'Nikhil',
      gender: 'Male',
      contact: '91-1234567890',
      txn: '07-Jul-2025',
      membership: 'FITNESS 1M 01-Jun-2025 to 01-Jul-2026',
      amount: '₹2,000',
      by: 'Raj',
      paymentStatus: 'Raj',
      paymentColor: 'text-gray-900'
    }
  ];

  const totalAmount = '₹14,000';

  const filteredInvoices = invoiceData.filter(invoice =>
    invoice.member.toLowerCase().includes(searchTerm.toLowerCase()) ||
    invoice.contact.includes(searchTerm) ||
    invoice.id.includes(searchTerm)
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <FileText className="w-6 h-6 text-gray-700" />
        <h1 className="text-2xl font-semibold text-gray-800">Manage Invoices</h1>
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
                placeholder="Search by id, name..."
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsData.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border-2 border-blue-400 overflow-hidden">
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

      {/* Invoices Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Table Header */}
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">By</th>
                <th className="w-12 px-4 py-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">INVOICE</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Member</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Contact</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">TXN</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Membership</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Amount</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">By</th>
                <th className="w-12 px-4 py-3"></th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200">
              {filteredInvoices.map((invoice, index) => (
                <tr key={invoice.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <span className={`text-sm font-medium ${invoice.paymentColor}`}>
                      {invoice.paymentStatus}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900 font-medium">{invoice.id}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                        {invoice.member.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{invoice.member}</div>
                        <div className="text-xs text-gray-500">{invoice.gender}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">{invoice.contact}</td>
                  <td className="px-4 py-4 text-sm text-gray-900">{invoice.txn}</td>
                  <td className="px-4 py-4 text-sm text-gray-900 max-w-xs">
                    <div className="truncate">{invoice.membership}</div>
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">{invoice.amount}</td>
                  <td className="px-4 py-4 text-sm text-gray-900">{invoice.by}</td>
                  <td className="px-4 py-4">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreVertical className="w-4 h-4 text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}

              {/* Total Row */}
              <tr className="bg-gray-50 border-t-2 border-gray-200 font-medium">
                <td className="px-4 py-4"></td>
                <td className="px-4 py-4"></td>
                <td className="px-4 py-4"></td>
                <td className="px-4 py-4"></td>
                <td className="px-4 py-4"></td>
                <td className="px-4 py-4"></td>
                <td className="px-4 py-4"></td>
                <td className="px-4 py-4 text-sm font-semibold text-green-600">{totalAmount}</td>
                <td className="px-4 py-4"></td>
                <td className="px-4 py-4"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredInvoices.length === 0 && (
          <div className="px-4 py-8 text-center text-gray-500">
            <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p className="text-lg font-medium">No invoices found</p>
            <p className="text-sm">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Footer Info */}
      {filteredInvoices.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredInvoices.length} of {invoiceData.length} invoices
        </div>
      )}
    </div>
  );
};

export default AllInvoices;
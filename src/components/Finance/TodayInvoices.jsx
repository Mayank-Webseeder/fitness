import React, { useState } from 'react';
import { FileText, Search, Download, Filter, TrendingUp, MoreVertical, Circle, CalendarDays } from 'lucide-react';

const TodayInvoices = () => {
  const [searchTerm, setSearchTerm] = useState('');

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

  // CSV Export Function
  const handleExportCSV = () => {
    const headers = [
      'Invoice ID',
      'Member',
      'Gender',
      'Contact',
      'Txn Date',
      'Membership',
      'Amount',
      'By',
      'Payment Status'
    ];
    const rows = filteredInvoices.map(inv => [
      inv.id,
      inv.member,
      inv.gender,
      inv.contact,
      inv.txn,
      inv.membership,
      inv.amount,
      inv.by,
      inv.paymentStatus
    ]);
    let csvContent = '';
    csvContent += headers.join(',') + '\n';
    rows.forEach(row => {
      csvContent += row.map(field => `"${String(field).replace(/"/g, '""')}"`).join(',') + '\n';
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'invoices.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-white border-b border-gray-200 mt-0 px-4 py-3 flex items-center shadow-sm">
        <h1 className=" font-bold text-gray-800 flex items-center font-sans gap-2 ">
          <CalendarDays /> Today Invoices
        </h1>
      </div>
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Controls Bar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6 ">
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
              <button
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
                onClick={handleExportCSV}
              >
                <Download className="w-4 h-4" />
                EXPORT
              </button>
            </div>
          </div>
        </div>

        {/* Blocks Section */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Invoices */}
          <div className="flex justify-between gap-4 bg-white shadow-md p-6 rounded-2xl">
            <div className="flex items-center gap-3 justify-between w-full">
              
              <div>
                <p className="text-sm text-gray-600 font-medium">INVOICES</p>
                <h2 className="text-2xl font-bold text-gray-900">100</h2>
              </div>
              <div className="w-12 h-12 rounded-xl bg-pink-500 flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
            </div>
            
          </div>

          {/* Collection */}
          <div className="flex justify-between gap-4 bg-white shadow-md p-6 rounded-2xl">
            <div className="flex items-center gap-3 justify-between w-full">
              
              <div>
                <p className="text-sm text-gray-600 font-medium">COLLECTION</p>
                <h2 className="text-2xl font-bold text-gray-900">₹30,000</h2>
              </div>

              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                <Circle className="h-6 w-6 text-white" />
              </div>
            </div>
            
          </div>
        </div>

        {/* Invoices Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full" style={{ minHeight: 'auto', height: 'auto' }}>
          <div>
            <table className="w-full">
              {/* Table Header */}
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-700">By</th>
                  <th className="w-8 px-2 py-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </th>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-700">INVOICE</th>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-700">Member</th>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-700">Contact</th>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-700">TXN</th>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-700">Membership</th>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-700">Amount</th>
                  <th className="px-2 py-2 text-left text-xs font-medium text-gray-700">By</th>
                  <th className="w-8 px-2 py-2"></th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-200">
                {filteredInvoices.map((invoice, index) => (
                  <tr key={invoice.id} className="hover:bg-gray-50">
                    <td className="px-2 py-2">
                      <span className={`text-xs font-medium ${invoice.paymentColor}`}>
                        {invoice.paymentStatus}
                      </span>
                    </td>
                    <td className="px-2 py-2">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </td>
                    <td className="px-2 py-2 text-xs text-gray-900 font-medium">{invoice.id}</td>
                    <td className="px-2 py-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-xs">
                          {invoice.member.charAt(0)}
                        </div>
                        <div>
                          <div className="text-xs font-medium text-gray-900">{invoice.member}</div>
                          <div className="text-[10px] text-gray-500">{invoice.gender}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-2 py-2 text-xs text-gray-900">{invoice.contact}</td>
                    <td className="px-2 py-2 text-xs text-gray-900">{invoice.txn}</td>
                    <td className="px-2 py-2 text-xs text-gray-900 max-w-xs">
                      <div className="truncate">{invoice.membership}</div>
                    </td>
                    <td className="px-2 py-2 text-xs font-medium text-gray-900">{invoice.amount}</td>
                    <td className="px-2 py-2 text-xs text-gray-900">{invoice.by}</td>
                    <td className="px-2 py-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                    </td>
                  </tr>
                ))}

                {/* Total Row */}
                <tr className="bg-gray-50 border-t-2 border-gray-200 font-medium">
                  <td className="px-2 py-2"></td>
                  <td className="px-2 py-2"></td>
                  <td className="px-2 py-2"></td>
                  <td className="px-2 py-2"></td>
                  <td className="px-2 py-2"></td>
                  <td className="px-2 py-2"></td>
                  <td className="px-2 py-2"></td>
                  <td className="px-2 py-2 text-xs font-semibold text-green-600">{totalAmount}</td>
                  <td className="px-2 py-2"></td>
                  <td className="px-2 py-2"></td>
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
    </div>
  );
};

export default TodayInvoices;
import { useState } from 'react';
import { Search, Download, FileText, PieChart } from 'lucide-react';

const Summary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const summaryCards = [
    {
      title: 'PAYMENT',
      amount: '₹30,000',
      icon: '✓',
      bgColor: 'bg-green-500',
      textColor: 'text-green-600'
    },
    {
      title: 'EXPENSES',
      amount: '₹5,000',
      icon: '₹',
      bgColor: 'bg-red-500',
      textColor: 'text-red-600'
    },
    {
      title: 'PROFIT',
      amount: '₹15,000',
      icon: '₹',
      bgColor: 'bg-green-500',
      textColor: 'text-green-600'
    }
  ];

  const memberTransactions = [
    {
      id: 1,
      member: 'Samruddhi',
      gender: 'Female',
      txn: '07-Jul-2025',
      amount: '₹12,000'
    },
    {
      id: 2,
      member: 'Nikhil',
      gender: 'Male',
      txn: '06-Jul-2025',
      amount: '₹2,000'
    }
  ];

  const expenseTransactions = [
    {
      id: 1,
      description: 'Googlepay',
      date: '07-Jul-2025',
      amount: '₹6,000'
    },
    {
      id: 2,
      description: 'Phonepay',
      date: '06-Jul-2025',
      amount: '₹2,000'
    }
  ];

  const calculateMemberTotal = () => {
    return memberTransactions.reduce((total, transaction) => {
      const amount = parseInt(transaction.amount.replace('₹', '').replace(',', ''));
      return total + amount;
    }, 0);
  };

  const calculateExpenseTotal = () => {
    return expenseTransactions.reduce((total, transaction) => {
      const amount = parseInt(transaction.amount.replace('₹', '').replace(',', ''));
      return total + amount;
    }, 0);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 mt-0 px-4 py-3 flex items-center shadow-sm">
        <h1 className=" font-bold text-gray-800 flex items-center font-sans gap-2 ">
          <PieChart /> Finance Summary
        </h1>
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
              placeholder="Search by description or amount..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
          </div>
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md">
          <Download className="w-4 h-4" />
          <span className="text-sm">EXPORT</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {summaryCards.map((card, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 ${card.bgColor} rounded-full flex items-center justify-center text-white font-bold`}>
                  {card.icon}
                </div>
                <span className="text-sm font-medium text-gray-600">{card.title}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-2xl font-bold ${card.textColor}`}>{card.amount}</span>
                <span className="text-gray-400">₹</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Member Transactions Table */}
          <div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-3 text-sm font-medium text-gray-700">Member</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-700">TXN</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-700">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {memberTransactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b border-gray-100">
                      <td className="p-3">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{transaction.member}</div>
                          <div className="text-xs text-gray-500">{transaction.gender}</div>
                        </div>
                      </td>
                      <td className="p-3 text-sm text-gray-600">{transaction.txn}</td>
                      <td className="p-3 text-sm text-gray-900">{transaction.amount}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-gray-300 bg-gray-50">
                    <td className="p-3 text-sm font-medium text-gray-700">TOTAL</td>
                    <td className="p-3"></td>
                    <td className="p-3 text-sm font-bold text-green-600">₹{calculateMemberTotal().toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Expense Transactions Table */}
          <div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-3 text-sm font-medium text-gray-700">Description</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-700">Date</th>
                    <th className="text-left p-3 text-sm font-medium text-gray-700">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {expenseTransactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b border-gray-100">
                      <td className="p-3 text-sm text-gray-900">{transaction.description}</td>
                      <td className="p-3 text-sm text-gray-600">{transaction.date}</td>
                      <td className="p-3 text-sm text-gray-900">{transaction.amount}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-gray-300 bg-gray-50">
                    <td className="p-3 text-sm font-medium text-gray-700">TOTAL</td>
                    <td className="p-3"></td>
                    <td className="p-3 text-sm font-bold text-red-600">₹{calculateExpenseTotal().toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
import { useState } from 'react';
import { Search, Download, Trash2, Plus, Edit2, Trash } from 'lucide-react';

const Expenses = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: 'GooglePay',
      date: '08-Jul-2025',
      by: 'Admin',
      amount: '₹5,000'
    }
  ]);

  const [selectedExpenses, setSelectedExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedExpenses(expenses.map(expense => expense.id));
    } else {
      setSelectedExpenses([]);
    }
  };

  const handleSelectExpense = (expenseId) => {
    setSelectedExpenses(prev => 
      prev.includes(expenseId) 
        ? prev.filter(id => id !== expenseId)
        : [...prev, expenseId]
    );
  };

  const calculateTotal = () => {
    return expenses.reduce((total, expense) => {
      const amount = parseInt(expense.amount.replace('₹', '').replace(',', ''));
      return total + amount;
    }, 0);
  };

  const filteredExpenses = expenses.filter(expense =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.amount.includes(searchTerm)
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gray-100 rounded">
            <div className="w-4 h-4 border-2 border-gray-600 rounded-sm"></div>
          </div>
          <h1 className="text-lg font-semibold text-gray-900">Expenses</h1>
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
              placeholder="Search by description or amount..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <Download className="w-4 h-4" />
            <span className="text-sm">EXPORT</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <Trash2 className="w-4 h-4" />
            <span className="text-sm">DELETE</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md">
            <Plus className="w-4 h-4" />
            <span className="text-sm">ADD</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left p-4 w-12">
                <input
                  type="checkbox"
                  checked={selectedExpenses.length === expenses.length}
                  onChange={handleSelectAll}
                  className="rounded border-gray-300"
                />
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-700">Description</th>
              <th className="text-left p-4 text-sm font-medium text-gray-700">Date</th>
              <th className="text-left p-4 text-sm font-medium text-gray-700">By</th>
              <th className="text-left p-4 text-sm font-medium text-gray-700">Amount</th>
              <th className="text-left p-4 w-16"></th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((expense) => (
              <tr key={expense.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={selectedExpenses.includes(expense.id)}
                    onChange={() => handleSelectExpense(expense.id)}
                    className="rounded border-gray-300"
                  />
                </td>
                <td className="p-4 text-sm text-gray-900">{expense.description}</td>
                <td className="p-4 text-sm text-gray-600">{expense.date}</td>
                <td className="p-4 text-sm text-gray-600">{expense.by}</td>
                <td className="p-4 text-sm text-gray-900">{expense.amount}</td>
                <td className="p-4">
                  <div className="flex items-center gap-1">
                    <button className="p-1 text-gray-400 hover:text-gray-600">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-red-600">
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            
            {/* Total Row */}
            <tr className="border-b-2 border-gray-200 bg-gray-50">
              <td className="p-4"></td>
              <td className="p-4"></td>
              <td className="p-4"></td>
              <td className="p-4 text-sm font-medium text-gray-700">TOTAL</td>
              <td className="p-4 text-sm font-semibold text-red-600">₹{calculateTotal().toLocaleString()}</td>
              <td className="p-4">
                <div className="flex items-center gap-1">
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-red-600">
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Expenses;
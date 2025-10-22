import { useState } from 'react';
import { Search, Download, Trash2, Plus, Edit2, Trash, FileText, MinusCircle } from 'lucide-react';

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
      <div className="bg-white border-b border-gray-200 mt-0 px-4 py-3 flex items-center shadow-sm">
        <h1 className="font-bold text-gray-800 flex items-center font-sans gap-2">
          <MinusCircle/> Expenses
        </h1>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-100 rounded">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
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

      {/* Redesigned Table Layout */}
      <div className="p-4">
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <div className="grid grid-cols-5 bg-gray-50 text-sm font-medium text-gray-700 px-4 py-2 border-b border-b-gray-300">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedExpenses.length === expenses.length}
                onChange={handleSelectAll}
                className="rounded border-gray-300"
              />
              Description
            </div>
            <div>Date</div>
            <div>By</div>
            <div>Amount</div>
            <div className="text-center">Actions</div>
          </div>

          {filteredExpenses.map((expense) => (
            <div
              key={expense.id}
              className="grid grid-cols-5 items-center px-4 py-3 border-b border-b-gray-300 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedExpenses.includes(expense.id)}
                  onChange={() => handleSelectExpense(expense.id)}
                  className="rounded border-gray-300"
                />
                <div>
                  <p className="text-gray-900 text-sm font-medium">{expense.description}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{expense.date}</p>
              <p className="text-gray-600 text-sm">{expense.by}</p>
              <p className="text-gray-900 text-sm font-semibold">{expense.amount}</p>
              <div className="flex justify-center gap-2">
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="p-1 text-gray-400 hover:text-red-600">
                  <Trash className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {/* Total Row */}
          <div className="grid grid-cols-5 bg-gray-50 font-medium px-4 py-3 border-t">
            <div></div>
            <div></div>
            <div className="text-right text-gray-700 col-span-2">TOTAL</div>
            <div className="text-green-600 font-semibold">
              ₹{calculateTotal().toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;

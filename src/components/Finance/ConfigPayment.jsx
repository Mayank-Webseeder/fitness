import { useState } from 'react';
import { Search, Trash2, Plus, MoreHorizontal, CreditCard, Settings } from 'lucide-react';

const ConfigPayment = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPayments, setSelectedPayments] = useState([]);
  
  const [paymentModes, setPaymentModes] = useState([
    {
      id: 1,
      membership: '💳',
      mode: 'Cash',
      icon: '💳'
    },
    {
      id: 2,
      membership: '💳',
      mode: 'Card',
      icon: '💳'
    },
    {
      id: 3,
      membership: '💳',
      mode: 'Paytm',
      icon: '💳'
    },
    {
      id: 4,
      membership: '💳',
      mode: 'Google Pay',
      icon: '💳'
    },
    {
      id: 5,
      membership: '💳',
      mode: 'PhonePe',
      icon: '💳'
    }
  ]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedPayments(paymentModes.map(payment => payment.id));
    } else {
      setSelectedPayments([]);
    }
  };

  const handleSelectPayment = (paymentId) => {
    setSelectedPayments(prev => 
      prev.includes(paymentId) 
        ? prev.filter(id => id !== paymentId)
        : [...prev, paymentId]
    );
  };

  const filteredPayments = paymentModes.filter(payment =>
    payment.mode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderPaymentIcon = (iconText) => {
    if (iconText === 'PayTM') {
      return (
        <div className="w-8 h-8 bg-blue-600 text-white text-xs font-bold rounded flex items-center justify-center">
          PayTM
        </div>
      );
    } else if (iconText === 'G Pay') {
      return (
        <div className="w-8 h-8 bg-green-600 text-white text-xs font-bold rounded flex items-center justify-center">
          G Pay
        </div>
      );
    } else if (iconText === '$') {
      return (
        <div className="w-8 h-8 bg-purple-600 text-white text-lg font-bold rounded flex items-center justify-center">
          $
        </div>
      );
    } else {
      return <span className="text-2xl">{iconText}</span>;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      
      <div className="bg-white border-b border-gray-200 mt-0 px-4 py-3 flex items-center shadow-sm">
        <h1 className=" font-bold text-gray-800 flex items-center font-sans gap-2 ">
          <Settings/> Payment Modes
        </h1>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search by payment mode name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
          />
        </div>
        
        <div className="flex items-center gap-2">
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
                  checked={selectedPayments.length === paymentModes.length}
                  onChange={handleSelectAll}
                  className="rounded border-gray-300"
                />
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-700">Membership</th>
              <th className="text-left p-4 text-sm font-medium text-gray-700">Mode</th>
              <th className="text-left p-4 w-16"></th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map((payment) => (
              <tr key={payment.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={selectedPayments.includes(payment.id)}
                    onChange={() => handleSelectPayment(payment.id)}
                    className="rounded border-gray-300"
                  />
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-center w-12">
                    {renderPaymentIcon(payment.membership)}
                  </div>
                </td>
                <td className="p-4 text-sm text-gray-900">{payment.mode}</td>
                <td className="p-4">
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {filteredPayments.length === 0 && (
        <div className="text-center py-12">
          <CreditCard className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-sm font-medium text-gray-900 mb-2">No payment modes found</h3>
          <p className="text-sm text-gray-500 mb-4">
            {searchTerm ? 'Try adjusting your search terms.' : 'Get started by adding a payment mode.'}
          </p>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md">
            <Plus className="w-4 h-4" />
            Add Payment Mode
          </button>
        </div>
      )}
    </div>
  );
};

export default ConfigPayment;
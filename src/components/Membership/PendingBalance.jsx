import React, { useState } from "react";
import {
  CreditCard,
  Search,
  MessageSquare,
  Download,
  Filter,
  Users,
  CheckCircle,
  Edit,
  PlusCircle,
  X,
} from "lucide-react";

const PendingBalance = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [members, setMembers] = useState([
    { id: 1, name: "Harsh Devda", contact: "9876543210", balance: "₹5000" },
    { id: 2, name: "Riya Singh", contact: "9123456789", balance: "₹2000" },
    { id: 3, name: "Aman Patel", contact: "9988776655", balance: "₹3000" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({ id: "", name: "", contact: "", balance: "" });

  const statsData = {
    members: {
      count: members.length,
      icon: Users,
      bgColor: "from-blue-500 to-blue-600",
      label: "MEMBERS",
    },
    balance: {
      amount: "₹30,000",
      icon: CheckCircle,
      bgColor: "from-green-500 to-green-600",
      label: "BALANCE",
    },
  };

  // Export CSV
  const handleExportCSV = () => {
    const headers = ["ID", "Name", "Contact", "Balance"];
    const rows = members.map((m) => [m.id, m.name, m.contact, m.balance]);
    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((e) => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.href = encodedUri;
    link.download = "pending_balance.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Add & Edit handlers
  const handleAdd = () => {
    setIsEditMode(false);
    setFormData({ id: "", name: "", contact: "", balance: "" });
    setShowModal(true);
  };

  const handleEdit = (member) => {
    setIsEditMode(true);
    setFormData(member);
    setShowModal(true);
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact || !formData.balance) {
      alert("Please fill all fields.");
      return;
    }

    if (isEditMode) {
      setMembers((prev) =>
        prev.map((m) => (m.id === formData.id ? formData : m))
      );
    } else {
      const newMember = { ...formData, id: members.length + 1 };
      setMembers((prev) => [...prev, newMember]);
    }

    setShowModal(false);
  };

  // Input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <CreditCard className="w-6 h-6 text-gray-700" />
        <h1 className="text-2xl font-semibold text-gray-800">
          Pending Balance
        </h1>
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
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium"
            >
              <PlusCircle className="w-4 h-4" />
              ADD
            </button>
            <button
              onClick={handleExportCSV}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              EXPORT
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        {members.filter(
          (m) =>
            m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            m.contact.includes(searchTerm) ||
            m.id.toString().includes(searchTerm)
        ).length > 0 ? (
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="text-left p-3 border">ID</th>
                <th className="text-left p-3 border">Name</th>
                <th className="text-left p-3 border">Contact</th>
                <th className="text-left p-3 border">Balance</th>
                <th className="text-center p-3 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {members
                .filter(
                  (m) =>
                    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    m.contact.includes(searchTerm) ||
                    m.id.toString().includes(searchTerm)
                )
                .map((member) => (
                  <tr key={member.id} className="hover:bg-gray-50">
                    <td className="p-3 border">{member.id}</td>
                    <td className="p-3 border">{member.name}</td>
                    <td className="p-3 border">{member.contact}</td>
                    <td className="p-3 border">{member.balance}</td>
                    <td className="p-3 border text-center">
                      <button
                        onClick={() => handleEdit(member)}
                        className="flex items-center justify-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md px-3 py-1 text-xs font-medium"
                      >
                        <Edit className="w-4 h-4" />
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center text-gray-500 p-12">
            <CreditCard className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No pending balances found
            </h3>
            <p className="text-sm text-gray-600">
              {searchTerm
                ? "Try adjusting your search criteria to find pending balances."
                : "All members have cleared their balances or no data is available."}
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              {isEditMode ? "Edit Member" : "Add New Member"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Contact
                </label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Balance
                </label>
                <input
                  type="text"
                  name="balance"
                  value={formData.balance}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 font-medium"
              >
                {isEditMode ? "Update" : "Add"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingBalance;

import React, { useState } from "react";
import {
  BarChart3,
  Search,
  Download,
  Filter,
  Users,
  CheckCircle,
  TrendingUp,
  ShoppingBag,
  Edit,
  Plus,
  Trash2,
} from "lucide-react";

const Sales = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editRecord, setEditRecord] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const statsData = [
    {
      label: "MEMBERS",
      value: "100",
      icon: <Users className="w-6 h-6 text-white" />,
      bgColor: "bg-red-500",
    },
    {
      label: "PAID",
      value: "₹30,000",
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      bgColor: "bg-green-500",
    },
    {
      label: "SALES",
      value: "₹15,000",
      icon: <ShoppingBag className="w-6 h-6 text-white" />,
      bgColor: "bg-orange-500",
    },
  ];

  const [salesData, setSalesData] = useState([
    {
      id: "#1",
      name: "Samruddhi",
      gender: "Female",
      contact: "91-1234567890",
      membership: "FITNESS-1M 01-Jun-2025 to 01-Jul-2026",
      by: "Admin",
      sales: "₹12,000",
      collection: "₹2000.00",
    },
    {
      id: "#2",
      name: "Nikhil",
      gender: "Male",
      contact: "91-1234567890",
      membership: "PT 1 Month",
      by: "Raj",
      sales: "₹2,000",
      collection: "₹3000.00",
    },
  ]);

  const totals = {
    sales: "₹14,000",
    collection: "₹14,000.00",
  };

  const filteredSales = salesData.filter(
    (sale) =>
      sale.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.contact.includes(searchTerm) ||
      sale.id.includes(searchTerm)
  );

  // ✅ Export to CSV
  const exportToCSV = () => {
    const headers = [
      "ID",
      "Name",
      "Gender",
      "Contact",
      "Membership",
      "By",
      "Sales",
      "Collection",
    ];
    const rows = filteredSales.map((s) => [
      s.id,
      s.name,
      s.gender,
      s.contact,
      s.membership,
      s.by,
      s.sales,
      s.collection,
    ]);
    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((r) => r.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.href = encodedUri;
    link.download = "sales_report.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ✅ Add / Edit logic
  const handleAdd = () => {
    setEditRecord(null);
    setShowModal(true);
  };

  const handleEdit = (record) => {
    setEditRecord(record);
    setShowModal(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newRecord = {
      id: editRecord ? editRecord.id : `#${salesData.length + 1}`,
      name: formData.get("name"),
      gender: formData.get("gender"),
      contact: formData.get("contact"),
      membership: formData.get("membership"),
      by: formData.get("by"),
      sales: formData.get("sales"),
      collection: formData.get("collection"),
    };

    if (editRecord) {
      setSalesData((prev) =>
        prev.map((s) => (s.id === editRecord.id ? newRecord : s))
      );
    } else {
      setSalesData((prev) => [...prev, newRecord]);
    }

    setShowModal(false);
  };

  // ✅ Delete logic
  const handleDelete = (record) => {
    setDeleteConfirm(record);
  };

  const confirmDelete = () => {
    setSalesData((prev) => prev.filter((s) => s.id !== deleteConfirm.id));
    setDeleteConfirm(null);
  };

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

          <div className="flex items-center gap-3">
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              ADD
            </button>
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              EXPORT
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {statsData.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  {stat.icon}
                </div>
                <TrendingUp className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                {stat.label}
              </p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="w-12 px-4 py-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  ID
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Contact
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Membership
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  By
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Sales
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Collection
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredSales.map((sale) => (
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
                        <div className="text-sm font-medium text-gray-900">
                          {sale.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {sale.gender}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">
                    {sale.contact}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">
                    {sale.membership}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900">{sale.by}</td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">
                    {sale.sales}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">
                    {sale.collection}
                  </td>
                  <td className="px-4 py-4 flex gap-3">
                    <button
                      onClick={() => handleEdit(sale)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(sale)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
            <h2 className="text-xl font-semibold mb-4">
              {editRecord ? "Edit Sale" : "Add Sale"}
            </h2>
            <form onSubmit={handleSave} className="space-y-3">
              {["name", "gender", "contact", "membership", "by", "sales", "collection"].map(
                (field) => (
                  <input
                    key={field}
                    name={field}
                    required
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    defaultValue={editRecord ? editRecord[field] : ""}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )
              )}
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {deleteConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Confirm Delete
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to delete{" "}
              <span className="font-medium text-gray-900">
                {deleteConfirm.name}
              </span>
              ?
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sales;

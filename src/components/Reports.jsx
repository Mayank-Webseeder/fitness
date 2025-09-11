import React from 'react';
import { FileText, Download, Calendar, Users, Activity, UserCheck, DollarSign, Trash2 } from 'lucide-react';

const Reports = () => {
  const reportCards = [
    {
      title: "Gender Wise Collection Collection",
      description: "Note: Gender Wise Collections showcases the funds collected based on gender, calculated from corresponding invoices.",
      icon: <FileText className="w-8 h-8 text-white" />,
      dropdown: "This Month",
      hasDatePicker: false
    },
    {
      title: "Membership Wise Collection Collection",
      description: "Note: Membership Wise Collection showcases the funds collected from various memberships, calculated from corresponding invoices.",
      icon: <FileText className="w-8 h-8 text-white" />,
      dropdown: "Start From-To",
      hasDatePicker: true
    },
    {
      title: "Staff Attendance",
      description: "Note: Utilize the Staff Attendance feature by selecting the month and clicking 'Generate' to instantly obtain the monthly attendance report for all staff.",
      icon: <FileText className="w-8 h-8 text-white" />,
      dropdown: "Start From-To",
      hasDatePicker: true
    },
    {
      title: "Transaction Date Wise Collection Collection",
      description: "Note: Transaction Date Wise Collection showcases the sales report with transaction date for better clarity.",
      icon: <FileText className="w-8 h-8 text-white" />,
      dropdown: "Start From-To",
      hasDatePicker: true
    },
    {
      title: "Today Collection Collection",
      description: "Note: Now you can easily check today's generated invoice by utilizing this feature. Simply click on the 'Generate' button for instant access.",
      icon: <FileText className="w-8 h-8 text-white" />,
      dropdown: null,
      hasDatePicker: false
    },
    {
      title: "Staff Activity Details Staff logs",
      description: "Note: With our Activity Tracking feature, unveil a detailed overview of activities accomplished by each staff member. The report provides a snapshot of deletions within a focused timeframe - a maximum of 3 days.",
      icon: <FileText className="w-8 h-8 text-white" />,
      dropdown: "Start From-To",
      hasDatePicker: true
    },
    {
      title: "Deleted Membership Activity Details Staff Deleted membership logs",
      description: "Note: Enhance transparency with our Deleted Membership Activity Details! Now, view precise records of membership deletions within a focused timeframe - a maximum of 365 days.",
      icon: <FileText className="w-8 h-8 text-white" />,
      dropdown: "Start From-To",
      hasDatePicker: true
    },
    {
      title: "Deleted Members Activity Details Deleted members logs",
      description: "Note: Elevate your record-keeping! Deleted Members Activity Details provides a snapshot of deletions within a focused timeframe - a maximum of 365 days.",
      icon: <FileText className="w-8 h-8 text-white" />,
      dropdown: "Start From-To",
      hasDatePicker: true
    },
    {
      title: "Deleted Payments Activity Details Deleted payment logs",
      description: "Note: Enhance financial transparency! Uncover Deleted Payments Activity Details, offering a detailed glimpse into payment deletions within a maximum of 365 days.",
      icon: <FileText className="w-8 h-8 text-white" />,
      dropdown: "Start From-To",
      hasDatePicker: true
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center gap-3 mb-6">
        <Activity className="w-6 h-6 text-gray-700" />
        <h1 className="text-2xl font-semibold text-gray-800">Reports</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {reportCards.map((report, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {report.icon}
                <h3 className="text-white font-medium text-lg leading-tight">
                  {report.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                {report.dropdown && (
                  <div className="relative">
                    <select className="bg-white text-gray-700 px-3 py-1 rounded text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>{report.dropdown}</option>
                    </select>
                    {report.hasDatePicker && (
                      <Calendar className="absolute right-8 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    )}
                  </div>
                )}
                <button className="bg-white text-blue-600 p-2 rounded hover:bg-gray-50 transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                {report.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
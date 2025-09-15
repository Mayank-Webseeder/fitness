import React from "react";
import { Settings, Users, ClipboardList, Bell, UserCheck } from "lucide-react";

const Sms_settings = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 mt-0 px-4 py-3 flex items-center shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 flex items-center font-sans gap-2">
          <Settings />
          SMS Settings
        </h1>
      </header>

      {/* Membership Section */}
      <section className="p-6">
        <div className="bg-blue-900 text-white px-4 py-2 rounded-t-md font-bold">
          Membership
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-md rounded-b-md p-6">
          {/* Membership Lifestyle */}
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold flex items-center gap-2 mb-2">
              <Users className="text-blue-600" size={18} /> Membership Lifestyle
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li><input type="checkbox" /> Membership Payment</li>
              <li><input type="checkbox" /> Membership Suspension</li>
              <li><input type="checkbox" /> Membership Cancellation</li>
              <li><input type="checkbox" /> Membership Deletion</li>
              <li><input type="checkbox" /> Membership Freeze</li>
              <li><input type="checkbox" /> Membership Activation</li>
              <li><input type="checkbox" /> Membership Expiry</li>
              <li><input type="checkbox" /> Membership Overdue</li>
              <li><input type="checkbox" /> Pre Notification For Balance Payment</li>
              <li><input type="checkbox" /> Overdue Notification For Balance Payment</li>
            </ul>
          </div>

          {/* Attendance Alerts */}
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold flex items-center gap-2 mb-2">
              <ClipboardList className="text-blue-600" size={18} /> Attendance & Session Alerts
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li><input type="checkbox" /> Absent Alert For Member</li>
              <li><input type="checkbox" /> Session Pre Notification Alert</li>
              <li><input type="checkbox" /> Manual Attendance Added</li>
            </ul>
          </div>

          {/* Member Greetings */}
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold flex items-center gap-2 mb-2">
              <Bell className="text-blue-600" size={18} /> Member Greetings & Special Days
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li><input type="checkbox" /> Member Welcome Greetings</li>
              <li><input type="checkbox" /> Birthday Wishes</li>
              <li><input type="checkbox" /> Anniversary Wishes</li>
            </ul>
          </div>

          {/* Workout Assignments */}
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold flex items-center gap-2 mb-2">
              <UserCheck className="text-blue-600" size={18} /> Workout & Trainer Assignments
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li><input type="checkbox" /> Assign Workout Plan</li>
              <li><input type="checkbox" /> Trainer Assign Alert</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="p-6">
        <div className="bg-green-600 text-white px-4 py-2 rounded-t-md font-bold">
          Staff
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-md rounded-b-md p-6">
          {/* Membership Management */}
          <div className="bg-green-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Membership Management</h3>
            <ul className="space-y-2 text-gray-700">
              <li><input type="checkbox" /> Membership Payment</li>
              <li><input type="checkbox" /> Membership Suspended</li>
              <li><input type="checkbox" /> Membership Cancelled</li>
              <li><input type="checkbox" /> Membership Deleted</li>
              <li><input type="checkbox" /> Membership Freeze</li>
              <li><input type="checkbox" /> Membership Activated</li>
              <li><input type="checkbox" /> Update Membership Info</li>
            </ul>
          </div>

          {/* Reports & Summaries */}
          <div className="bg-green-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Reports & Summaries</h3>
            <ul className="space-y-2 text-gray-700">
              <li><input type="checkbox" /> Daily Summary</li>
              <li><input type="checkbox" /> Daily Expected Business</li>
              <li><input type="checkbox" /> Month Summary</li>
            </ul>
          </div>

          {/* Member Info */}
          <div className="bg-green-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Member Info & Communication</h3>
            <ul className="space-y-2 text-gray-700">
              <li><input type="checkbox" /> Member Welcome Greetings</li>
              <li><input type="checkbox" /> Giving Gift Days</li>
              <li><input type="checkbox" /> Member Referral</li>
              <li><input type="checkbox" /> Low Feedback Alert</li>
              <li><input type="checkbox" /> Update Member Info</li>
              <li><input type="checkbox" /> Birthday Alert</li>
            </ul>
          </div>

          {/* Trainer Alerts */}
          <div className="bg-green-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Trainer Alerts</h3>
            <ul className="space-y-2 text-gray-700">
              <li><input type="checkbox" /> Trainer Assign Alert</li>
              <li><input type="checkbox" /> Session Pre Notification</li>
            </ul>
          </div>

          {/* Occasion Alerts */}
          <div className="bg-green-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Occasion Alerts</h3>
            <ul className="space-y-2 text-gray-700">
              <li><input type="checkbox" /> Member Birthday Alert</li>
              <li><input type="checkbox" /> Member Anniversary Alert</li>
            </ul>
          </div>

          {/* Owner Notifications */}
          <div className="bg-green-50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Owner Notification</h3>
            <ul className="space-y-2 text-gray-700">
              <li><input type="checkbox" /> Membership Expiry Alert</li>
              <li><input type="checkbox" /> Membership Overdue Alert</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Membership & Staff Input Forms */}
      <section className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Membership Form */}
        <div className="bg-white shadow-md rounded-md p-6">
          <h3 className="font-bold text-lg mb-4">Membership</h3>
          <div className="space-y-3">
            <input type="text" placeholder="Membership Expiry Notification - Days*" className="w-full border rounded px-3 py-2" />
            <input type="text" placeholder="Membership Overdue Notification - Days*" className="w-full border rounded px-3 py-2" />
            <input type="text" placeholder="Pre Notification For Balance Payment - Days*" className="w-full border rounded px-3 py-2" />
            <input type="text" placeholder="Overdue Notification For Balance Payment - Days*" className="w-full border rounded px-3 py-2" />
            <input type="text" placeholder="Absent Members - Days*" className="w-full border rounded px-3 py-2" />
            <input type="text" placeholder="Session Pre Notification Hours" className="w-full border rounded px-3 py-2" />
          </div>
          <div className="flex justify-end gap-3 mt-4">
            <button className="px-4 py-2 rounded bg-gray-200">Cancel</button>
            <button className="px-4 py-2 rounded bg-blue-600 text-white">+ Add</button>
          </div>
        </div>

        {/* Staff Form */}
        <div className="bg-white shadow-md rounded-md p-6">
          <h3 className="font-bold text-lg mb-4">Staff</h3>
          <div className="space-y-3">
            <input type="text" placeholder="Daily Summary Time*" className="w-full border rounded px-3 py-2" />
            <input type="text" placeholder="Daily Expected Business Time*" className="w-full border rounded px-3 py-2" />
            <input type="text" placeholder="Session Pre Notification Trainer Hours*" className="w-full border rounded px-3 py-2" />
          </div>
          <div className="flex justify-end gap-3 mt-4">
            <button className="px-4 py-2 rounded bg-gray-200">Cancel</button>
            <button className="px-4 py-2 rounded bg-blue-600 text-white">+ Add</button>
          </div>
        </div>
      </section>

      {/* Lead & User Section */}
      <section className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Lead */}
        <div className="bg-green-50 p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2 flex items-center gap-2">🔹 Lead</h3>
          <ul className="space-y-2 text-gray-700">
            <li><input type="checkbox" /> Lead Welcome Greetings</li>
          </ul>
        </div>

        {/* User */}
        <div className="bg-green-50 p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2 flex items-center gap-2">🔹 User</h3>
          <ul className="space-y-2 text-gray-700">
            <li><input type="checkbox" /> Bill Added User Alert</li>
            <li><input type="checkbox" /> Bill Added Staff Alert</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Sms_settings;

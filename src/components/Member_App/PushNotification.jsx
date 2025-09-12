import React, { useState } from "react";
import { Bell, Sparkles, Users } from "lucide-react";

const PushNotificationSettings = () => {
  const [notifications, setNotifications] = useState({
    membershipPayment: false,
    membershipExpiry: false,
    membershipOverdue: false,
    membershipPrePayment: false,
    membershipPostPayment: false,
  });

  const [days, setDays] = useState({
    expiry: 1,
    overdue: 1,
    prePayment: 1,
    postPayment: 1,
  });

  const handleCheckboxChange = (name) => {
    setNotifications((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleDaysChange = (name, value) => {
    setDays((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Highlight Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Bell className="w-5 h-5 text-amber-600" />
          <h2 className="text-xl font-semibold text-amber-700">
            Push Notification Settings
          </h2>
        </div>
        <div className="flex items-start gap-2">
          <Sparkles className="w-5 h-5 text-amber-600 mt-0.5" />
          <p className="text-sm text-amber-700">
            You can send bulk push notifications for Offers & Wishes to your members using our Premium Plus plan.
            <br />
            ✨ You can customize the push notifications contents.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-xl">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-6 h-6 text-blue-600" />
          <h3 className="font-semibold text-lg text-blue-600">Member</h3>
        </div>

        <div className="space-y-2 mb-6">
          {[
            ["membershipPayment", "Membership Payment"],
            ["membershipExpiry", "Membership Expiry"],
            ["membershipOverdue", "Membership Overdue"],
            ["membershipPrePayment", "Membership Pre Payment"],
            ["membershipPostPayment", "Membership Post Payment"],
          ].map(([key, label]) => (
            <label key={key} className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="accent-blue-600"
                checked={notifications[key]}
                onChange={() => handleCheckboxChange(key)}
              />
              <span>{label}</span>
            </label>
          ))}
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">
              Membership Expiry Notification - Days*
            </label>
            <input
              type="number"
              min="1"
              className="mt-1 w-full border rounded-lg p-2"
              value={days.expiry}
              onChange={(e) => handleDaysChange("expiry", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Membership Overdue Notification - Days*
            </label>
            <input
              type="number"
              min="1"
              className="mt-1 w-full border rounded-lg p-2"
              value={days.overdue}
              onChange={(e) => handleDaysChange("overdue", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Membership Pre Payment Notification - Days*
            </label>
            <input
              type="number"
              min="1"
              className="mt-1 w-full border rounded-lg p-2"
              value={days.prePayment}
              onChange={(e) => handleDaysChange("prePayment", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Membership Post Payment Notification - Days*
            </label>
            <input
              type="number"
              min="1"
              className="mt-1 w-full border rounded-lg p-2"
              value={days.postPayment}
              onChange={(e) => handleDaysChange("postPayment", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PushNotificationSettings;

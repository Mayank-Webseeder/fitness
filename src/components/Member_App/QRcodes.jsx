import React, { useState } from "react";

export default function MemberAppQRCodes() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Member App - QR</h2>

        {/* Razorpay integration info */}
        <div className="mb-4 space-y-2">
          <div className="bg-amber-100 text-amber-900 px-4 py-3 rounded">
            💳 Now you can integrate Razorpay payment gateway with your member app
          </div>
          <div className="bg-blue-100 text-blue-900 px-4 py-3 rounded">
            ⚡ You can get 20+ custom features in your member app with our Premium Plus plan
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <QrCard
            id="android"
            platform="Android"
            storeBadge="Google Play"
            qrSrc="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://play.google.com/store/apps/details?id=com.example.android"
            link="https://play.google.com/store/apps/details?id=com.example.android"
          />

          <QrCard
            id="ios"
            platform="iOS"
            storeBadge="App Store"
            qrSrc="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://apps.apple.com/in/app/example-ios-app/id123456789"
            link="https://apps.apple.com/in/app/example-ios-app/id123456789"
          />
        </div>
      </div>
    </div>
  );
}

function QrCard({ id, platform, storeBadge, qrSrc, link }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("Unable to copy link. Try manually copying.");
    }
  };

  const handleDownload = async () => {
    try {
      const resp = await fetch(qrSrc);
      const blob = await resp.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${id}-qrcode.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      window.open(qrSrc, "_blank");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center">
      <div className="flex justify-between w-full items-center mb-4">
        <h3 className="text-lg font-semibold">{platform} App</h3>
        <span className="px-2 py-1 bg-black text-white text-xs rounded">{storeBadge}</span>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg w-full flex justify-center">
        <img src={qrSrc} alt={`${platform} QR`} className="w-48 h-48 object-contain" />
      </div>

      <div className="mt-6 w-full flex gap-3 justify-center">
        <button
          onClick={handleDownload}
          className="px-5 py-2 bg-blue-600 text-white rounded shadow-sm hover:opacity-90 transition"
        >
          DOWNLOAD QR
        </button>
        <button
          onClick={handleCopy}
          className="px-4 py-2 border border-gray-200 rounded bg-white shadow-sm hover:bg-gray-50"
        >
          {copied ? "COPIED" : "COPY LINK"}
        </button>
      </div>

      <div className="mt-3 text-xs text-gray-400 break-all text-center">{link}</div>
    </div>
  );
}

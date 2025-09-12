import React from 'react'

import { LineChart, Calendar } from 'lucide-react';

const BI_dashboard = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 mt-0 px-4 py-3 flex items-center shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 flex items-center font-sans gap-2">
          <LineChart />
          Business Insights
        </h1>
      </header>

      {/* Dashboard Layout */}
      <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50">
        
        {/* Section 1 */}
        <section className="bg-white shadow-sm rounded-2xl border border-gray-100 p-4 flex flex-col justify-between">
          <header className="flex items-center justify-between">
            <div>
              <p className="text-xs text-sky-500 font-medium">
                Top 3 trending memberships
              </p>
              <h2 className="text-lg font-semibold text-gray-800">MEMBERSHIPS</h2>
            </div>
            <div className="flex items-center border rounded-md px-2 py-1 text-sm text-gray-500 bg-gray-50 cursor-pointer">
              <Calendar size={14} className="mr-1 text-gray-400" />
              Start From-To
            </div>
          </header>

          <div className="flex justify-center py-6">
            <img src="/images/membership.png" alt="Memberships" className="h-28 object-contain" />
          </div>

          <footer>
            <p className="text-xs text-center text-gray-400">
              You will get the data once sufficient data generated
            </p>
          </footer>
        </section>

        {/* Section 2 */}
        <section className="bg-white shadow-sm rounded-2xl border border-gray-100 p-4 flex flex-col justify-between">
          <header className="flex items-center justify-between">
            <div>
              <p className="text-xs text-sky-500 font-medium">
                Top 3 trending payment modes
              </p>
              <h2 className="text-lg font-semibold text-gray-800">PAYMENT MODES</h2>
            </div>
            <div className="flex items-center border rounded-md px-2 py-1 text-sm text-gray-500 bg-gray-50 cursor-pointer">
              <Calendar size={14} className="mr-1 text-gray-400" />
              Start From-To
            </div>
          </header>

          <div className="flex justify-center py-6">
            <img src="/images/payment.png" alt="Payment Modes" className="h-28 object-contain" />
          </div>

          <footer>
            <p className="text-xs text-center text-gray-400">
              You will get the data once sufficient data generated
            </p>
          </footer>
        </section>

        {/* Section 3 */}
        <section className="bg-white shadow-sm rounded-2xl border border-gray-100 p-4 flex flex-col justify-between">
          <header className="flex items-center justify-between">
            <div>
              <p className="text-xs text-sky-500 font-medium">
                Top 3 trending lead sources
              </p>
              <h2 className="text-lg font-semibold text-gray-800">LEAD SOURCES</h2>
            </div>
            <div className="flex items-center border rounded-md px-2 py-1 text-sm text-gray-500 bg-gray-50 cursor-pointer">
              <Calendar size={14} className="mr-1 text-gray-400" />
              Start From-To
            </div>
          </header>

          <div className="flex justify-center py-6">
            <img src="/images/leadsources.png" alt="Lead Sources" className="h-28 object-contain" />
          </div>

          <footer>
            <p className="text-xs text-center text-gray-400">
              You will get the data once sufficient data generated
            </p>
          </footer>
        </section>

        {/* Section 4 */}
        <section className="bg-white shadow-sm rounded-2xl border border-gray-100 p-4 flex flex-col justify-between">
          <header className="flex items-center justify-between">
            <div>
              <p className="text-xs text-sky-500 font-medium">
                Average active member count
              </p>
              <h2 className="text-lg font-semibold text-gray-800">MEMBER TRAFFIC</h2>
            </div>
            <div className="flex items-center border rounded-md px-2 py-1 text-sm text-gray-500 bg-gray-50 cursor-pointer">
              <Calendar size={14} className="mr-1 text-gray-400" />
              Month and Year
            </div>
          </header>

          <div className="flex justify-center py-6">
            <img src="/images/membertraffic.png" alt="Member Traffic" className="h-28 object-contain" />
          </div>

          <footer>
            <p className="text-xs text-center text-gray-400">
              You will get the data once sufficient data generated
            </p>
          </footer>
        </section>

      </main>
    </div>
  )
}

export default BI_dashboard

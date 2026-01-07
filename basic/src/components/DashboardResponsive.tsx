// This file contains the improved responsive sections for Asset Allocation and Cash Flow
// To be integrated into Dashboard.tsx

/* 
===========================================
IMPROVED ASSET ALLOCATION SECTION
===========================================
Replace lines 474-530 in Dashboard.tsx with this:
*/

{/* Asset Allocation Pie Chart - IMPROVED RESPONSIVE */}
<div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm border`}>
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-2 sm:gap-0">
    <h2 className={`text-base md:text-lg lg:text-xl ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Asset Allocation</h2>
    <button className="text-[#c9a86a] text-xs md:text-sm hover:text-[#b8965a] flex items-center gap-1 self-start sm:self-auto">
      Rebalance <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
    </button>
  </div>
  
  {/* Mobile: Stacked layout with grid legend */}
  <div className="flex flex-col md:hidden space-y-4">
    <div className="w-full">
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={assetAllocationData}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={75}
            paddingAngle={2}
            dataKey="value"
          >
            {assetAllocationData.map((entry, index) => (
              <Cell key={`cell-mobile-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value: any) => `$${(value / 1000).toFixed(1)}K`}
            contentStyle={{ 
              backgroundColor: isDarkMode ? '#1f2937' : '#fff', 
              border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, 
              borderRadius: '8px',
              color: isDarkMode ? '#fff' : '#000',
              fontSize: '12px'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
    
    <div className="grid grid-cols-2 gap-2.5">
      {assetAllocationData.map((item, idx) => (
        <div key={idx} className={`${isDarkMode ? 'bg-gray-700/40 border-gray-600' : 'bg-gray-50 border-gray-200'} rounded-lg p-2.5 border`}>
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></div>
            <span className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} truncate font-medium`}>{item.name}</span>
          </div>
          <div>
            <p className={`text-base font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>${(item.value / 1000).toFixed(1)}K</p>
            <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.percentage}%</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  {/* Tablet & Desktop: Side by side */}
  <div className="hidden md:flex items-center gap-6 lg:gap-8">
    <div className="flex-1">
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={assetAllocationData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
          >
            {assetAllocationData.map((entry, index) => (
              <Cell key={`cell-desktop-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value: any) => `$${(value / 1000).toFixed(1)}K`}
            contentStyle={{ 
              backgroundColor: isDarkMode ? '#1f2937' : '#fff', 
              border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, 
              borderRadius: '8px',
              color: isDarkMode ? '#fff' : '#000'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
    
    <div className="flex-1 space-y-2.5">
      {assetAllocationData.map((item, idx) => (
        <div key={idx} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></div>
            <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.name}</span>
          </div>
          <div className="text-right">
            <p className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-900'} font-semibold`}>${(item.value / 1000).toFixed(1)}K</p>
            <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>{item.percentage}%</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


/* 
===========================================
IMPROVED CASH FLOW SECTION
===========================================
Replace lines 580-633 in Dashboard.tsx with this:
*/

{/* Cash Flow Analysis - IMPROVED RESPONSIVE */}
<div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl md:rounded-2xl p-4 md:p-6 mb-6 md:mb-8 shadow-sm border`}>
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-3 sm:gap-0">
    <div>
      <h2 className={`text-base md:text-lg lg:text-xl ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-1`}>Cash Flow Analysis</h2>
      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-xs md:text-sm`}>Income, expenses, and savings trends</p>
    </div>
    <div className="flex gap-2">
      <button className={`px-3 md:px-4 py-1.5 md:py-2 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} rounded-lg text-xs md:text-sm transition-all font-medium`}>
        Monthly
      </button>
      <button className={`px-3 md:px-4 py-1.5 md:py-2 ${isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'} rounded-lg text-xs md:text-sm transition-all`}>
        Quarterly
      </button>
    </div>
  </div>

  {/* Mobile Chart - Compact */}
  <div className="md:hidden mb-4">
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={cashFlowData}>
        <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#f0f0f0'} />
        <XAxis 
          dataKey="month" 
          stroke={isDarkMode ? '#9ca3af' : '#9ca3af'} 
          style={{ fontSize: '11px' }}
          tick={{ fill: isDarkMode ? '#9ca3af' : '#6b7280' }}
        />
        <YAxis 
          stroke={isDarkMode ? '#9ca3af' : '#9ca3af'} 
          tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} 
          style={{ fontSize: '10px' }}
          tick={{ fill: isDarkMode ? '#9ca3af' : '#6b7280' }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: isDarkMode ? '#1f2937' : '#fff', 
            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, 
            borderRadius: '8px',
            color: isDarkMode ? '#fff' : '#000',
            fontSize: '12px'
          }}
          formatter={(value: any) => `$${value.toLocaleString()}`}
        />
        <Legend wrapperStyle={{ fontSize: '11px' }} iconSize={10} />
        <Bar dataKey="income" fill="#10b981" name="Income" radius={[4, 4, 0, 0]} />
        <Bar dataKey="expenses" fill="#ef4444" name="Expenses" radius={[4, 4, 0, 0]} />
        <Bar dataKey="savings" fill="#3b82f6" name="Savings" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>

  {/* Tablet & Desktop Chart */}
  <div className="hidden md:block mb-6">
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={cashFlowData}>
        <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#f0f0f0'} />
        <XAxis dataKey="month" stroke={isDarkMode ? '#9ca3af' : '#9ca3af'} />
        <YAxis stroke={isDarkMode ? '#9ca3af' : '#9ca3af'} tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: isDarkMode ? '#1f2937' : '#fff', 
            border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, 
            borderRadius: '8px',
            color: isDarkMode ? '#fff' : '#000'
          }}
          formatter={(value: any) => `$${value.toLocaleString()}`}
        />
        <Legend />
        <Bar dataKey="income" fill="#10b981" name="Income" radius={[8, 8, 0, 0]} />
        <Bar dataKey="expenses" fill="#ef4444" name="Expenses" radius={[8, 8, 0, 0]} />
        <Bar dataKey="savings" fill="#3b82f6" name="Savings" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>

  {/* Summary Cards - Fully Responsive Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
    {/* Income Card */}
    <div className={`${isDarkMode ? 'bg-green-900/30 border-green-700/50' : 'bg-green-50 border-green-200'} rounded-lg md:rounded-xl p-3 md:p-4 border transition-all hover:shadow-md`}>
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-8 h-8 rounded-lg ${isDarkMode ? 'bg-green-800/50' : 'bg-green-100'} flex items-center justify-center`}>
          <TrendingUp className={`w-4 h-4 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
        </div>
        <p className={`${isDarkMode ? 'text-green-400' : 'text-green-700'} text-xs md:text-sm font-medium`}>Avg Monthly Income</p>
      </div>
      <p className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'text-green-300' : 'text-green-900'}`}>$12,500</p>
      <p className={`text-xs ${isDarkMode ? 'text-green-500' : 'text-green-600'} mt-1`}>+2.4% from last month</p>
    </div>

    {/* Expenses Card */}
    <div className={`${isDarkMode ? 'bg-red-900/30 border-red-700/50' : 'bg-red-50 border-red-200'} rounded-lg md:rounded-xl p-3 md:p-4 border transition-all hover:shadow-md`}>
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-8 h-8 rounded-lg ${isDarkMode ? 'bg-red-800/50' : 'bg-red-100'} flex items-center justify-center`}>
          <TrendingDown className={`w-4 h-4 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} />
        </div>
        <p className={`${isDarkMode ? 'text-red-400' : 'text-red-700'} text-xs md:text-sm font-medium`}>Avg Monthly Expenses</p>
      </div>
      <p className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'text-red-300' : 'text-red-900'}`}>$6,650</p>
      <p className={`text-xs ${isDarkMode ? 'text-red-500' : 'text-red-600'} mt-1`}>-5.1% from last month</p>
    </div>

    {/* Savings Card */}
    <div className={`${isDarkMode ? 'bg-blue-900/30 border-blue-700/50' : 'bg-blue-50 border-blue-200'} rounded-lg md:rounded-xl p-3 md:p-4 border transition-all hover:shadow-md sm:col-span-2 lg:col-span-1`}>
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-8 h-8 rounded-lg ${isDarkMode ? 'bg-blue-800/50' : 'bg-blue-100'} flex items-center justify-center`}>
          <PiggyBank className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
        </div>
        <p className={`${isDarkMode ? 'text-blue-400' : 'text-blue-700'} text-xs md:text-sm font-medium`}>Avg Monthly Savings</p>
      </div>
      <div className="flex items-baseline gap-3">
        <p className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'text-blue-300' : 'text-blue-900'}`}>$5,850</p>
        <span className={`${isDarkMode ? 'bg-blue-800/50 text-blue-300 border-blue-700' : 'bg-blue-100 text-blue-700 border-blue-300'} px-2 py-0.5 rounded-full text-xs border font-semibold`}>
          46.8%
        </span>
      </div>
      <p className={`text-xs ${isDarkMode ? 'text-blue-500' : 'text-blue-600'} mt-1`}>Savings rate</p>
    </div>
  </div>
</div>

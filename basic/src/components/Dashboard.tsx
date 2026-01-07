import { useState } from 'react';
import { 
  Search, 
  Bell, 
  User, 
  TrendingUp, 
  AlertTriangle,
  Info,
  DollarSign,
  CreditCard,
  PiggyBank,
  Briefcase,
  Home,
  Shield,
  ChevronRight,
  ChevronDown,
  Activity,
  Calendar,
  Scale,
  Brain,
  Target,
  Zap,
  Eye,
  LogOut,
  HelpCircle,
  TrendingDown,
  Layers,
  Filter,
  Download,
  Settings,
  Star,
  Clock,
  BarChart3,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Moon,
  Sun,
  Menu,
  X
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar
} from 'recharts';
import logo from 'figma:asset/e885d4d764a866fd155f344905463195a9a6f0c9.png';

// Sample data for charts
const netWorthData = [
  { month: 'Jul', visible: 320, invisible: 38, netWorth: 358 },
  { month: 'Aug', visible: 325, invisible: 40, netWorth: 365 },
  { month: 'Sep', visible: 328, invisible: 42, netWorth: 370 },
  { month: 'Oct', visible: 330, invisible: 43, netWorth: 373 },
  { month: 'Nov', visible: 334, invisible: 44, netWorth: 378 },
  { month: 'Dec', visible: 340, invisible: 45, netWorth: 385 }
];

const assetAllocationData = [
  { name: 'Retirement', value: 197500, percentage: 52, color: '#8b5cf6' },
  { name: 'Investments', value: 68400, percentage: 18, color: '#3b82f6' },
  { name: 'Cash', value: 42300, percentage: 11, color: '#10b981' },
  { name: 'Employer Benefits', value: 30200, percentage: 8, color: '#f59e0b' },
  { name: 'Real Estate', value: 26000, percentage: 7, color: '#ef4444' },
  { name: 'Other', value: 14550, percentage: 4, color: '#6b7280' }
];

const liquidityData = [
  { name: 'Liquidity', value: 78, fill: '#10b981' }
];

const taxEfficiencyData = [
  { name: 'Tax Efficiency', value: 72, fill: '#c9a86a' }
];

const cashFlowData = [
  { month: 'Jan', income: 12500, expenses: 6800, savings: 5700 },
  { month: 'Feb', income: 12500, expenses: 6200, savings: 6300 },
  { month: 'Mar', income: 12500, expenses: 7100, savings: 5400 },
  { month: 'Apr', income: 12500, expenses: 6500, savings: 6000 },
  { month: 'May', income: 12500, expenses: 6900, savings: 5600 },
  { month: 'Jun', income: 12500, expenses: 6400, savings: 6100 }
];

const riskExposureData = [
  { category: 'Liquidity', score: 85, benchmark: 70 },
  { category: 'Income', score: 45, benchmark: 70 },
  { category: 'Concentration', score: 60, benchmark: 70 },
  { category: 'Debt', score: 80, benchmark: 70 }
];

export function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('6M');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('lumino_jwt');
    onLogout();
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
      {/* Header */}
      <header className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm sticky top-0 z-50 border-b`}>
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 md:gap-8">
              <img src={logo} alt="Lumino" className="w-24 md:w-32" />
              <nav className="hidden lg:flex gap-1">
                <NavButton
                  active={activeTab === 'overview'}
                  onClick={() => setActiveTab('overview')}
                  icon={<BarChart3 className="w-4 h-4" />}
                  label="Overview"
                  isDarkMode={isDarkMode}
                />
                <NavButton
                  active={activeTab === 'intelligence'}
                  onClick={() => setActiveTab('intelligence')}
                  icon={<Brain className="w-4 h-4" />}
                  label="Intelligence"
                  isDarkMode={isDarkMode}
                />
                <NavButton
                  active={activeTab === 'assets'}
                  onClick={() => setActiveTab('assets')}
                  icon={<Layers className="w-4 h-4" />}
                  label="Assets"
                  isDarkMode={isDarkMode}
                />
                <NavButton
                  active={activeTab === 'decisions'}
                  onClick={() => setActiveTab('decisions')}
                  icon={<Target className="w-4 h-4" />}
                  label="Decisions"
                  isDarkMode={isDarkMode}
                />
                <NavButton
                  active={activeTab === 'risk'}
                  onClick={() => setActiveTab('risk')}
                  icon={<Shield className="w-4 h-4" />}
                  label="Risk"
                  isDarkMode={isDarkMode}
                />
              </nav>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <button className={`p-2 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded-lg transition-all hidden md:block`}>
                <Search className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              </button>
              <button className={`p-2 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded-lg transition-all relative hidden md:block`}>
                <Bell className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#c9a86a] rounded-full"></span>
              </button>
              <button 
                onClick={toggleTheme}
                className={`p-2 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded-lg transition-all`}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>
              <div className="hidden md:flex items-center gap-3 pl-3 ml-3 border-l ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}">
                <div className="text-right hidden lg:block">
                  <p className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>John Doe</p>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Premium Member</p>
                </div>
                <button className="w-10 h-10 bg-gradient-to-br from-[#c9a86a] to-[#b8965a] rounded-full flex items-center justify-center text-white">
                  <User className="w-5 h-5" />
                </button>
              </div>
              <button
                onClick={handleLogout}
                className={`p-2 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded-lg transition-all hidden md:block`}
                title="Logout"
              >
                <LogOut className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded-lg transition-all`}
              >
                {mobileMenuOpen ? (
                  <X className={`w-6 h-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`lg:hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
            <div className="px-4 py-4 space-y-2">
              <MobileNavButton
                active={activeTab === 'overview'}
                onClick={() => { setActiveTab('overview'); setMobileMenuOpen(false); }}
                icon={<BarChart3 className="w-5 h-5" />}
                label="Overview"
                isDarkMode={isDarkMode}
              />
              <MobileNavButton
                active={activeTab === 'intelligence'}
                onClick={() => { setActiveTab('intelligence'); setMobileMenuOpen(false); }}
                icon={<Brain className="w-5 h-5" />}
                label="Intelligence"
                isDarkMode={isDarkMode}
              />
              <MobileNavButton
                active={activeTab === 'assets'}
                onClick={() => { setActiveTab('assets'); setMobileMenuOpen(false); }}
                icon={<Layers className="w-5 h-5" />}
                label="Assets"
                isDarkMode={isDarkMode}
              />
              <MobileNavButton
                active={activeTab === 'decisions'}
                onClick={() => { setActiveTab('decisions'); setMobileMenuOpen(false); }}
                icon={<Target className="w-5 h-5" />}
                label="Decisions"
                isDarkMode={isDarkMode}
              />
              <MobileNavButton
                active={activeTab === 'risk'}
                onClick={() => { setActiveTab('risk'); setMobileMenuOpen(false); }}
                icon={<Shield className="w-5 h-5" />}
                label="Risk"
                isDarkMode={isDarkMode}
              />
              <div className={`pt-4 mt-4 border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                <button
                  onClick={handleLogout}
                  className={`w-full flex items-center gap-3 px-4 py-3 ${isDarkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-200'} rounded-lg transition-all`}
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-4 md:px-6 py-4 md:py-8">
        {activeTab === 'overview' && (
          <>
            {/* Welcome Section with Quick Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              {/* Main Net Worth Card */}
              <div className="lg:col-span-2 bg-gradient-to-br from-[#0a2540] via-[#1a3a5a] to-[#0a2540] rounded-xl md:rounded-2xl p-6 md:p-8 text-white relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#c9a86a] opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#c9a86a]" />
                        <span className="text-gray-300 text-xs md:text-sm">Welcome back, John</span>
                      </div>
                      <p className="text-gray-300 text-xs md:text-sm mb-1">True Net Worth</p>
                      <div className="flex items-baseline gap-2 md:gap-3">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white">$342,450</h1>
                        <div className="flex items-center gap-1 px-2 md:px-3 py-1 bg-green-500/20 rounded-full">
                          <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-green-300" />
                          <span className="text-green-300 text-xs md:text-sm">+2.4%</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4 sm:mt-0">
                      <button className="px-3 md:px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs md:text-sm backdrop-blur-sm border border-white/20 transition-all">
                        <Download className="w-3 h-3 md:w-4 md:h-4 inline mr-1 md:mr-2" />
                        Export
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
                      <p className="text-gray-300 text-xs mb-1 md:mb-2">Total Assets</p>
                      <p className="text-xl md:text-2xl text-white">$378.9K</p>
                      <p className="text-green-300 text-xs mt-1">+$8.2K this month</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
                      <p className="text-gray-300 text-xs mb-1 md:mb-2">Liabilities</p>
                      <p className="text-xl md:text-2xl text-white">$36.5K</p>
                      <p className="text-gray-300 text-xs mt-1">-$1.2K this month</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
                      <p className="text-gray-300 text-xs mb-1 md:mb-2">Invisible Assets</p>
                      <p className="text-xl md:text-2xl text-[#c9a86a]">$44.7K</p>
                      <p className="text-[#c9a86a] text-xs mt-1">Discovered by AI</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Insights Card */}
              <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm border`}>
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h3 className={`text-base md:text-lg ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Accounts</h3>
                  <button className="text-[#c9a86a] text-xs md:text-sm hover:text-[#b8965a]">View all</button>
                </div>
                
                <div className="space-y-4">
                  <InsightItem
                    icon={<TrendingUp className="w-5 h-5 text-green-600" />}
                    title="Net worth up 2.4%"
                    description="$8.2K increase this month"
                    trend="positive"
                    isDarkMode={isDarkMode}
                  />
                  <InsightItem
                    icon={<AlertCircle className="w-5 h-5 text-yellow-600" />}
                    title="$1,240 expiring soon"
                    description="Credit card rewards in 30 days"
                    trend="warning"
                    isDarkMode={isDarkMode}
                  />
                  <InsightItem
                    icon={<CheckCircle2 className="w-5 h-5 text-blue-600" />}
                    title="Tax efficiency improved"
                    description="+8 points this quarter"
                    trend="info"
                    isDarkMode={isDarkMode}
                  />
                  <InsightItem
                    icon={<Target className="w-5 h-5 text-purple-600" />}
                    title="3 decisions pending"
                    description="Review recommendations"
                    trend="neutral"
                    isDarkMode={isDarkMode}
                  />
                </div>
              </div>
            </div>

            {/* Net Worth Growth Chart */}
            <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl md:rounded-2xl p-4 md:p-6 mb-6 md:mb-8 shadow-sm border`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-3 sm:gap-0">
                <div>
                  <h2 className={`text-base md:text-lg lg:text-xl ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-1`}>Net Worth Growth</h2>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-xs md:text-sm`}>Visible + Invisible assets over time</p>
                </div>
                <div className="flex items-center gap-2">
                  <TimeRangeSelector timeRange={timeRange} setTimeRange={setTimeRange} isDarkMode={isDarkMode} />
                  <button className={`p-2 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} rounded-lg transition-all hidden md:block`}>
                    <Filter className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  </button>
                </div>
              </div>
              
              <ResponsiveContainer width="100%" height={250} className="md:hidden">
                <AreaChart data={netWorthData}>
                  <defs>
                    <linearGradient id="colorVisible" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorInvisible" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#c9a86a" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#c9a86a" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#f0f0f0'} />
                  <XAxis dataKey="month" stroke={isDarkMode ? '#9ca3af' : '#9ca3af'} style={{ fontSize: '12px' }} />
                  <YAxis stroke={isDarkMode ? '#9ca3af' : '#9ca3af'} tickFormatter={(value) => `$${value}K`} style={{ fontSize: '12px' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: isDarkMode ? '#1f2937' : '#fff', 
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, 
                      borderRadius: '8px',
                      color: isDarkMode ? '#fff' : '#000'
                    }}
                    formatter={(value: any) => `$${value}K`}
                  />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Area 
                    type="monotone" 
                    dataKey="visible" 
                    stackId="1"
                    stroke="#3b82f6" 
                    fill="url(#colorVisible)" 
                    name="Visible Assets"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="invisible" 
                    stackId="1"
                    stroke="#c9a86a" 
                    fill="url(#colorInvisible)" 
                    name="Invisible Assets"
                  />
                </AreaChart>
              </ResponsiveContainer>
              
              <ResponsiveContainer width="100%" height={350} className="hidden md:block">
                <AreaChart data={netWorthData}>
                  <defs>
                    <linearGradient id="colorVisible2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorInvisible2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#c9a86a" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#c9a86a" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#f0f0f0'} />
                  <XAxis dataKey="month" stroke={isDarkMode ? '#9ca3af' : '#9ca3af'} />
                  <YAxis stroke={isDarkMode ? '#9ca3af' : '#9ca3af'} tickFormatter={(value) => `$${value}K`} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: isDarkMode ? '#1f2937' : '#fff', 
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, 
                      borderRadius: '8px',
                      color: isDarkMode ? '#fff' : '#000'
                    }}
                    formatter={(value: any) => `$${value}K`}
                  />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="visible" 
                    stackId="1"
                    stroke="#3b82f6" 
                    fill="url(#colorVisible2)" 
                    name="Visible Assets"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="invisible" 
                    stackId="1"
                    stroke="#c9a86a" 
                    fill="url(#colorInvisible2)" 
                    name="Invisible Assets"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Asset Allocation & Intelligence Scores */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              {/* Asset Allocation Pie Chart */}
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

              {/* Intelligence Scores */}
              <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl p-6 shadow-sm border`}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className={isDarkMode ? 'text-gray-100' : 'text-gray-900'}>Intelligence Scores</h2>
                  <button className="text-[#c9a86a] text-sm hover:text-[#b8965a]">
                    <HelpCircle className="w-4 h-4 inline mr-1" />
                    How it works
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <ScoreGauge
                    title="Liquidity Health"
                    score={78}
                    data={liquidityData}
                    color="#10b981"
                    description="7 months runway"
                    isDarkMode={isDarkMode}
                  />
                  <ScoreGauge
                    title="Tax Efficiency"
                    score={72}
                    data={taxEfficiencyData}
                    color="#c9a86a"
                    description="CPA-aligned score"
                    isDarkMode={isDarkMode}
                  />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <MetricBox
                    label="Risk Fragility"
                    value="Medium"
                    icon={<Shield className="w-4 h-4" />}
                    color="yellow"
                    isDarkMode={isDarkMode}
                  />
                  <MetricBox
                    label="Optimization Potential"
                    value="$8.4K/yr"
                    icon={<Sparkles className="w-4 h-4" />}
                    color="blue"
                    isDarkMode={isDarkMode}
                  />
                </div>
              </div>
            </div>

            {/* Cash Flow Analysis */}
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

            {/* Action Items & Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {/* Priority Actions */}
              <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl p-6 shadow-sm border`}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className={isDarkMode ? 'text-gray-100' : 'text-gray-900'}>Priority Actions</h2>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">3 urgent</span>
                </div>

                <div className="space-y-4">
                  <ActionItem
                    priority="high"
                    title="Redeem expiring rewards"
                    description="$1,240 in credit card points expire in 30 days"
                    impact="+$1,240"
                    icon={<CreditCard className="w-5 h-5" />}
                    isDarkMode={isDarkMode}
                  />
                  <ActionItem
                    priority="medium"
                    title="Review 401k rollover"
                    description="$86,400 in old employer 401k with high fees"
                    impact="+$285/year"
                    icon={<Briefcase className="w-5 h-5" />}
                    isDarkMode={isDarkMode}
                  />
                  <ActionItem
                    priority="medium"
                    title="Cancel duplicate subscription"
                    description="3 overlapping streaming services"
                    impact="+$180/year"
                    icon={<DollarSign className="w-5 h-5" />}
                    isDarkMode={isDarkMode}
                  />
                  <ActionItem
                    priority="low"
                    title="Claim insurance reimbursement"
                    description="$950 ready to claim"
                    impact="+$950"
                    icon={<Shield className="w-5 h-5" />}
                    isDarkMode={isDarkMode}
                  />
                </div>
              </div>

              {/* Recent Activity */}
              <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl p-6 shadow-sm border`}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className={isDarkMode ? 'text-gray-100' : 'text-gray-900'}>Recent Activity</h2>
                  <button className="text-[#c9a86a] text-sm hover:text-[#b8965a]">View all</button>
                </div>

                <div className="space-y-4">
                  <ActivityItem
                    icon={<TrendingUp className="w-5 h-5 text-green-600" />}
                    title="Market gain"
                    description="Brokerage account increased"
                    amount="+$1,240"
                    time="2 hours ago"
                    positive
                    isDarkMode={isDarkMode}
                  />
                  <ActivityItem
                    icon={<Brain className="w-5 h-5 text-purple-600" />}
                    title="New insight discovered"
                    description="Tax-loss harvesting opportunity"
                    amount="$768 savings"
                    time="5 hours ago"
                    isDarkMode={isDarkMode}
                  />
                  <ActivityItem
                    icon={<Zap className="w-5 h-5 text-yellow-600" />}
                    title="RSU vested"
                    description="320 shares added to portfolio"
                    amount="+$24,800"
                    time="1 day ago"
                    positive
                    isDarkMode={isDarkMode}
                  />
                  <ActivityItem
                    icon={<CreditCard className="w-5 h-5 text-blue-600" />}
                    title="Reward points earned"
                    description="Chase Sapphire points added"
                    amount="+$120"
                    time="2 days ago"
                    positive
                    isDarkMode={isDarkMode}
                  />
                  <ActivityItem
                    icon={<Home className="w-5 h-5 text-orange-600" />}
                    title="Mortgage payment"
                    description="Principal reduced"
                    amount="-$1,650"
                    time="3 days ago"
                    isDarkMode={isDarkMode}
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'risk' && (
          <>
            <div className="mb-6">
              <h1 className={`${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-2`}>Risk & Fragility Analysis</h1>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Proactive identification of financial vulnerabilities</p>
            </div>

            {/* Overall Risk Dashboard */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <div className={`lg:col-span-2 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl p-8 shadow-sm border`}>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className={`${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-2`}>Risk Exposure Analysis</h2>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Scores above 70 indicate healthy position</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full border-4 border-yellow-400 flex items-center justify-center mb-2">
                      <span className="text-2xl">⚠️</span>
                    </div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Medium Risk</p>
                  </div>
                </div>

                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={riskExposureData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#f0f0f0'} />
                    <XAxis type="number" domain={[0, 100]} stroke={isDarkMode ? '#9ca3af' : '#9ca3af'} />
                    <YAxis dataKey="category" type="category" stroke={isDarkMode ? '#9ca3af' : '#9ca3af'} width={100} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: isDarkMode ? '#1f2937' : '#fff', 
                        border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`, 
                        borderRadius: '8px',
                        color: isDarkMode ? '#fff' : '#000'
                      }}
                    />
                    <Bar dataKey="benchmark" fill={isDarkMode ? '#4b5563' : '#e5e7eb'} name="Benchmark" radius={[0, 4, 4, 0]} />
                    <Bar dataKey="score" fill="#c9a86a" name="Your Score" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>

                <div className="grid grid-cols-4 gap-4 mt-6">
                  <RiskScoreBox label="Liquidity" score={85} status="good" isDarkMode={isDarkMode} />
                  <RiskScoreBox label="Income Diversity" score={45} status="danger" isDarkMode={isDarkMode} />
                  <RiskScoreBox label="Concentration" score={60} status="warning" isDarkMode={isDarkMode} />
                  <RiskScoreBox label="Debt Health" score={80} status="good" isDarkMode={isDarkMode} />
                </div>
              </div>

              {/* Risk Alerts */}
              <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl p-6 shadow-sm border`}>
                <h3 className={`${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>Risk Alerts</h3>
                <div className="space-y-4">
                  <RiskAlert
                    severity="high"
                    title="Income Concentration"
                    description="94% from single employer"
                    isDarkMode={isDarkMode}
                  />
                  <RiskAlert
                    severity="medium"
                    title="Asset Concentration"
                    description="24% in employer stock"
                    isDarkMode={isDarkMode}
                  />
                  <RiskAlert
                    severity="low"
                    title="High-Interest Debt"
                    description="$3,500 at 18.9% APR"
                    isDarkMode={isDarkMode}
                  />
                </div>

                <button className="w-full mt-6 py-3 bg-[#0a2540] text-white rounded-lg hover:bg-[#1a3a5a] transition-all">
                  Run Stress Test
                </button>
              </div>
            </div>

            {/* Detailed Risk Cards */}
            <div className="grid lg:grid-cols-2 gap-6">
              <RiskDetailCard
                title="Liquidity Risk"
                score={85}
                status="good"
                icon={<PiggyBank className="w-6 h-6" />}
                metrics={[
                  { label: 'Emergency fund', value: '7 months', status: 'good' },
                  { label: 'Liquid assets', value: '$42,300', status: 'good' },
                  { label: 'Monthly burn', value: '$6,100', status: 'neutral' }
                ]}
                recommendation="Healthy liquidity position. Consider investing excess beyond 6-month buffer."
                isDarkMode={isDarkMode}
              />
              <RiskDetailCard
                title="Income Dependency"
                score={45}
                status="danger"
                icon={<Briefcase className="w-6 h-6" />}
                metrics={[
                  { label: 'Single employer dependency', value: '94%', status: 'danger' },
                  { label: 'Passive income', value: '$320/mo', status: 'warning' },
                  { label: 'Income diversification', value: 'Low', status: 'danger' }
                ]}
                recommendation="Build passive income streams to reduce single-employer dependency risk."
                isDarkMode={isDarkMode}
              />
              <RiskDetailCard
                title="Concentration Risk"
                score={60}
                status="warning"
                icon={<TrendingUp className="w-6 h-6" />}
                metrics={[
                  { label: 'Employer stock', value: '24% of assets', status: 'warning' },
                  { label: 'Recommended max', value: '10-15%', status: 'neutral' },
                  { label: 'Geographic concentration', value: 'Single metro', status: 'warning' }
                ]}
                recommendation="Diversify employer stock. Sell vested RSUs and reinvest in broad market funds."
                isDarkMode={isDarkMode}
              />
              <RiskDetailCard
                title="Debt & Leverage"
                score={80}
                status="good"
                icon={<CreditCard className="w-6 h-6" />}
                metrics={[
                  { label: 'Debt-to-income', value: '2.8x', status: 'good' },
                  { label: 'High-interest debt', value: '$3,500', status: 'warning' },
                  { label: 'Debt service ratio', value: '18%', status: 'good' }
                ]}
                recommendation="Pay off credit card immediately. Consider refinancing if rates improve."
                isDarkMode={isDarkMode}
              />
            </div>
          </>
        )}

        {/* Other tabs remain similar but can be enhanced with more charts */}
      </main>
    </div>
  );
}

// Helper Components
function NavButton({ active, onClick, icon, label, isDarkMode }: any) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
        active
          ? 'bg-[#0a2540] text-white'
          : isDarkMode 
            ? 'text-gray-300 hover:bg-gray-700' 
            : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span className="hidden xl:inline">{label}</span>
    </button>
  );
}

function MobileNavButton({ active, onClick, icon, label, isDarkMode }: any) {
  return (
    <button
      onClick={onClick}
      className={`w-full px-4 py-3 rounded-lg transition-all flex items-center gap-3 text-left ${
        active
          ? 'bg-[#0a2540] text-white'
          : isDarkMode 
            ? 'text-gray-300 hover:bg-gray-700' 
            : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function TimeRangeSelector({ timeRange, setTimeRange, isDarkMode }: any) {
  const ranges = ['1M', '3M', '6M', '1Y', 'ALL'];
  return (
    <div className={`flex gap-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg p-1`}>
      {ranges.map(range => (
        <button
          key={range}
          onClick={() => setTimeRange(range)}
          className={`px-3 py-1 rounded text-sm transition-all ${
            timeRange === range
              ? isDarkMode
                ? 'bg-gray-600 text-white shadow-sm'
                : 'bg-white text-gray-900 shadow-sm'
              : isDarkMode
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {range}
        </button>
      ))}
    </div>
  );
}

function InsightItem({ icon, title, description, trend, isDarkMode }: any) {
  const colors = {
    positive: isDarkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200',
    warning: isDarkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-50 border-yellow-200',
    info: isDarkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200',
    neutral: isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
  };

  return (
    <div className={`${colors[trend]} border rounded-lg p-3 flex items-start gap-3 hover:shadow-md transition-all cursor-pointer`}>
      <div className="flex-shrink-0 mt-0.5">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-sm ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-0.5`}>{title}</p>
        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
      </div>
    </div>
  );
}

function ScoreGauge({ title, score, data, color, description, isDarkMode }: any) {
  return (
    <div className="text-center">
      <ResponsiveContainer width="100%" height={120}>
        <RadialBarChart 
          cx="50%" 
          cy="50%" 
          innerRadius="60%" 
          outerRadius="100%" 
          barSize={10} 
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <RadialBar
            background={{ fill: isDarkMode ? '#374151' : '#e5e7eb' }}
            dataKey="value"
            cornerRadius={10}
            fill={color}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="mt-2">
        <p className={`text-2xl ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-1`}>{score}/100</p>
        <p className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-900'} mb-1`}>{title}</p>
        <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>{description}</p>
      </div>
    </div>
  );
}

function MetricBox({ label, value, icon, color, isDarkMode }: any) {
  const colors = {
    yellow: isDarkMode ? 'bg-yellow-900/30 border-yellow-700 text-yellow-400' : 'bg-yellow-50 border-yellow-200 text-yellow-700',
    blue: isDarkMode ? 'bg-blue-900/30 border-blue-700 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-700',
    green: isDarkMode ? 'bg-green-900/30 border-green-700 text-green-400' : 'bg-green-50 border-green-200 text-green-700'
  };

  return (
    <div className={`${colors[color]} border rounded-lg p-3`}>
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <p className="text-xs">{label}</p>
      </div>
      <p className="text-lg">{value}</p>
    </div>
  );
}

function ActionItem({ priority, title, description, impact, icon, isDarkMode }: any) {
  const colors = {
    high: isDarkMode ? 'border-red-700 bg-red-900/20' : 'border-red-200 bg-red-50',
    medium: isDarkMode ? 'border-yellow-700 bg-yellow-900/20' : 'border-yellow-200 bg-yellow-50',
    low: isDarkMode ? 'border-blue-700 bg-blue-900/20' : 'border-blue-200 bg-blue-50'
  };

  const badgeColors = {
    high: 'bg-red-100 text-red-700',
    medium: 'bg-yellow-100 text-yellow-700',
    low: 'bg-blue-100 text-blue-700'
  };

  return (
    <div className={`${colors[priority]} border rounded-lg p-4 hover:shadow-md transition-all cursor-pointer`}>
      <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 w-10 h-10 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg flex items-center justify-center`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`${badgeColors[priority]} px-2 py-0.5 rounded text-xs`}>
              {priority}
            </span>
          </div>
          <p className={`text-sm ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-1`}>{title}</p>
          <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-green-700">Impact: {impact}</span>
            <button className="text-xs text-[#c9a86a] hover:text-[#b8965a]">
              Take action →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivityItem({ icon, title, description, amount, time, positive, isDarkMode }: any) {
  return (
    <div className={`flex items-start gap-3 p-3 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} rounded-lg transition-all`}>
      <div className={`flex-shrink-0 w-10 h-10 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg flex items-center justify-center`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-sm ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-0.5`}>{title}</p>
        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
        <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'} mt-1`}>{time}</p>
      </div>
      <div className="text-right">
        <p className={`text-sm ${positive ? 'text-green-600' : isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
          {amount}
        </p>
      </div>
    </div>
  );
}

function RiskScoreBox({ label, score, status, isDarkMode }: any) {
  const colors = {
    good: isDarkMode ? 'bg-green-900/30 border-green-700 text-green-400' : 'bg-green-50 border-green-300 text-green-700',
    warning: isDarkMode ? 'bg-yellow-900/30 border-yellow-700 text-yellow-400' : 'bg-yellow-50 border-yellow-300 text-yellow-700',
    danger: isDarkMode ? 'bg-red-900/30 border-red-700 text-red-400' : 'bg-red-50 border-red-300 text-red-700'
  };

  return (
    <div className={`${colors[status]} border rounded-lg p-3 text-center`}>
      <p className="text-2xl mb-1">{score}</p>
      <p className="text-xs">{label}</p>
    </div>
  );
}

function RiskAlert({ severity, title, description, isDarkMode }: any) {
  const colors = {
    high: isDarkMode ? 'bg-red-900/30 border-red-700' : 'bg-red-50 border-red-200',
    medium: isDarkMode ? 'bg-yellow-900/30 border-yellow-700' : 'bg-yellow-50 border-yellow-200',
    low: isDarkMode ? 'bg-blue-900/30 border-blue-700' : 'bg-blue-50 border-blue-200'
  };

  return (
    <div className={`${colors[severity]} border rounded-lg p-3`}>
      <div className="flex items-center gap-2 mb-1">
        <AlertTriangle className="w-4 h-4" />
        <p className="text-sm">{title}</p>
      </div>
      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
    </div>
  );
}

function RiskDetailCard({ title, score, status, icon, metrics, recommendation, isDarkMode }: any) {
  const statusColors = {
    good: isDarkMode ? 'text-green-400 bg-green-900/30' : 'text-green-600 bg-green-100',
    warning: isDarkMode ? 'text-yellow-400 bg-yellow-900/30' : 'text-yellow-600 bg-yellow-100',
    danger: isDarkMode ? 'text-red-400 bg-red-900/30' : 'text-red-600 bg-red-100'
  };

  const metricColors = {
    good: 'text-green-600',
    warning: 'text-yellow-600',
    danger: 'text-red-600',
    neutral: isDarkMode ? 'text-gray-400' : 'text-gray-600'
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl p-6 shadow-sm border`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 ${statusColors[status]} rounded-xl flex items-center justify-center`}>
            {icon}
          </div>
          <div>
            <h3 className={isDarkMode ? 'text-gray-100' : 'text-gray-900'}>{title}</h3>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Score: {score}/100</p>
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        {metrics.map((metric: any, idx: number) => (
          <div key={idx} className="flex items-center justify-between">
            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{metric.label}</span>
            <span className={`text-sm ${metricColors[metric.status]}`}>{metric.value}</span>
          </div>
        ))}
      </div>

      <div className={`pt-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <span className="text-[#c9a86a]">→</span> {recommendation}
        </p>
      </div>
    </div>
  );
}
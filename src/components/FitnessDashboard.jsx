import React, { useState } from 'react';
import MembersComponent from './MembersComponent';
import { 
  Users, 
  UserPlus, 
  UserCheck, 
  UserX, 
  MessageSquare, 
  History, 
  Calendar, 
  Settings, 
  BarChart3, 
  CreditCard, 
  Dumbbell, 
  Target, 
  PieChart, 
  TrendingUp, 
  TrendingDown,
  Bell,
  Search,
  Menu,
  X,
  Gift,
  DollarSign,
  Activity,
  ChevronDown,
  ChevronRight,
  Home,
  FileText,
  Briefcase,
  UserCog,
  MessageCircle,
  ClipboardList,
  CalendarDays,
  Cog,
  BarChart4,
  Wallet,
  Building2,
  Apple,
  Zap,
  LineChart,
  UserSquare,
  Phone,
  Sun,
  Moon
} from 'lucide-react';

const FitnessDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});
  const [activeComponent, setActiveComponent] = useState('dashboard');

  const toggleSubmenu = (key) => {
    setExpandedMenus(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const stats = [
    { title: 'Active Members', value: '100', change: '+100', color: 'from-blue-500 to-blue-600', icon: UserCheck },
    { title: 'Plan Expiry', value: '100', change: '+100', color: 'from-red-500 to-red-600', icon: CalendarDays },
    { title: 'Today Renewal', value: '100', change: '+100', color: 'from-green-500 to-green-600', icon: TrendingUp },
    { title: 'Month Renewal', value: '100', change: '+100', color: 'from-purple-500 to-purple-600', icon: Activity },
    { title: 'Pending Balance', value: '100', change: '+100', color: 'from-pink-500 to-pink-600', icon: DollarSign },
    { title: 'Member Present', value: '100', change: '+100', color: 'from-emerald-500 to-emerald-600', icon: Users },
    { title: 'Today Collection', value: '100', change: '+100', color: 'from-amber-500 to-amber-600', icon: Target },
    { title: 'Week Collection', value: '100', change: '+100', color: 'from-orange-500 to-orange-600', icon: BarChart4 }
  ];

  const birthdayMembers = [
    { name: 'Samprksha', message: 'Wish Samprksha Happy Birthday!', avatar: 'S', time: '2h ago' },
    { name: 'Samprksha', message: 'Wish Samprksha Happy Birthday!', avatar: 'S', time: '3h ago' },
    { name: 'Nidhi Raut', message: 'Wish Samprksha Happy Anniversary!', avatar: 'N', time: '5h ago' },
    { name: 'Nidhi Raut', message: 'Wish Samprksha Happy Anniversary!', avatar: 'N', time: '1d ago' },
    { name: 'Nidhi Raut', message: 'Wish Samprksha Happy Anniversary!', avatar: 'N', time: '2d ago' }
  ];

  const membershipData = [
    { name: 'Samrudhi', status: 'Membership 30-Jan-2025', avatar: 'S', type: 'expires' },
    { name: 'Ray', status: 'Membership 20-Jan-2025', avatar: 'R', type: 'expires' },
    { name: 'Siya', status: 'Membership 20-Jan-2025', avatar: 'S', type: 'expires' },
    { name: 'Tomy Roy', status: 'Membership 30-Jan-2025', avatar: 'T', type: 'expires' },
    { name: 'Kiran Dighe', status: 'Membership 20-Jan-2025', avatar: 'K', type: 'overdue' },
    { name: 'Sanvi', status: 'Membership 20-Jan-2025', avatar: 'S', type: 'overdue' }
  ];

  const sidebarItems = [
    { icon: Home, label: 'Dashboard', active: activeComponent === 'dashboard', key: 'dashboard' },
    { 
    icon: Users, 
    label: 'Members',
    key: 'members',
    active: activeComponent === 'members',
    hasSubmenu: true,
    submenu: [
      { icon: UserPlus, label: 'Add Members', key: 'add-members' },
      { icon: UserCheck, label: 'Active Members', key: 'active-members' },
      { icon: UserX, label: 'Inactive Members', key: 'inactive-members' },
      { icon: MessageSquare, label: 'Feedback', key: 'feedback' },
      { icon: History, label: 'Follow Up History', key: 'follow-up-history' },
      { icon: CalendarDays, label: 'Attendance', key: 'attendance' }
    ]
  },
    { icon: Cog, label: 'Config', key: 'config', active: activeComponent === 'config' },
    { icon: BarChart4, label: 'Reports', key: 'reports', active: activeComponent === 'reports' },
    { icon: CreditCard, label: 'Membership', key: 'membership', active: activeComponent === 'membership' },
    { icon: Wallet, label: 'Finance', key: 'finance', active: activeComponent === 'finance' },
    { icon: Apple, label: 'Diet', key: 'diet', active: activeComponent === 'diet' },
    { icon: Zap, label: 'Workout', key: 'workout', active: activeComponent === 'workout' },
    { icon: LineChart, label: 'Business Insights', key: 'business-insights', active: activeComponent === 'business-insights' },
    { icon: Target, label: 'Leads', key: 'leads', active: activeComponent === 'leads' },
    { icon: UserSquare, label: 'Staff', key: 'staff', active: activeComponent === 'staff' },
    { icon: Building2, label: 'Reminders', key: 'reminders', active: activeComponent === 'reminders' },
    { icon: MessageCircle, label: 'SMS', key: 'sms', active: activeComponent === 'sms' },
    { icon: Phone, label: 'Contact Us', key: 'contact-us', active: activeComponent === 'contact-us' },
    { icon: Settings, label: 'Settings', key: 'settings', active: activeComponent === 'settings' },
    { icon: UserCog, label: 'Profile', key: 'profile', active: activeComponent === 'profile' }
  ];

  const SidebarItem = ({ item, active, onClick }) => {
    const isExpanded = expandedMenus[item.label];
    const Icon = item.icon;
    
    return (
      <div className="mb-1">
        <div 
          className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-200 ${
            active 
              ? `${isDark ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'} shadow-lg` 
              : `${isDark ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'}`
          }`}
          onClick={() => {
            if (item.hasSubmenu) {
              toggleSubmenu(item.label);
            } else {
              onClick(item.key || item.label.toLowerCase());
            }
          }}
        >
          <div className="flex items-center space-x-3">
            <Icon className="w-5 h-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </div>
          {item.hasSubmenu && (
            <div className="transition-transform duration-200">
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </div>
          )}
        </div>
        
        {item.hasSubmenu && isExpanded && (
          <div className="ml-4 mt-2 space-y-1 border-l-2 border-gray-300 pl-4">
            {item.submenu.map((subItem, subIndex) => {
              const SubIcon = subItem.icon;
              return (
                <div
                  key={subIndex}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    isDark ? 'text-gray-400 hover:bg-gray-800 hover:text-white' : 'text-gray-500 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                  onClick={() => onClick(subItem.key || subItem.label.toLowerCase().replace(' ', '-'))}
                >
                  <SubIcon className="w-4 h-4" />
                  <span className="text-sm">{subItem.label}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const renderActiveComponent = () => {
    switch(activeComponent) {
        case 'members':
        case 'add-members':
        case 'active-members':
        case 'inactive-members':
        case 'feedback':
        case 'follow-up-history':
        case 'attendance':
            return <MembersComponent isDark={isDark} activeTab={activeComponent} />;
        
        // case 'config':
        // return <ConfigComponent isDark={isDark} />;
        
        // case 'reports':
        // return <ReportsComponent isDark={isDark} />;
        
        // case 'dashboard':
        // return <DashboardComponent isDark={isDark} />;

        // case 'settings':
        // return <SettingsComponent isDark={isDark} />;

        default:
        return (
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div key={index} className={`${themeClasses.card} rounded-2xl p-4 sm:p-6 border hover:border-opacity-50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl`}>
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                            <Icon className="w-6 h-6 text-white" />
                            </div>
                            <span className={`${isDark ? 'text-green-400' : 'text-green-600'} text-sm font-semibold`}>{stat.change}</span>
                        </div>
                        <div className="space-y-1">
                            <h3 className={`text-2xl font-bold ${themeClasses.text}`}>{stat.value}</h3>
                            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm font-medium`}>{stat.title}</p>
                        </div>
                        </div>
                    );
                    })}
                </div>

                {/* Charts and Data */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {/* Collection vs Expense */}
                    <div className="xl:col-span-1">
                    <div className={`${themeClasses.card} rounded-2xl p-6 border`}>
                        <h3 className={`text-lg font-bold mb-6 ${themeClasses.text}`}>Collection vs Expense</h3>
                        <div className="relative">
                        <div className="w-48 h-48 mx-auto relative">
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" fill="transparent" stroke={isDark ? "#374151" : "#E5E7EB"} strokeWidth="8" />
                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="url(#gradient1)" strokeWidth="8" strokeDasharray="188.4" strokeDashoffset="75.36" strokeLinecap="round" transform="rotate(-90 50 50)" />
                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="url(#gradient2)" strokeWidth="8" strokeDasharray="188.4" strokeDashoffset="125.6" strokeLinecap="round" transform="rotate(90 50 50)" />
                            <defs>
                                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#10B981" />
                                <stop offset="100%" stopColor="#34D399" />
                                </linearGradient>
                                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#EF4444" />
                                <stop offset="100%" stopColor="#F87171" />
                                </linearGradient>
                            </defs>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className={`text-2xl font-bold ${themeClasses.text}`}>₹7,000</div>
                                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Net</div>
                            </div>
                            </div>
                        </div>
                        <div className="mt-6 space-y-3">
                            <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-400 rounded-full"></div>
                                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Collection</span>
                            </div>
                            <span className={`text-sm font-semibold ${themeClasses.text}`}>₹10,000</span>
                            </div>
                            <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
                                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Expense</span>
                            </div>
                            <span className={`text-sm font-semibold ${themeClasses.text}`}>₹3,000</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* Collection Chart */}
                    <div className="xl:col-span-1">
                    <div className={`${themeClasses.card} rounded-2xl p-6 border`}>
                        <h3 className={`text-lg font-bold mb-6 ${themeClasses.text}`}>Collection Trend</h3>
                        <div className="h-64">
                        <svg className="w-full h-full" viewBox="0 0 300 200">
                            <defs>
                            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                            </linearGradient>
                            </defs>
                            <path d="M 0 180 L 50 160 L 100 140 L 150 120 L 200 100 L 250 80 L 300 60 L 300 200 L 0 200 Z" fill="url(#areaGradient)" />
                            <path d="M 0 180 L 50 160 L 100 140 L 150 120 L 200 100 L 250 80 L 300 60" stroke="#3B82F6" strokeWidth="3" fill="none" strokeLinecap="round" />
                            {[0, 50, 100, 150, 200, 250, 300].map((x, i) => (
                            <circle key={i} cx={x} cy={180 - i * 20} r="4" fill="#3B82F6" />
                            ))}
                        </svg>
                        </div>
                        <div className={`mt-4 flex justify-between text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <span>22 Nov</span>
                        <span>23 Nov</span>
                        <span>24 Nov</span>
                        <span>25 Nov</span>
                        </div>
                    </div>
                    </div>

                    {/* Birthdays & Anniversaries */}
                    <div className="xl:col-span-1">
                    <div className={`${themeClasses.card} rounded-2xl p-6 border`}>
                        <h3 className={`text-lg font-bold mb-6 ${themeClasses.text} flex items-center`}>
                        <Gift className="w-5 h-5 mr-2" />
                        Birthdays & Anniversaries
                        </h3>
                        <div className="space-y-3">
                        {birthdayMembers.map((member, index) => (
                            <div key={index} className={`flex items-center space-x-3 p-3 ${themeClasses.memberCard} rounded-xl transition-all duration-200`}>
                            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                                <span className="text-sm font-bold text-white">{member.avatar}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className={`text-sm font-semibold ${themeClasses.text} truncate`}>{member.name}</p>
                                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'} truncate`}>{member.message}</p>
                            </div>
                            <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{member.time}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                </div>

                {/* Membership Status */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className={`${themeClasses.card} rounded-2xl p-6 border`}>
                    <h3 className={`text-lg font-bold mb-6 ${themeClasses.text}`}>Membership Expires</h3>
                    <div className="space-y-3">
                        {membershipData.filter(m => m.type === 'expires').map((member, index) => (
                        <div key={index} className={`flex items-center justify-between p-4 ${themeClasses.expiresCard} rounded-xl transition-all duration-200`}>
                            <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-md">
                                <span className="text-sm font-bold text-white">{member.avatar}</span>
                            </div>
                            <div>
                                <p className={`text-sm font-semibold ${themeClasses.text}`}>{member.name}</p>
                                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{member.status}</p>
                            </div>
                            </div>
                            <button className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xs rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                            Renew
                            </button>
                        </div>
                        ))}
                    </div>
                    </div>

                    <div className={`${themeClasses.card} rounded-2xl p-6 border`}>
                    <h3 className={`text-lg font-bold mb-6 ${themeClasses.text}`}>Membership Overdues</h3>
                    <div className="space-y-3">
                        {membershipData.filter(m => m.type === 'overdue').map((member, index) => (
                        <div key={index} className={`flex items-center justify-between p-4 ${themeClasses.overdueCard} rounded-xl transition-all duration-200`}>
                            <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                                <span className="text-sm font-bold text-white">{member.avatar}</span>
                            </div>
                            <div>
                                <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>{member.name}</p>
                                <p className={`text-xs ${isDark ? 'text-red-300' : 'text-red-600'}`}>{member.status}</p>
                            </div>
                            </div>
                            <button className="px-3 py-1.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-xs rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                            Contact
                            </button>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        );
    }
  };

  const themeClasses = {
    background: isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
    text: isDark ? 'text-white' : 'text-gray-800',
    sidebar: isDark ? 'bg-gradient-to-b from-gray-900 to-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-xl',
    header: isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200 shadow-sm',
    card: isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' : 'bg-white border-gray-200 shadow-lg',
    input: isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500',
    memberCard: isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100',
    expiresCard: isDark ? 'bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600' : 'bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100',
    overdueCard: isDark ? 'bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700' : 'bg-gradient-to-r from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100'
  };

  return (
    <div className={`min-h-screen ${themeClasses.background} ${themeClasses.text} transition-colors duration-300`}>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
      
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-72 ${themeClasses.sidebar} border-r z-50 transform transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">FitGym</h1>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Management System</p>
              </div>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-1 rounded-lg hover:bg-gray-100">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Sidebar Navigation - Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1" style={{ maxHeight: 'calc(100vh - 140px)' }}>
          {sidebarItems.map((item, index) => (
            <SidebarItem 
                key={index} 
                item={item} 
                active={item.active}
                onClick={setActiveComponent}
            />
            ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-72 transition-all duration-300">
        {/* Header */}
        <header className={`${themeClasses.header} border-b px-4 sm:px-6 py-4 sticky top-0 z-30`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setSidebarOpen(true)} 
                className={`lg:hidden p-2 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="relative hidden sm:block">
                <Search className={`w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                <input
                  type="text"
                  placeholder="Search members, plans..."
                  className={`${themeClasses.input} rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64 xl:w-80 transition-all`}
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-xl transition-all duration-200 ${isDark ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <div className="relative">
                <button className={`p-2 rounded-xl transition-colors ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}>
                  <Bell className="w-5 h-5" />
                </button>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-medium">3</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-right hidden sm:block">
                  <div className={`text-sm font-semibold ${themeClasses.text}`}>Mini Roy</div>
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Admin</div>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-sm font-bold text-white">MR</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Search */}
          <div className="mt-4 sm:hidden">
            <div className="relative">
              <Search className={`w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
              <input
                type="text"
                placeholder="Search members, plans..."
                className={`${themeClasses.input} rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full transition-all`}
              />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6 space-y-6">
           {renderActiveComponent()}
        </main>
      </div>
    </div>
  );
};

export default FitnessDashboard;












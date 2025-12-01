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
  List,
  Clock,
  Snowflake,
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
  MinusCircle,
  CircleQuestionMark,
  Newspaper,
  Share2,
  SquareUser,
  FolderDown,
  ThumbsUp,
  BadgeQuestionMark,
  BadgeIndianRupee,
  QrCode,
  BanknoteArrowDown,
  BellPlus,
  Star,
  Files,
  Boxes,
  Watch,
  ListRestart,
  UserRoundPlus,
  AlarmClock,
  FileCog,
  SquareDashedKanban,
  MessageSquarePlus,
  FileUser,
  SquareDashedMousePointer,
  SquareCode,
  ListChecks,
  ChartBarStacked,
  BookUser
} from 'lucide-react';
import Reports from './Reports';
import AllMemberships from './Membership/AllMemberships';
import PendingBalance from './Membership/PendingBalance';
import Sales from './Membership/Sales';
import FreezeInfo from './Membership/FreezeInfo';
import ConfigMaster from './Membership/ConfigMaster';
import AllInvoices from './Finance/AllInvoices';
import TodayInvoices from './Finance/TodayInvoices';
import DaywiseCollection from './Finance/DaywiseCollection';
import MonthwiseCollection from './Finance/MonthwiseCollection';
import Expenses from './Finance/Expenses';
import Summary from './Finance/Summary';
import ConfigPayment from './Finance/ConfigPayment';
import AllDietPlans from './Diet/AllDietPlans';
import ConfigDiet from './Diet/ConfigDiet';
import Versions from './Help/Versions';
import AboutUs from './Help/AboutUs';
import MyReferrals from './Help/MyReferrals';
import Faq from './Help/Faq';
import TrackYourSuggestions from './Help/TrackYourSuggestions';
import Article from './Help/Article';
import Bi_dashboard from './Business_Insights/BI_dashboard';
import PaymentRequest from './Member_App/Paymentrequest';
import QRcodes from './Member_App/QRcodes';
import Paymentgateway from './Member_App/Paymentgateway';
import PushNotification from './Member_App/PushNotification';
import Groups from './Member/Groups';
import FollowUpTypes from './Member/FollowUpTypes';
import Categories from './Member/Categories';
import MasterWorkoutPlan from './Workout/MasterWorkoutPlan';
import Lead_Categories from './Leads/Lead_Categories';
import FollowUpsTypes from './Leads/FollowUpsTypes';
import Sources from './Leads/Sources';
import Status from './Leads/Status';
import Staff_Types from './Staff/Staff_Types';
import General_templates from './SMS/General_templates';
import Bulk_whatsapp from './SMS/Bulk_whatsapp';
import Sms_settings from './SMS/Sms_settings';
import All_members from './Member/All_members';
import All_leads from './Leads/All_leads';
import Leads_followupshistory from './Leads/Leads_followupshistory';
import Feedback from './Member/Feedback';
import Follow_ups_history from './Member/Follow_ups_history';
import Attendance from './Member/Attendance';
import Add_staff from './Staff/Add_staff';
import All_staff from './Staff/All_staff';
import Staff_attendance from './Staff/Staff_attendance';
import AllWorkoutPlan from './Workout/AllWorkoutPlan';
import Sms_history from './SMS/Sms_history';
import General_reminders from './Reminders/General_reminders';
import ReminderCalendar from './Reminders/ReminderCalendar';

const FitnessDashboard = () => {
  // State for sidebar visibility and menu expansion
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});
  const [activeComponent, setActiveComponent] = useState('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);

  // Example notifications
  const notifications = [
    { id: 1, text: "Samruddhi's membership expires soon.", time: "2 min ago" },
    { id: 2, text: "New member added: Nikhil.", time: "10 min ago" },
    { id: 3, text: "Payment received from Siya.", time: "1 hour ago" },
  ];

  // Function to toggle submenus in the sidebar
  const toggleSubmenu = (key) => {
    setExpandedMenus(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Static data for the dashboard stats section
  const stats = [
    { title: 'Active Members', value: '100', color: 'from-blue-500 to-blue-600', icon: UserCheck },
    { title: 'Today Renewal', value: '100', color: 'from-green-500 to-green-600', icon: TrendingUp },
    { title: 'Month Renewal', value: '100', color: 'from-purple-500 to-purple-600', icon: Activity },
    { title: 'Pending Balance', value: '100', color: 'from-pink-500 to-pink-600', icon: DollarSign },
    { title: 'Today Collection', value: '100', color: 'from-amber-500 to-amber-600', icon: Target },
    { title: 'Week Collection', value: '100', color: 'from-orange-500 to-orange-600', icon: BarChart4 }
  ];

  // Static data for birthdays and anniversaries
  const birthdayMembers = [
    { name: 'Samprksha', message: 'Wish Samprksha Happy Birthday!', avatar: 'S', time: '23/09/2004' },
    { name: 'Samprksha', message: 'Wish Samprksha Happy Birthday!', avatar: 'S', time: '23/09/2004' },
    { name: 'Samprksha', message: 'Wish Samprksha Happy Birthday!', avatar: 'S', time: '23/09/2004' },
    { name: 'Nidhi Raut', message: 'Wish Samprksha Happy Anniversary!', avatar: 'N', time: '5/01/2000' },
    { name: 'Nidhi Raut', message: 'Wish Samprksha Happy Anniversary!', avatar: 'N', time: '5/01/2000' },
    { name: 'Nidhi Raut', message: 'Wish Samprksha Happy Anniversary!', avatar: 'N', time: '5/01/2000' },
    { name: 'Nidhi Raut', message: 'Wish Samprksha Happy Anniversary!', avatar: 'N', time: '5/01/2000' }
  ];

  // Static data for membership status
  const membershipData = [
    { name: 'Samrudhi', status: 'Membership 30-Jan-2025', avatar: 'S', type: 'expires' },
    { name: 'Ray', status: 'Membership 20-Jan-2025', avatar: 'R', type: 'expires' },
    { name: 'Siya', status: 'Membership 20-Jan-2025', avatar: 'S', type: 'expires' },
    { name: 'Tomy Roy', status: 'Membership 30-Jan-2025', avatar: 'T', type: 'expires' },
    { name: 'Kiran Dighe', status: 'Membership 20-Jan-2025', avatar: 'K', type: 'overdue' },
    { name: 'Sanvi', status: 'Membership 20-Jan-2025', avatar: 'S', type: 'overdue' },
    { name: 'Dipak', status: 'Membership 20-Jan-2025', avatar: 'D', type: 'overdue' },
    { name: 'Sakshi', status: 'Membership 20-Jan-2025', avatar: 'S', type: 'overdue' }
  ];

  // Sidebar navigation items
  const sidebarItems = [
    { icon: Home, label: 'Dashboard', active: activeComponent === 'dashboard', key: 'dashboard' },
    { 
      icon: Users, 
      label: 'Members',
      key: 'members',
      active: activeComponent === ('members'),
      hasSubmenu: true,
      submenu: [
        { icon: Users, label: 'All Members', key: 'all-members' },
        { icon: MessageSquare, label: 'Feedback', key: 'feedback' },
        { icon: History, label: 'Follow Up History', key: 'follow-up-history' },
        { icon: CalendarDays, label: 'Attendance', key: 'attendance' },
        { 
          icon: Settings, 
          label: 'Config',
          key: 'help-config',
          active: activeComponent === ('help-config'),
          hasSubmenu: true,
          submenu: [
            { icon: Boxes, label: 'Groups', key: 'groups' },
            { icon: SquareUser, label: 'Follow-Up Types', key: 'follow-up-types' },
            { icon: Files, label: 'Categories', key: 'categories' }
          ]
        }
      ]
    },
    { icon: BarChart4, label: 'Reports', key: 'reports', active: activeComponent === 'reports' },
    { 
      icon: CreditCard, 
      label: 'Membership', 
      key: 'membership', 
      active: activeComponent.startsWith('membership'),
      hasSubmenu: true,
      submenu: [
        { icon: List, label: 'All Membership', key: 'all-membership' },
        { icon: Clock, label: 'Pending Balance', key: 'pending-balance' },
        { icon: BarChart4, label: 'Sales', key: 'sales' },
        { icon: Snowflake, label: 'Freeze Info', key: 'freeze-info' },
        { icon: Settings, label: 'Config', key: 'config-master' }
      ]
    },
    { 
      icon: Wallet, 
      label: 'Finance', 
      key: 'finance', 
      active: activeComponent.startsWith('finance'),
      hasSubmenu: true,
      submenu: [
        { icon: List, label: 'All Invoices', key: 'all-invoices' },
        { icon: CalendarDays, label: 'Today Invoices', key: 'today-invoices' },
        { icon: Sun, label: 'Daywise Collection', key: 'daywise-collection' },
        { icon: Calendar, label: 'Monthwise Collection', key: 'monthwise-collection' },
        { icon: MinusCircle, label: 'Expenses', key: 'expenses' },
        { icon: PieChart, label: 'Summary', key: 'summary' },
        { icon: Settings, label: 'Config', key: 'config-payment' }
      ]
    },
    {
      icon: Apple, 
      label: 'Diet', 
      key: 'diet', 
      active: activeComponent.startsWith('diet'),
      hasSubmenu: true,
      submenu: [
        { icon: List, label: 'All Diet Plans', key: 'all-diet-plans' },
        { icon: Settings, label: 'Config', key: 'config-diet' }
      ]
    },
    { 
      icon: Zap, 
      label: 'Workout',
      key: 'workout',
      active: activeComponent.startsWith('member-app'),
      hasSubmenu: true,
      submenu: [
        { icon: Watch, label: 'All Workout Plan', key: 'all-workout-plans' },
        { 
          icon: Settings, 
          label: 'Config',
          key: 'workout-config',
          active: activeComponent.startsWith('workout-config'),
          hasSubmenu: true,
          submenu: [
            { icon: Watch, label: 'Master Workout Plans', key: 'master-workout-plans' }
          ]
        }
      ]
    },
    {
      icon: LineChart, 
      label: 'Business Insights', 
      key: 'business-insights', 
      active: activeComponent.startsWith('business-insights'),
      hasSubmenu: true,
      submenu: [
        { icon: Star, label: 'Dashboard', key: 'business-insights-dashboard' }
      ]
    },
    { 
      icon: Users, 
      label: 'Leads',
      key: 'leads',
      active: activeComponent === ('leads'),
      hasSubmenu: true,
      submenu: [
        { icon: Users, label: 'All Leads', key: 'all-leads' },
        { icon: ListRestart, label: 'Follow Ups History', key: 'leads-follow-ups-history' },
        { 
          icon: Settings, 
          label: 'Config',
          key: 'leads-config',
          active: activeComponent === ('leads-config'),
          hasSubmenu: true,
          submenu: [
            { icon: ChartBarStacked, label: 'Categories', key: 'leads-categories' },
            { icon: ListChecks, label: 'Follow Up Types', key: 'follow-ups-types' },
            { icon: SquareCode, label: 'Sources', key: 'sources' },
            { icon: SquareDashedMousePointer, label: 'Status', key: 'status' }
          ]
        }
      ]
    },
    { 
      icon: UserSquare, 
      label: 'Staff',
      key: 'staff',
      active: activeComponent === ('staff'),
      hasSubmenu: true,
      submenu: [
        { icon: Users, label: 'All Staff', key: 'all-staff' },
        { icon: CalendarDays, label: 'Attendance', key: 'staff-attendance' },
        { 
          icon: Settings, 
          label: 'Config',
          key: 'leads-config',
          active: activeComponent === ('staff-config'),
          hasSubmenu: true,
          submenu: [
            { icon: FileUser, label: 'Staff Types', key: 'staff-types' }
          ]
        }
      ]
    },
    {
      icon: Building2, 
      label: 'Reminders', 
      key: 'reminders', 
      active: activeComponent === ('reminders'),
      hasSubmenu: true,
      submenu: [
        { icon:AlarmClock, label: 'General Reminders', key: 'general-reminder' },
        { icon: CalendarDays, label: 'Calendar', key: 'calendar' }
      ]
    },
    { 
      icon: MessageCircle, 
      label: 'SMS',
      key: 'sms',
      active: activeComponent === ('sms'),
      hasSubmenu: true,
      submenu: [
        { icon: History, label: 'SMS History', key: 'sms-history' },
        { 
          icon: Settings, 
          label: 'Config',
          key: 'sms-config',
          active: activeComponent === ('sms-config'),
          hasSubmenu: true,
          submenu: [
            { icon: SquareDashedKanban, label: 'General Templates', key: 'general-templates' },
            { icon: MessageSquarePlus, label: 'Bulk WhatsApp', key: 'bulk-whatsapp' },
            { icon: FileCog, label: 'SMS Settings', key: 'sms-settings' }
          ]
        }
      ]
    },
    { 
      icon: BadgeQuestionMark, 
      label: 'Help',
      key: 'help',
      active: activeComponent.startsWith('help'),
      hasSubmenu: true,
      submenu: [
        { icon: FolderDown, label: 'Versions', key: 'versions' },
        { icon: SquareUser, label: 'About Us', key: 'about-us' },
        { icon: Share2, label: 'My Referrals', key: 'my-referrals' },
        { icon: CircleQuestionMark, label: 'FAQ', key: 'faq' },
        { icon: Newspaper, label: 'Article', key: 'article' },
        { icon: ThumbsUp, label: 'Track Your Suggestions', key: 'track-your-suggestions' }
      ]
    },
    { icon: Phone, label: 'Contact Us', key: 'contact-us', active: activeComponent === 'contact-us' },
    { 
      icon: BookUser, 
      label: 'Member App',
      key: 'member-app',
      active: activeComponent === ('member-app'),
      hasSubmenu: true,
      submenu: [
        { icon: BadgeIndianRupee, label: 'Payment Request', key: 'payment-request' },
        { icon: QrCode, label: 'QR Codes', key: 'qr-codes' },
        { icon: BanknoteArrowDown, label: 'Payment Gateways', key: 'payment-gateways' },
        { 
          icon: Settings, 
          label: 'Config',
          key: 'help-config',
          active: activeComponent.startsWith('help-config'),
          hasSubmenu: true,
          submenu: [
            { icon: BellPlus, label: 'Push Notifications', key: 'push-notifications' }
          ]
        }
      ]
    },
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
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
              : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'
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
            {item.submenu.map((subItem, subIndex) => (
              <SidebarItem
                key={subIndex}
                item={subItem}
                active={subItem.active}
                onClick={onClick}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  // Function to render the main content based on the active component state
  const renderActiveComponent = () => {
    switch(activeComponent) {
      case 'members':
      case 'all-members':
        return <All_members />;
      case 'feedback':
        return <Feedback/>;
      case 'follow-up-history':
        return <Follow_ups_history/>;
      case 'attendance':
        return <Attendance/>
      case 'config':
      case 'groups':
        return <Groups />;
      case 'follow-up-types':
        return <FollowUpTypes />;
      case 'categories':
        return <Categories />;
      case 'reports':
        return <Reports />;
      case 'all-membership':
        return <AllMemberships />;
      case 'pending-balance':
        return <PendingBalance />;
      case 'sales':
        return <Sales/>;
      case 'freeze-info':
        return <FreezeInfo />;
      case 'config-master':
        return <ConfigMaster />;
      case 'all-invoices':
        return <AllInvoices />;
      case 'today-invoices':
        return <TodayInvoices />;
      case 'daywise-collection':
        return <DaywiseCollection />;
      case 'monthwise-collection':
        return <MonthwiseCollection />;
      case 'expenses':
        return <Expenses />;
      case 'summary':
        return <Summary />;
      case 'config-payment':
        return <ConfigPayment />;
      case 'all-diet-plans':
        return <AllDietPlans />;
      case 'config-diet':
        return <ConfigDiet />;
      case 'help':
      case 'versions':
        return <Versions />;
      case 'about-us':
        return <AboutUs />;
      case 'my-referrals':
        return <MyReferrals />;
      case 'faq':
        return <Faq />;
      case 'article':
        return <Article />;
      case 'track-your-suggestions':
        return <TrackYourSuggestions />;
      case 'business-insights':
      case 'business-insights-dashboard':
        return <Bi_dashboard />;
      case 'member-app':
      case 'payment-request':
        return <PaymentRequest />;
      case 'qr-codes':
        return <QRcodes />;
      case 'payment-gateways':
        return <Paymentgateway />;
      case 'push-notifications':
        return <PushNotification />;
      case 'Workout':
      case 'all-workout-plans':
        return <AllWorkoutPlan/>
      case 'workout-config':
      case 'master-workout-plans':
        return <MasterWorkoutPlan />;
      case 'leads':
      case 'all-leads':
        return <All_leads/>;
      case 'add-leads':
        return <Add_leads/>
      case 'leads-follow-ups-history':
        return <Leads_followupshistory/>
      case 'leads-config':
      case 'leads-categories':
        return <Lead_Categories />;
      case 'follow-ups-types':
        return <FollowUpsTypes />;
      case 'sources':
        return <Sources />;
      case 'status':
        return <Status />;
      case 'sms':
      case 'sms-history':
        return <Sms_history/>;
      case 'general-templates':
        return <General_templates />;
      case 'bulk-whatsapp':
        return <Bulk_whatsapp />;
      case 'sms-settings':
        return <Sms_settings />;
      case 'staff':
      case 'all-staff':
        return <All_staff/>;
      case 'add-staff':
        return <Add_staff/>
      case 'staff-attendance':
        return <Staff_attendance/>
      case 'staff-config':
      case 'staff-types':
        return <Staff_Types />;
      case 'reminders':
      case 'general-reminder':
        return<General_reminders/>
      case 'calendar':
        return <ReminderCalendar/>;
      default:
        return (
          <div>
            {/* Stats section */}
            <div className='pt-6'></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white border-gray-200 shadow-lg rounded-2xl px-6 py-8 border flex align-middle justify-around  h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                      <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Dashboard Cards Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 px-4 ">
              {/* Collection vs Expense Donut Chart */}
              <div className="bg-white border-gray-200 shadow-lg rounded-2xl px-6 py-8 border flex flex-col justify-between h-full ">
                <h3 className="text-lg font-bold mb-6 text-gray-800 text-center">Collection vs Expense</h3>
                <div className="relative">
                  <div className="w-48 h-48 mx-auto relative">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="#E5E7EB" strokeWidth="8" />
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
                        <div className="text-2xl font-bold text-gray-800">₹7,000</div>
                        <div className="text-sm text-gray-600">Net</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-400 rounded-full"></div>
                        <span className="text-sm text-gray-700">Collection</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-800">₹10,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
                        <span className="text-sm text-gray-700">Expense</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-800">₹3,000</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Birthdays & Anniversaries List with scroller */}
              <div className="bg-white border-gray-200 shadow-lg rounded-2xl px-6 py-8 border flex flex-col justify-between h-full">
                <h3 className="text-lg font-bold mb-6 text-gray-800 text-center">
                  Birthdays & Anniversaries
                </h3>
                <div className="space-y-3 overflow-y-auto" style={{ maxHeight: '260px' }}>
                  {birthdayMembers.map((member, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-sm font-bold text-white">{member.avatar}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-800 truncate">{member.name}</p>
                        <p className="text-xs text-gray-600 truncate">{member.message}</p>
                      </div>
                      <span className="text-xs text-gray-500">{member.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Membership Expires */}
              <div className="bg-white border-gray-200 shadow-lg rounded-2xl px-6 py-8 border flex flex-col justify-between h-full">
                <h3 className="text-lg font-bold mb-6 text-gray-800 text-center">Membership Expires</h3>
                <div className="space-y-3">
                  {membershipData.filter(m => m.type === 'expires').map((member, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-xl transition-all duration-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-md">
                          <span className="text-sm font-bold text-white">{member.avatar}</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{member.name}</p>
                          <p className="text-xs text-gray-600">{member.status}</p>
                        </div>
                      </div>
                      <button className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xs rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                        Renew
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              {/* Membership Overdues */}
              <div className="bg-white border-gray-200 shadow-lg rounded-2xl px-6 py-8 border flex flex-col justify-between h-full">
                <h3 className="text-lg font-bold mb-6 text-gray-800 text-center">Membership Overdues</h3>
                <div className="space-y-3">
                  {membershipData.filter(m => m.type === 'overdue').map((member, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 rounded-xl transition-all duration-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-md">
                          <span className="text-sm font-bold text-white">{member.avatar}</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{member.name}</p>
                          <p className="text-xs text-red-600">{member.status}</p>
                        </div>
                      </div>
                      <button className="px-3 py-1.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-xs rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                        Contact
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className='py-1'></div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800 transition-colors duration-300`}>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-72 bg-white border-gray-200 shadow-xl border-r z-50 transform transition-transform duration-300 ${
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
                <p className={`text-xs text-gray-500`}>Management System</p>
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
        <header className={`bg-white border-gray-200 shadow-sm border-b px-4 sm:px-6 py-4 sticky top-0 z-30`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setSidebarOpen(true)} 
                className={`lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors`}
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="relative hidden sm:block">
                <Search className={`w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500`} />
                <input
                  type="text"
                  placeholder="Search members, plans..."
                  className={`bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64 xl:w-80 transition-all`}
                />
              </div>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="relative">
                <button
                  className={`p-2 rounded-xl transition-colors hover:bg-gray-100`}
                  onClick={() => setShowNotifications((prev) => !prev)}
                >
                  <Bell className="w-5 h-5" />
                </button>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-medium">{notifications.length}</span>
                </div>
                {/* Notification Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                    <div className="p-4 border-b font-semibold text-gray-700 flex justify-between items-center">
                      <span>Notifications</span>
                      <button
                        className="text-xs text-gray-400 hover:text-gray-700"
                        onClick={() => setShowNotifications(false)}
                        title="Close"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <ul className="max-h-64 overflow-y-auto">
                      {notifications.map((n) => (
                        <li key={n.id} className="px-4 py-3 border-b last:border-b-0 hover:bg-gray-50 transition">
                          <div className="text-sm text-gray-800">{n.text}</div>
                          <div className="text-xs text-gray-400 mt-1">{n.time}</div>
                        </li>
                      ))}
                      {notifications.length === 0 && (
                        <li className="px-4 py-3 text-gray-400 text-sm">No notifications.</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-right hidden sm:block">
                  <div className={`text-sm font-semibold text-gray-800`}>Mini Roy</div>
                  <div className={`text-xs text-gray-500`}>Admin</div>
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
              <Search className={`w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500`} />
              <input
                type="text"
                placeholder="Search members, plans..."
                className={`bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full transition-all`}
              />
            </div>
          </div>
        </header>
        {/* Dashboard Content */}
        <main>
            {renderActiveComponent()}
        </main>
      </div>
    </div>
  );
};

export default FitnessDashboard;
import {
  LayoutDashboard,
  Briefcase,
  Calendar,
  Users,
  Settings,
} from "lucide-react";

import { useState } from "react";
import MyApplications from "../components/myapplications";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/dashboard";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/", component: <Dashboard /> },
  { name: "My Applications", icon: Briefcase, href: "/myapplications", component: <MyApplications /> },
  { name: "Interviews", icon: Calendar, href: "#", component: <div>Interviews Page</div> },
  { name: "Contacts", icon: Users, href: "#", component: <div>Contacts Page</div> },
  { name: "Settings", icon: Settings, href: "#", component: <div>Settings Page</div> },
];

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderMainContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "myapplications":
        return <MyApplications />;
      case "interviews":
        return <div>Interviews Page</div>;
      case "contacts":
        return <div>Contacts Page</div>;
      case "settings":
        return <div>Settings Page</div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        navItems={navItems.map((item) => ({
          ...item,
          onClick: () => setActiveTab(item.name.toLowerCase().replace(/ /g, "")),
        })) } 
        
        setIsSidebarOpen={(isOpen) => setIsSidebarOpen(isOpen)}/>
      

      {/* --- Main Content Area --- */}
      <div className="h-20 flex-1 flex flex-col justify-between lg:ml-5 sm:w-full md:w-full bg-amber-700">
        <Navbar
          setIsSidebarOpen={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
        />
      </div>

      {/* Dynamic Content Based on Active Tab */}
      <main className="p-4 lg:p-8 mt-10 w-full">
        {renderMainContent()}
      </main>
    </div>
  );
}
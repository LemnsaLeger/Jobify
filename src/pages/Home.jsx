import {
  LayoutDashboard,
  Briefcase,
  Calendar,
  Users,
  Settings,
  PlusCircle,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Dashboard from "../components/dashboard";

import "../../src/index.css";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "#" },
  { name: "My Applications", icon: Briefcase, href: "#" },
  { name: "Interviews", icon: Calendar, href: "#" },
  { name: "Contacts", icon: Users, href: "#" },
  { name: "Settings", icon: Settings, href: "#" },
];


export default function Home({children}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar isSidebarOpen={isSidebarOpen} navItems={navItems} />

        {/* --- Main Content Area --- */}
        <div className="h-20 flex-1 flex flex-col w-auto justify-between lg:ml-5 sm:w-full md:w-full bg-amber-700">
          <Navbar
            setIsSidebarOpen={
              () => setIsSidebarOpen(!isSidebarOpen)
            }
            isSidebarOpen={isSidebarOpen}
          />
        </div>

        {/* Dashboard Content */}
        <main className="p-4 lg:p-8 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    );
}
import { useState } from "react";
import { Briefcase, Plus, Search, Menu, X } from "lucide-react";

import MyApplications from "../components/myapplications";


export default function JobTrackerApp() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans text-slate-900">
      {/* Sidebar Navigation */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#1a2c38] text-white p-6 transform transition-transform lg:relative lg:translate-x-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex items-center gap-3 mb-10">
          <div className="p-1.5 bg-blue-500 rounded-lg">📊</div>
          <h2 className="text-xl font-bold tracking-tight">JobTracker</h2>
        </div>

        <nav className="space-y-1">
          {["Dashboard", "My Applications", "Interviews", "Contacts", "Settings"].map((item) => (
            <a
              key={item}
              href="#"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${item === "My Applications" ? "bg-blue-600 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}
            >
              {item === "My Applications" ? (
                <Briefcase size={20} />
              ) : (
                <item.icon size={20} />
              )}
              <span className="font-medium">{item}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 flex flex-col bg-gray-100">
        {/* Navbar */}
        <header className="h-20 flex items-center justify-between px-6 lg:px-10 bg-white/80 backdrop-blur-md sticky top-0 z-40">
          <button
            className="lg:hidden p-2"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X /> : <Menu />}
          </button>

          <div className="flex-1 max-w-md ml-4 lg:ml-0">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search applications..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center gap-2">
            <Plus size={18} />{" "}
            <span className="hidden sm:inline">Add Application</span>
          </button>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 lg:p-10 max-w-6xl mx-auto w-full">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">
              My Applications
            </h1>
          </header>

          <MyApplications />
        </div>
      </main>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

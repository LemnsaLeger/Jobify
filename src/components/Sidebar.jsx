import { PlusCircle } from "lucide-react";
import "./components-styles.css";

export default function Sidebar({isSidebarOpen, navItems, setIsSidebarOpen}) {
    return (
    // --- Sidebar (Navigation) ---
    <aside
      className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#1a2c38] text-white transform transition-transform duration-300 ease-in-out 
        lg:translate-x-0 lg:static lg:inset-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="flex flex-col h-full">
        {/* Logo Section */}
        <div className=" title h-16 flex items-center px-6 text-xl font-bold border-b border-gray-700">
          <span className="text-blue-400 mr-2"></span> Jobify
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-colors side-bar-link"
              onClick={(e) => {
                e.preventDefault();
                item.onClick(); //  onClick handler passed from Home
              }}
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>

        {/* Bottom Action */}
        <div className="p-4 border-t border-gray-700">
          <button className="post-btn w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-gray-300 py-3 rounded-lg font-medium transition-all">
            <PlusCircle size={20} />
            <span>Post New Job</span>
          </button>
        </div>
      </div>

      {/* Mobile Overlay (Click to close sidebar) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={setIsSidebarOpen}
        />
      )}
    </aside>
    )
}
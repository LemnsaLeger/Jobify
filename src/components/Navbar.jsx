import { Menu, X } from 'lucide-react';

import './components-styles.css';

export default function Navbar({setIsSidebarOpen, isSidebarOpen}) {

return (
    // --- Navbar (Header) ---
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 fixed top-0 z-40 py-4 w-[80%]">
      <div className="flex items-center gap-4 p-8">
        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ?
            <X size={24} />
          : <Menu size={24} />}
        </button>

        {/* Search Bar (Semantic input) */}
        <div className="hidden md:block relative">
          <input
            type="search"
            placeholder="Search jobs..."
            className="bg-gray-100 border-none rounded-lg py-2 px-4 w-60 text-sm focus:ring-2 focus:ring-blue-500 transition-all search-input"
          />
        </div>
      </div>

      {/* User Profile / Notifications */}
      <div className="flex items-center gap-4 profile-container">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-semibold text-gray-900">dev lemnsa</p>
          <p className="text-xs text-gray-500">Applicant</p>
        </div>
        <img
          className="h-10 w-10 rounded-full border-2 border-white shadow-sm"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
          alt="User profile"
        />
      </div>
    </header>

);
}
import { Pencil, MoreHorizontal } from "lucide-react";
import StatusBadge from "./statusBadge";
import "../../src/index.css";


const ApplicationRow = ({ app }) => (
  <div className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors group">
    <div className="flex items-center gap-4 flex-1">
      {/* Brand Icon Placeholder */}
      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 overflow-hidden">
        <span className="text-gray-400 font-bold">{app.company[0]}</span>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 leading-tight">{app.title}</h3>
        <p className="text-sm text-gray-500">{app.company}</p>
      </div>
    </div>

    {/* Centered Status and Date - Responsive Hidden/Shown */}
    <div className="hidden md:flex items-center gap-12 flex-1 justify-center">
      <StatusBadge status={app.status} />
      <span className="text-sm text-gray-500 font-medium whitespace-nowrap">
        {app.date}
      </span>
    </div>

    {/* Actions */}
    <div className="flex items-center gap-3 text-gray-400">
      <button className="hover:text-blue-600 p-1">
        <Pencil size={18} />
      </button>
      <button className="hover:text-gray-600 p-1">
        <MoreHorizontal size={18} />
      </button>
    </div>
  </div>
);

export default ApplicationRow;
import { useState } from "react";
import ApplicationRow from "./applicationrow";


const MyApplications = () => {
  const [data] = useState([
    {
      title: "Senior UX Designer",
      company: "Google",
      status: "Interview",
      date: "Oct 26, 2023",
    },
    {
      title: "Product Manager",
      company: "Figma",
      status: "Applied",
      date: "Oct 25, 2023",
    },
    {
      title: "Front-end Engineer",
      company: "Spotify",
      status: "Interview",
      date: "Oct 24, 2023",
    },
    {
      title: "Data Scientist",
      company: "Microsoft",
      status: "Offer",
      date: "Oct 22, 2023",
    },
    {
      title: "Designer II",
      company: "Airbnb",
      status: "Applied",
      date: "Oct 20, 2023",
    },
  ]);

  return (
    <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden p-0">
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
        <p className="text-sm text-gray-500 font-medium">
          Showing {data.length} applications
        </p>
      </div>

      <div className="flex flex-col">
        {data.map((app, index) => (
          <ApplicationRow key={index} app={app} />
        ))}
      </div>
    </section>
  );
};

export default MyApplications;
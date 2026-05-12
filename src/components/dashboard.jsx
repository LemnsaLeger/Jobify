import { useState } from "react";

import "./dashboard.css";

import StatCard from "./startCard";

import {
  Users,
  Briefcase,
  ExternalLink,
  AlertCircle,
  ChevronRight,
  Bell,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

import ActivityItem
 from "./activity-item";

// Pipeline progress bar component
   const PipelineBar = ({ label, count, pct, fillClass }) => (
  <div className="pipeline-row">
    <div className="pipeline-row-header">
      <span>{label}</span>
      <span>{count}</span>
    </div>
    <div className="pipeline-track">
      <div className={`pipeline-fill ${fillClass}`} style={{ width: `${pct}%` }} />
    </div>
  </div>
);

const Dashboard = () => {
  const [checkedSteps, setCheckedSteps] = useState({
    resume: false,
    questions: false,
  });

  const toggleStep = (key) =>
    setCheckedSteps((prev) => ({ ...prev, [key]: !prev[key] }));

  const stats = [
    {
      title: "Total Applications",
      value: "148",
      sub: "+12% this month",
      subColor: "green",
      icon: Users,
      iconBg: "icon-bg-blue",
    },
    {
      title: "Active Interviews",
      value: "6",
      sub: "2 upcoming",
      subColor: "amber",
      icon: Briefcase,
      iconBg: "icon-bg-amber",
    },
    {
      title: "Offers Received",
      value: "2",
      sub: "1 new",
      subColor: "green",
      icon: ExternalLink,
      iconBg: "icon-bg-emerald",
    },
    {
      title: "Recent Follow-ups",
      value: "9",
      sub: "3 urgent",
      subColor: "red",
      icon: AlertCircle,
      iconBg: "icon-bg-red",
    },
  ];

  const activities = [
    {
      company: "Google",
      role: "Software Engineer",
      time: "1h ago",
      type: "Applied",
      initial: "G",
      badgeClass: "badge-blue",
    },
    {
      company: "Microsoft",
      role: "Product Manager",
      time: "3h ago",
      type: "Moved to Interview",
      initial: "M",
      badgeClass: "badge-cyan",
    },
    {
      company: "Figma",
      role: "UI/UX Designer",
      time: "1d ago",
      type: "Applied",
      initial: "F",
      badgeClass: "badge-purple",
    },
    {
      company: "Airbnb",
      role: "Recruiter",
      time: "2d ago",
      type: "Followed up with",
      initial: "A",
      badgeClass: "badge-rose",
    },
  ];

  const pipeline = [
    { label: "Applied", count: 60, pct: 60, fillClass: "fill-blue" },
    { label: "Interviewing", count: 12, pct: 35, fillClass: "fill-amber" },
    { label: "Offers", count: 2, pct: 10, fillClass: "fill-emerald" },
    { label: "Rejected", count: 10, pct: 20, fillClass: "fill-red" },
  ];

  const bars = [40, 70, 45, 90, 65, 80, 95];
  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  return (
    <main className="dashboard -mt-10">
      {/* Header */}
      <header className="dashboard-header">
        <h1>
          The Dashboard <span>(Overview)</span>
        </h1>
        <p>Good morning, Sarah! Here's your application summary.</p>
      </header>

      {/* ── Stats Grid ── */}
      <section aria-label="Summary statistics" className="stats-grid">
        {stats.map((s) => (
          <StatCard key={s.title} {...s} />
        ))}
      </section>

      {/* ── Main Grid ── */}
      <section className="main-grid">
        {/* Activity Feed */}
        <article className="card activity-card">
          <div className="activity-card-header">
            <h2>Recent Activity Feed</h2>
            <button className="view-all-btn">
              View all <ChevronRight size={13} />
            </button>
          </div>
          <ul className="activity-list">
            {activities.map((a, i) => (
              <ActivityItem key={i} {...a} />
            ))}
          </ul>
        </article>

        {/* Right column */}
        <div className="right-col">
          {/* Urgent Task Card */}
          <article className="card urgent-card">
            <header className="urgent-card-header">
              <Bell className="bell-icon" />
              <span>Next Urgent Task</span>
            </header>
            <div className="urgent-card-body">
              <div className="company-logo">G</div>

              <div className="urgent-info">
                <h3>Prepare for Google Interview</h3>
                <p>
                  <Clock />
                  Tomorrow, 10:00 AM PST · Software Engineer - L4
                </p>
              </div>

              {/* Checklist */}
              <div className="checklist-box">
                <p className="checklist-label">2 Steps to complete</p>
                {[
                  { key: "resume", label: "Review Resume" },
                  { key: "questions", label: "Prep Questions" },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => toggleStep(key)}
                    className={`checklist-step${checkedSteps[key] ? " done" : ""}`}
                  >
                    <CheckCircle2 />
                    {label}
                  </button>
                ))}
                <button className="details-btn">
                  Go to Details <ArrowUpRight />
                </button>
              </div>
            </div>
          </article>

          {/* Bottom Grid */}
          <div className="bottom-grid">
            {/* Pipeline Status */}
            <article className="card pipeline-card">
              <h3>Application Pipeline Status</h3>
              <div className="pipeline-bars">
                {pipeline.map((p) => (
                  <PipelineBar key={p.label} {...p} />
                ))}
              </div>
            </article>

            {/* Application Volume */}
            <article className="card volume-card">
              <div className="volume-card-header">
                <h3>Application Volume</h3>
                <TrendingUp />
              </div>

              <div className="volume-chart-wrap">
                <div className="volume-y-axis">
                  {[15, 10, 5, 0].map((n) => (
                    <span key={n}>{n}</span>
                  ))}
                </div>
                <div className="volume-bars">
                  {bars.map((h, i) => (
                    <div key={i} className="volume-bar-col">
                      <div
                        className="volume-bar"
                        style={{ height: `${h}%` }}
                        title={`Week ${i + 1}: ${Math.round(h / 6.7)} apps`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="volume-x-axis">
                {days.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>

              <p className="volume-label">Apps per week</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
 
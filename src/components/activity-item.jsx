const ActivityItem = ({ company, role, time, type, initial, badgeClass }) => (
  <li className="activity-item">
    <div className={`activity-badge ${badgeClass}`}>{initial}</div>
    <div className="activity-content">
      <p>
        <strong>{type}</strong>
        {" · "}
        <strong>{company}</strong>
      </p>
      <p className="role">{role}</p>
    </div>
    <time className="activity-time">{time}</time>
  </li>
);

export default ActivityItem;

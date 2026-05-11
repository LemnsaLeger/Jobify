import "../index.css";

// Sub-component for the top stats cards
   const StatCard = ({ title, value, sub, subColor, icon: Icon, iconBg }) => (
     <article className="stat-card">
       <div className="stat-card-shimmer" />
       <div className="stat-card-body">
         <div className="stat-card-text">
           <p className="stat-card-title">{title}</p>
           <h3 className="stat-card-value">{value}</h3>
           <p className={`stat-card-sub ${subColor}`}>{sub}</p>
         </div>
         <div className={`stat-card-icon ${iconBg}`}>
           <Icon />
         </div>
       </div>
     </article>
   );
 

   export default StatCard;
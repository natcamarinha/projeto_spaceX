import React from "react";

function LaunchCard({ launch }) {
  return (
    <div className="cards">
      <div className="card">
        <img
          src={launch.links.patch.small}
          alt={launch.name}
        />
        <h3>{launch.name}</h3>
      </div>
    </div>
  );
}

export default LaunchCard;

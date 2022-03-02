import React from "react";
import '../style/LaunchCard.css';

function LaunchCard({ launch }) {
  return (
    <div className="container">
      <div className="imgContainer">
        <img
          src={launch.links.patch.small}
          alt={launch.name}
        />
      </div>
      <div className="nameContainer">
        <h3>{launch.name}</h3>
      </div>

    </div>
  );
}

export default LaunchCard;

import React from "react";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  return (
    <div>
      <h2>Dashboad</h2>
      <div className="fixed-action-btn">
        <Link to={props.link_add} className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

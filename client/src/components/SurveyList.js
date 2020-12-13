import React, { Component } from "react";
import { Link } from "react-router-dom";

class SurveyList extends Component {
  render() {
    return (
      <div>
        <h2 className="header">Surveys</h2>
        <Link
          to="/surveys/new"
          class="btn-floating btn-large waves-effect waves-light red"
        >
          <i class="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default SurveyList;
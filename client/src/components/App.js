//es2015 modules. import and export.

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
/// Comps
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./SurveyNew";
import SurveyList from "./SurveyList";

// styles
import "materialize-css/dist/css/materialize.min.css";

// Dummy comps

// converted from functiuonal Comp to class Comp
class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <div className=" section">
              <Route path="/" exact component={Landing} />
              <Route
                path="/dashboard"
                render={({ props }) => (
                  <Dashboard link_add="/surveys/new" {...props} />
                )}
              />
              <Route
                exact
                path="/surveys"
                render={({ props }) => <SurveyList {...props} />}
              />
              <Route path="/surveys/new" component={SurveyNew} />
            </div>
          </div>
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}

export default connect(null, actions)(App);

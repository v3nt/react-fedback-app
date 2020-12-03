import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

/// Comps
import Header from "./Header";
import Footer from "./Footer";

// styles
import "materialize-css/dist/css/materialize.min.css";

// Dummy comps
const Dashboard = () => <h2>Dash</h2>;
const SurveyNew = () => <h2>Survey new</h2>;
const SurveyList = () => <h2>Survey List</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/surveys" component={SurveyList} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

/// Comps
import Header from "./Header";
import Footer from "./Footer";

// Dummy comps
const Dashboard = () => <h2>Dash</h2>;
const SurveyNew = () => <h2>Survey new</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={Landing} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/survey/new" component={SurveyNew} />
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;

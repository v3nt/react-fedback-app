import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

/// Comps
import Header from "./Header";
import Footer from "./Footer";

// Dummy comps
const Dashboard = () => <h2>Dash</h2>;
const SurveyNew = () => <h2>Survey new</h2>;
const Landing = () => <p>Landin</p>;

const App = () => {
  return (
    <div>
      <Header />
      <p>Hi there</p>
      <Landing />
      <Dashboard />
      <SurveyNew />
      <Footer />
    </div>
  );
};

export default App;

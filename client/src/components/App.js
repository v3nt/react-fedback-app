import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
/// Comps
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";

// styles
import "materialize-css/dist/css/materialize.min.css";

// Dummy comps
const Dashboard = () => <h2>Dash</h2>;
const SurveyNew = () => <h2>Survey new</h2>;
const SurveyList = () => <h2>Survey List</h2>;

// converted from functiuonal Comp to class Comp
class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
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
  }
}

// const App = () => {
//   return (
//     <div className="container">
//       <BrowserRouter>
//         <div>
//           <Header />
//           <Route path="/" exact component={Landing} />
//           <Route path="/dashboard" component={Dashboard} />
//           <Route exact path="/surveys" component={SurveyList} />
//           <Route path="/surveys/new" component={SurveyNew} />
//         </div>
//       </BrowserRouter>
//       <Footer />
//     </div>
//   );
// };

export default connect(null, actions)(App);

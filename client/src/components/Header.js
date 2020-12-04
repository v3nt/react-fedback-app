import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">
            Emaily
          </a>
          <ul id="nav-mobile" className="right ">
            <li>
              <a href="sass.html">Google Login</a>
            </li>
            <li>
              <a href="badges.html">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

// function mapStateToProps(state) {
//   return { auth: state.auth };
// }
// can be RF to
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);

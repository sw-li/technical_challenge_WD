  // for the technical challenge, there is no need for auth route and buttons
  // for latter developpement, it will be interesting to intergrate the profile page to follow up orders 
  // maybe the navbar is not usefull for the moment 

import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop


  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/goods">
        <button>Goods</button>
      </Link>
    </nav>
  );
}

export default Navbar;

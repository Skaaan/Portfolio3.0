import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">

      <nav class="navbar">

        <Link to="/"> Home </Link>
        <a href="/#skills">Skills</a> 
        {/* Use /#skills to go to the home page and scroll to the skills section */}
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Education & Work experience </Link>

        </nav>
      </div>
    </div>
  );
}

export default Navbar;
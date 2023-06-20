import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">


      <div class="home-sci">
      
      <a href="https://www.linkedin.com/in/skander-ayari96/">
            <LinkedInIcon />
          </a>
          <a href="mailto:skanderayari96@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://github.com/Skaaan">
            <GithubIcon />
          </a>

      </div>
      
    </div>
  );
}

export default Footer;
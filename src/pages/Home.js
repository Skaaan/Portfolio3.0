import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import CV from "../assets/CV.pdf";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Skander</h2>
        <div className="prompt">
          <p>I'm an applied computer science Student
            <a href="https://www.htw-berlin.de/studium/studienorientierung/angebote-digital-und-jederzeit/informatik/" id="HTW-link">  @HTW-Berlin</a> </p>
          <p>I love Coding</p>

          <div class="home-sci">
            <a href="https://www.linkedin.com/in/skander-ayari96/" className="icon-link">
              <LinkedInIcon />
            </a>
            <a href="mailto:skanderayari96@gmail.com" className="icon-link">
              <EmailIcon />
            </a>
            <a href="https://github.com/Skaaan" className="icon-link">
              <GithubIcon />
            </a>
          </div>

          <a href={CV} download class="btn">
            Download CV
          </a>



        </div>
      </div>
      <div className="skills" id="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h3> Front-End</h3>
            <span>
              ReactJS, HTML, CSS, BootStrap
            </span>
          </li>
          <li className="item">
            <h3>Back-End</h3>
            <span>
              Spring boot, MySQL
            </span>
          </li>
          <li className="item">
            <h3>Languages</h3>
            <span>Java, JavaScript, Python, C#</span>
          </li>
          <li className="item">
            <h3>Additional Skills</h3>
            <span><b>Version control:</b> Git </span>
          </li>
          <li className="item">
            <span> <b>Project Management:</b> Jira </span>
          </li>
          <li className="item">
            <span> <b>Documentation:</b> Confluence </span>
          </li>
          <li className="item">
            <span> <b>IDEs / Code Editors:</b> InteliJ, Eclipse, Visual Studio Code, Unity  </span>
          </li>

        </ol>
      </div>
    </div>
  );
}

export default Home;
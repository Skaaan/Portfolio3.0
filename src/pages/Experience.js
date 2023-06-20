import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">



        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            "Abou Kacem Chakki" Highschool La Marsa
          </h3>
          <p> Baccalaureate Mathematics</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Vivat Lingua Tübingen German Language School
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            TestDaf TDN4
          </h4>

          <p> Received a TDN4 certificate on the TestDaF</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - until now"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Hochschule für Technik und Wirtschaft Berlin
          </h3>
          <p>Currently enrolled in a program for Applied Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="02/2023 - 05/2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Woring Student as a System Administrator - mgm technology partners GmbH
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Berlin
          </h4>
          <p>
            I contributed to configuring Jira Datacenter, resolving associated Techhelp tickets, and creating Confluence documentation including project pages and employee profiles.
          </p>
        </VerticalTimelineElement>


      </VerticalTimeline>
    </div>
  );
}

export default Experience;
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import BoltIcon from "@mui/icons-material/Bolt";
import PetsIcon from "@mui/icons-material/Pets";

export default function Experience() {
  return (
    <div>
      <h1>Experience</h1>
      <div className="experience">
        <VerticalTimeline lineColor="#2b334e">
          {/* Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element==education"
            date="2003"
            iconStyle={{ background: "#2b334e", color: "#ffdac3" }}
            icon={<SchoolIcon />}
          >
            <h3 class="vertical-timeline-element-title">Boston Arts Academy</h3>
            <p>HighSchool Diploma</p>
            <p>Major: Dance</p>
          </VerticalTimelineElement>

          {/* Work Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element==work"
            date="2003-2007"
            iconStyle={{ background: "#2b334e", color: "#ffdac3" }}
            icon={<PointOfSaleIcon />}
          >
            <h3 class="vertical-timeline-element-title">Customer Service</h3>
            <p>Sales, Inventory,Continued Education</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element==work"
            date="2007-2015"
            iconStyle={{ background: "#2b334e", color: "#ffdac3" }}
            icon={<BoltIcon />}
          >
            <h3 class="vertical-timeline-element-title">Comicopia</h3>
            <p>Manager</p>
            <p>Customer Service, Media, Community Outreach</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element==work"
            date="2015-2023"
            iconStyle={{ background: "#2b334e", color: "#ffdac3" }}
            icon={<PetsIcon />}
          >
            <h3 class="vertical-timeline-element-title">Dog Grooming</h3>
            <p>
              Managment, Bathing, Grooming, NGAA certification &continued
              education{" "}
            </p>
          </VerticalTimelineElement>
          {/* Bootcamp Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element==education"
            date="2023"
            iconStyle={{ background: "#2b334e", color: "#ffdac3" }}
            icon={<SchoolIcon />}
          >
            <h3 class="vertical-timeline-element-title">
              DU Full-Stack Bootcamp
            </h3>
            <p>Certification</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

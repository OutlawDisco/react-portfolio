import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import BoltIcon from '@mui/icons-material/Bolt';
import PetsIcon from '@mui/icons-material/Pets';

export default function Experience() {
  return (
    <div>
      <h1>Experience</h1>
      <div className="experience">
        <VerticalTimeline lineColor="#2b334e">
          {/* Bootcamp Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element==education"
            date="2023"
            iconStyle={{ background: '#2b334e', color: '#ffdac3' }}
            icon={<SchoolIcon />}
          >
            <h3 class="vertical-timeline-element-title">
              University of Denver
            </h3>
            <h4 class="vertical-timeline-element-title">
              Flex Full-Stack Web Bootcamp
            </h4>
            <p className="experienece-p">Certification Graduate</p>
          </VerticalTimelineElement>
          {/* Work Experience */}
          <VerticalTimelineElement
            className="vertical-timeline-element==work"
            date="2015-2023"
            iconStyle={{ background: '#2b334e', color: '#ffdac3' }}
            icon={<PetsIcon />}
          >
            <h3 class="vertical-timeline-element-title">
              Independent Client Relationship Managment and Pet Care
            </h3>
            <p className="experienece-p">
              Managment, Onboarding, Leadership, Grooming, NGAA certification &
              continued education{' '}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element==work"
            date="2007-2015"
            iconStyle={{ background: '#2b334e', color: '#ffdac3' }}
            icon={<BoltIcon />}
          >
            <h3 class="vertical-timeline-element-title">
              Comicopia: Graphic Novel and specialty Book Store
            </h3>
            <p className="experienece-p">
              Marketing, Management, Sales, Customer Service, Event Organizing,
              Media and Community Outreach
            </p>
          </VerticalTimelineElement>
          {/* Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element==education"
            date="2013"
            iconStyle={{ background: '#2b334e', color: '#ffdac3' }}
            icon={<SchoolIcon />}
          >
            <h3 class="vertical-timeline-element-title">
              Massachussetts Bay Community College
            </h3>
            <h4 class="vertical-timeline-element-title">Courswork</h4>
            <p className="experienece-p">
              Biology and Intro to Computer Science{' '}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element==work"
            date="2003-2007"
            iconStyle={{ background: '#2b334e', color: '#ffdac3' }}
            icon={<PointOfSaleIcon />}
          >
            <h3 class="vertical-timeline-element-title">
              Client Relations and Customer Service
            </h3>
            <p className="experienece-p">
              Client Relationship building, Team development, Sales, Inventory,
              Continued Education
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

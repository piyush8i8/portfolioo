import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022 - 2026"
            iconStyle={{ background: "purple", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Btech</h3>
            <h5 className="vertical-timeline-element-subtitle">
              SVIET
            </h5>
            <h6 className="vertical-timeline-element-subtitle">
              CGPA: 9.3 
            </h6>
          </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2019 - 2021"
            iconStyle={{ background: "purple", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Intermediate</h3>
            <h5 className="vertical-timeline-element-subtitle">
              Shivam Convent, CBSE
            </h5>
            <h6 className="vertical-timeline-element-subtitle">
              Score : 85 Percent
            </h6>
          </VerticalTimelineElement>
        
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2017 - 2019"
            iconStyle={{ background: "purple", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Matriculation</h3>
            <h5 className="vertical-timeline-element-subtitle">
              Shivam Convent, CBSE
            </h5>
            <h6 className="vertical-timeline-element-subtitle">
              Score : 93 Percent
            </h6>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;

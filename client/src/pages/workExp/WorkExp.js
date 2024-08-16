import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
           
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
             date="2024"
              iconStyle={{ background: "#1e1e2c", color: "white" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Web developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                The EdGlide Project
              </h4>
              <p>
              During my experience in  Web Developer, I've gained a comprehensive understanding of various strategies and tools that drive online growth.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;

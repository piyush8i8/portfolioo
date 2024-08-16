import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          This description highlights the project's scope, technology stack, and my
          specific contributions, making it<br /> a strong showcase of my skills and experience.
        </p>
        
        {/* First row of cards */}
        <div className="row" id="ads">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, loop: Infinity }}
            className="col-md-4"
          >
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.j18U6uvAg-ta2XBvDKNQlAHaEK&pid=Api&P=0&h=180"
                  alt="project1"
                />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    Visitor Management System
                  </h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/piyush8i8/Visitor-WebApp"
                >
                  View
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, loop: Infinity }}
            className="col-md-4"
          >
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Mobile App</span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR356D-1YtSagN4-_ZdjZ5H9o6PKUO4h12dvw&usqp=CAU"
                  alt="project2"
                />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">Flutter</span>
                <span className="card-detail-badge">IOS / ANDROID</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">My Profile</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/piyush8i8/App_profile_Flutter"
                >
                  View
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, loop: Infinity }}
            className="col-md-4"
          >
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">App</span>
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.sEViY8gtOET7Q9iRKlZ2QAEsEs&pid=Api&P=0&h=180"
                  alt="project2"
                />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">Flutter</span>
                <span className="card-detail-badge">IOS / ANDROID</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Mausam App</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/piyush8i8/Mausam_Appp"
                >
                  View
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second row of cards */}
        <div className="row mt-4">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, loop: Infinity }}
            className="col-md-4"
          >
            <div className="card rounded">
              <div className="card-image">
                {/* <span className="card-notify-badge">Console</span> */}
                <img
                  src="https://i.ytimg.com/vi/jb27n67qvyE/maxresdefault.jpg"
                  alt="project3"
                />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">C++</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Voting App</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/piyush8i8/Votting_system"
                >
                  View
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, loop: Infinity }}
            className="col-md-4"
          >
            <div className="card rounded">
              <div className="card-image">
                {/* <span className="card-notify-badge">Frontend</span> */}
                <img
                  src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                  alt="project3"
                />
              </div>
              <div className="card-image-overlay m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">JS</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Organization Website</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/piyush8i8/Website"
                >
                  View
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;

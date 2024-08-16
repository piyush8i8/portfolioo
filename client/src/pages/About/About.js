import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "../../images/new.jpeg"
const About = () => {
  return (
    <>
      <motion.div
        className="about"
        id="about"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
      >
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img
              src={img}
              alt="profile_pic"
            />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
            I am currently pursuing a BTech in Computer Science and Engineering, with a strong foundation in web development, full-stack projects, and hands-on experience through internships. My expertise spans across various domains, including web development, graphic design, and digital marketing. I have a knack for creating visually appealing and user-friendly websites, with a particular focus on Wix development. As a digital marketer, I leverage my skills to optimize online presence and drive engagement. I am passionate about continuous learning and always eager to take on new challenges.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;

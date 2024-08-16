import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./home.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [theme, setTheme] = useTheme();
  
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container-fluid home-container" id="home">
        {/* <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div> */}
        <div className="container home-content">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Hello, I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    " App Developer!",
                    "Mern Stack Developer!",
                    "WIX Developer!",
                    "Graphics Designer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=6203329639"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className="btn btn-cv" href={Resume} download="your_name.pdf">
                My Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;

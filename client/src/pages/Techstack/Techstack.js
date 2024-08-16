import React from "react";
import { motion } from "framer-motion";
import "./Techstack.css";
import { TechstackList } from "../../utils/TechstackList";
import 'bootstrap/dist/css/bootstrap.min.css';
const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, loop: Infinity }}
        >
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👉 including programming languages, frameworks, databases,
            front-end and back-end tools, and APIs
          </p>
        </motion.div>
        <div className="row">
          {TechstackList.map((tech) => (
            <motion.div
              key={tech._id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: tech._id * 0.2 }}
              className="col-md-3"
            >
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="align-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;

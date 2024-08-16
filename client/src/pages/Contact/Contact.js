import React, { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import "./Contact.css";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0ybzz36', 'template_vvar33n', form.current, 'SZgfsJqMQD0gTTkmF')
      .then(
        () => {
          toast.success('Message sent successfully!', {
            position: 'top-right',
            autoClose: 5000,
          });
          form.current.reset(); // Reset the form after submission
        },
        (error) => {
          toast.error(`Failed to send message: ${error.text}`, {
            position: 'top-right',
            autoClose: 5000,
          });
        }
      );
  };

  return (
    <>
      <div className="contact" id="contact">
        <ToastContainer />
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <motion.img
                    src="https://t4.ftcdn.net/jpg/03/37/96/33/360_F_337963325_EJuPjWslX3vAFxJ59L3y1cm6IsSfo07s.jpg"
                    alt="contact"
                    className="image"
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <motion.div
                className="card2 d-flex card border-0 px-4 py-5"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="row">
                      <h6>Contact With</h6>
                      <div className="Column flex">
                        <a href="https://www.linkedin.com/in/piyush-kumar-464b16251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                          <BsLinkedin color="blue" size={30} className="ms-2" />
                        </a>
                        <a href="https://github.com/piyush8i8">
                          <BsGithub color="black" size={30} className="ms-2" />
                        </a>
                        <a href="https://www.instagram.com/piyush_kumar1409?igsh=d2h3eTRwYm8yazBu">
                          <BsInstagram color="purple" size={30} className="ms-2" />
                        </a>
                      </div>
                    </div>
                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="from_name"
                        placeholder="Enter your Name"
                        className="mb-3"
                        required
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="from_email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        required
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        name="message"
                        placeholder="Write your message"
                        className="mb-3"
                        required
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" type="submit">
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

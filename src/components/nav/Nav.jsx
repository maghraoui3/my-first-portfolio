import React from "react";
import "./nav.css";
import { AiOutlineHome } from "../../../node_modules/react-icons/ai";
import { AiOutlineUser } from "../../../node_modules/react-icons/ai";
import { BiBook } from "../../../node_modules/react-icons/bi";
import { RiServiceLine } from "../../../node_modules/react-icons/ri";
import { BiMessageSquareDetail } from "../../../node_modules/react-icons/bi";
import { useState, useEffect } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#top");
  // const [activeSection, setActiveSection] = useState('');


useEffect(() => {
  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    const experienceSection = document.getElementById('experience');
    const servicesSection = document.getElementById('services');
    const contactSection = document.getElementById('contact');

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    if (
      aboutSection &&
      scrollPosition >= aboutSection.offsetTop &&
      scrollPosition < experienceSection.offsetTop
    ) {
      // setActiveSection('about');
      setActiveNav("#about")
    } else if (
      experienceSection &&
      scrollPosition >= experienceSection.offsetTop &&
      scrollPosition < servicesSection.offsetTop
    ) {
      // setActiveSection('experience');
      setActiveNav("#experience")
    } else if (
      servicesSection &&
      scrollPosition >= servicesSection.offsetTop &&
      scrollPosition < contactSection.offsetTop
    ) {
      // setActiveSection('services');
      setActiveNav("#services")
    } else if (contactSection && scrollPosition >= contactSection.offsetTop) {
      // setActiveSection('contact');
      setActiveNav("#contact")
    } else {
      // setActiveSection('home');
      setActiveNav("#top")
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


  return (
    <nav>
      {/* {activeSection} */}
      <a
        // id="home"
        href="#top"
        onClick={() => setActiveNav("#top")}
        className={activeNav === "#top" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;

import "./navBar.css";
import { useEffect, useState } from "react";
import WOW from "wow.js";

export default function NavBar() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  const navToggle = () => {
    setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
    setToggleIcon(toggleIcon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler");
  };

  const closeNav = () => {
    setActive("nav__menu");
    setToggleIcon("nav__toggler");
  };

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <nav className="nav">
      <ul className={active}>
        <li className="nav__item">
          <a
            href="#pageHome"
            className="optionMenu logo wow animate__animated animate__fadeIn"
            data-wow-delay="0.2s"
            onClick={closeNav}
          >
            Home
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#contactForm"
            className="optionMenu wow animate__animated animate__fadeIn"
            data-wow-delay="0.4s"
            onClick={closeNav}
          >
            Contatos
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#pageProjects"
            className="optionMenu wow animate__animated animate__fadeIn"
            data-wow-delay="0.6s"
            onClick={closeNav}
          >
            Meus projetos
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#pageSkills"
            className="optionMenu wow animate__animated animate__fadeIn"
            data-wow-delay="0.8s"
            onClick={closeNav}
          >
            Minhas hard skills
          </a>
        </li>
      </ul>
      <div className={toggleIcon} onClick={navToggle}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

/* import * as React from "react"; */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "./navBar.css";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolltoDivHome, setScrolltoDivHome] = useState(false);
  const [scrolltoDivContact, setScrolltoDivContact] = useState(false);
  const [scrolltoDivProjects, setScrolltoDivProjects] = useState(false);
  const [scrolltoDivHardSkills, setScrolltoDivHardSkills] = useState(false);

  useEffect(() => {
    if (scrolltoDivHome === true) {
      const divDestinoHome = document.getElementById("id-pageHome");
      divDestinoHome.scrollIntoView({ behavior: "smooth" });
      setScrolltoDivHome(false);
    }
  }, [scrolltoDivHome]);

  useEffect(() => {
    if (scrolltoDivContact === true) {
      const divDestinoContact = document.getElementById("id-pageContact");
      divDestinoContact.scrollIntoView({ behavior: "smooth" });
      setScrolltoDivContact(false);
    }
  }, [scrolltoDivContact]);

  useEffect(() => {
    if (scrolltoDivProjects === true) {
      const divDestinoProjects = document.getElementById("id-projects");
      divDestinoProjects.scrollIntoView({ behavior: "smooth" });
      setScrolltoDivProjects(false);
    }
  }, [scrolltoDivProjects]);

  useEffect(() => {
    if (scrolltoDivHardSkills === true) {
      const divDestinoHardSkills = document.getElementById("id-skills");
      divDestinoHardSkills.scrollIntoView({ behavior: "smooth" });
      setScrolltoDivHardSkills(false);
    }
  }, [scrolltoDivHardSkills]);

  function goHome() {
    setScrolltoDivHome(true);
  }

  function goContact() {
    setScrolltoDivContact(true);
  }

  function goProjects() {
    setScrolltoDivProjects(true);
  }

  function goSkills() {
    setScrolltoDivHardSkills(true);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar className="toolbar">
          <div className="optionMenu" onClick={goHome}>
            Home
          </div>
          <div className="optionMenu" onClick={goContact}>
            Contatos
          </div>
          <div className="optionMenu" onClick={goProjects}>
            Meus projetos
          </div>
          <div className="optionMenu" onClick={goSkills}>
            Minhas hard skills
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

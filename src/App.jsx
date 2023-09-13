import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./componentes/theme";

import NavBar from "./componentes/navBar/navBar";
import PageHome from "./componentes/pageHome/pageHome";
import PageProjects from "./componentes/pageProjects/pageProjects";
import PageSkills from "./componentes/pageSkills/pageSkills";
import Footer from "./componentes/pageFooter/Footer";
import ContactForm from "./componentes/contactForm/contactForm";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.background = isDarkMode
      ? theme.dark.background
      : theme.light.background;
    document.body.style.color = isDarkMode ? theme.dark.text : theme.light.text;
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
      <div>
        <NavBar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <PageHome />
        <PageSkills />
        <PageProjects />
        <ContactForm />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

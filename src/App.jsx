import NavBar from "./componentes/navBar/navBar";
import PageHome from "./componentes/pageHome/pageHome";
import PageProjects from "./componentes/pageProjects/pageProjects";
import PageSkills from "./componentes/pageSkills/pageSkills";
import Footer from "./componentes/pageFooter/Footer";
import ContactForm from "./componentes/contactForm/contactForm";

function App() {
  return (
    <>
      <NavBar />
      <PageHome />
      <PageSkills />
      <PageProjects />
      <ContactForm />
      <Footer /> 
    </>
  );
}

export default App;

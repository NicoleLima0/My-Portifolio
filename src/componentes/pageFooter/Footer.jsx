import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <p>&copy; {currentYear} Nicole. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

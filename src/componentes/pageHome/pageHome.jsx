import "./pageHome.css";
import imgProfile from "../../assets/images/Nicole.jpg";
import React, { useContext } from "react";
import { useEffect } from "react";
import WOW from "wow.js";
import { ThemeContext } from "styled-components";
import theme from "../theme";

export default function PageHome() {
  const curriculoPDF =
    "https://drive.google.com/file/d/1GHEA_qgQC9rVB4Dkj-Pn7diodAssf3B_/view?usp=drivesdk";

  const redirectCurriculo = () => {
    window.open(curriculoPDF, "_blank");
  };

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const themeContext = useContext(ThemeContext);
  const isDarkMode = themeContext === theme.dark;

  const skillsButtonStyle = {
    backgroundColor: isDarkMode ? "rgb(99, 0, 99)" : "#502d9d",
  };

  return (
    <>
      <div id="pageHome">
        <div className="container-pageHome">
          <div
            className="container wow animate__animated animate__fadeInLeft"
            id="id-pageHome"
          >
            <div className="title">Oie, meu nome é </div>
            <div className="name">Nicole Carvalho Lima Martins</div>
            <div className="subTitle">
              Tenho 21 anos e moro em Teresópolis, no Rio de Janeiro.
              Atualmente, estou no segundo período do curso de Análise e
              Desenvolvimento de Sistemas, uma área muito interessante que
              despertou minha paixão pela tecnologia.
              <div className="subTitle2">Desenvolvedora front-end</div>A
              oportunidade de criar interfaces visuais de aplicativos e sites,
              tornando-os atraentes, intuitivos e funcionais para os usuários é
              incrível. Uma interface bem projetada e amigável pode fazer toda a
              diferença na experiência do usuário, influenciando diretamente a
              forma como eles interagem com o produto ou serviço. Ser capaz de
              criar interfaces intuitivas e agradáveis proporciona um impacto
              positivo na satisfação do usuário e no sucesso do projeto como um
              todo.
            </div>
            <div className="divButton">
              <button
                onClick={redirectCurriculo}
                className="buttonCurriculo"
                style={skillsButtonStyle}
              >
                <span>Ver currículo</span>
              </button>
            </div>
          </div>
          <div className="cardDiv wow animate__animated animate__fadeInUp">
            <img src={imgProfile} alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
}

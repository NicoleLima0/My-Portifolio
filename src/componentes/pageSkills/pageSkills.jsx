import "./pageSkills.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import imgJs from "../../assets/images/javascript.jpg";
import imgReact from "../../assets/images/react.png";
import imgHtml from "../../assets/images/html.png";
import imgCss from "../../assets/images/css.png";
import imgSQL from "../../assets/images/SQL.png";
import imgGit from "../../assets/images/Git.png";
import { useEffect } from "react";
import WOW from "wow.js";
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components'; 
import theme from '../theme';

export default function PageSkills() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const themeContext = useContext(ThemeContext); 
  const isDarkMode = themeContext === theme.dark; 

  const skillsContainerStyle = {
    backgroundColor: isDarkMode ? 'rgb(99, 0, 99)' : '#502d9d', };
  

  return (
    <>
    <div id="pageSkills">
      <div
        className="titleSkills wow animate__animated animate__fadeInUp"
        data-wow-delay="0.2s"
        id="id-skills"
      >
        <h1> Minhas hard skills </h1>
      </div>
      <div className="skillsComplete">
        <div className="cardSkills">
          <div
            className="js wow animate__animated animate__fadeInUp"
            data-wow-delay="0.4s"
          >
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardActionArea>
                <CardMedia className="mediaCard">
                  <img src={imgJs} alt="Javascript" className="pictureJs" />
                </CardMedia>
                <CardContent style={skillsContainerStyle}>
                  <div className="skillsTitle">JavaScript</div>
                  <div className="textSkills">
                    Desenvolvimento Web Front-End - <br /> Manipulação do DOM -
                    Programação Orientada a Objetos - Manipulação de eventos -
                    Resolução de problemas - Boas práticas de Desenvolvimento.
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div
            className="react wow animate__animated animate__fadeInUp"
            data-wow-delay="0.6s"
          >
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardActionArea>
                <CardMedia className="mediaCard">
                  <img src={imgReact} alt="React" className="pictureSkills" />
                </CardMedia>
                <CardContent style={skillsContainerStyle}>
                  <div className="skillsTitle">React</div>
                  <div className="textSkills">
                    Ferramentas de Desenvolvimento - Desenvolvimento de
                    Componentes - Familiaridade com a sintaxe JSX - Estado.
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div
            className="sql wow animate__animated animate__fadeInUp"
            data-wow-delay="0.8s"
          >
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardActionArea>
                <CardMedia className="mediaCard">
                  <img src={imgSQL} alt="SQL" className="pictureSkills" />
                </CardMedia>
                <CardContent style={skillsContainerStyle}>
                  <div className="skillsTitle">SQL</div>
                  <div className="textSkills">
                    {" "}
                    Manipulação de dados - Consultas SELECT - Criação e
                    modificação de tabelas - Funções de agregação.
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
        <div className="cardSkills2">
          <div
            className="html wow animate__animated animate__fadeInUp"
            data-wow-delay="1s"
          >
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardActionArea>
                <CardMedia className="mediaCard">
                  <img src={imgHtml} alt="HTML" className="pictureSkills" />
                </CardMedia>
                <CardContent style={skillsContainerStyle}>
                  <div className="skillsTitle">HTML</div>
                  <div className="textSkills">
                    Organização Lógica e Semântica - Acessibilidade Web -
                    Estruturação de Páginas - Tags e Atributos - Elementos
                    Multimídia - Links e Navegação.
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div
            className="css wow animate__animated animate__fadeInUp"
            data-wow-delay="1.2s"
          >
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardActionArea>
                <CardMedia className="mediaCard">
                  <img src={imgCss} alt="CSS" className="pictureSkills" />
                </CardMedia>
                <CardContent style={skillsContainerStyle}>
                  <div className="skillsTitle">CSS</div>
                  <div className="textSkills">
                    Criação de layouts responsivos - Design Visual -
                    Acessibilidade - Resolução de Problema - Otimização de
                    Desempenho - CSS3 Transitions e Animations.
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div
            className="git wow animate__animated animate__fadeInUp"
            data-wow-delay="1.4s"
          >
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardActionArea>
                <CardMedia className="mediaCard">
                  <img src={imgGit} alt="Git" className="pictureSkills" />
                </CardMedia>
                <CardContent style={skillsContainerStyle}>
                  <div className="skillsTitle">GIT</div>
                  <div className="textSkills">
                    Controle de Versões - Branchs e Merges - Repositórios
                    Remotos - Commits.
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
